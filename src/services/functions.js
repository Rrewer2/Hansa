import { bucklingSafety, tankData, motorData, VPipe, pipesData, pipesSData, coolerData } from "./data";

export const round = (num, param = 10) => (typeof num === "string" ? num : num === Infinity || isNaN(num) ? "" : Math.round(num * param) / param);

export const getId = (key) => key + Date.now();

export const sqr = (a) => (Math.PI * a ** 2) / 4;
const S = (D, d = 0) => sqr(D) - sqr(d); //Площа поверхні
const V = (S, L) => (S * L) / 10 ** 6; //Об'єм циліндра
const t = (V, l, Q) => (V * 60 * l) / Q; //Час роботи
const F = (p, S) => (p * S) / 100; //Сила
const v = (L, t) => L / t; //Швидкість
const FI = (d, L) => (Math.PI * sqr(d) ** 2) / L / 2; //Сила вигину
const wallThick = (D, p) => (D * 2.6 * p) / 200 / 47;
// const wallThick = () => (D() * P()) / (2 * 138 + 0.6 * P());
// const wallThick = () => (D() * P()) / (2.3 * 800 - P());

const tank = (Q) => 2 * Q; //Ємність баку
export const getStandartTank = ({ tank }, T) => tankData[tank].filter(({ Size }) => Size >= 0.8 * T); // Розмір баку

const Power = (Q, p) => (Q * p) / 500; //Потужність розрахункова
const pressure = (Q, P) => (P * 500) / Q; //Тиск
export const setPressure = (unit, P) => (unit[0].Q ? (unit[0].p = round(pressure(unit[0].Q, P), 1)) : {});
export const reducedPower = (unit) => unit.map(({ Q, p, DBD }) => Power(Q, getPressure({ DBD, p }))).reduce((a, b) => a + b); // Сукупна потужність
export const getStandartPower = (P) => motorData.find((N) => N >= 0.97 * P); //Потужність каталогова
export const Qback = (item) => pumpCounting(item).Qback;
export const Qmax = (project) =>
  project
    .map(({ unit }) => unit.map((item) => Qback(item)))
    .flat()
    .reduce((a, b) => a + b);

export const getVFU = (Q, n) => (Q * 1000) / (n * 0.96);
export const getQ = (VFU, n) => (VFU * (n * 0.96)) / 1000;
const pipe = (Q, VP) => 2 * (Q / (Math.PI * VP * 0.06)) ** 0.5; //Діаметр труби
const pipePmax = (Q) => pipe(Q, VPipe.P[0]);
const pipeTmax = (QBack) => pipe(QBack, VPipe.T[0]);
const pipePmin = (Q) => pipe(Q, VPipe.P[1]);
const pipeTmin = (QBack) => pipe(QBack, VPipe.T[1]);

export const getMaxPower = ({ VFU, n, p }) => Power(getQ(VFU, n), p); //Потужність двигуна, яка є максимальною для вибраної помпи
const getPressure = ({ DBD, p, directPressValue, minDirectPressure }) => {
  // const direct = directPress === "011" ? directPressValue : null;
  const vals = [directPressValue, DBD, p, minDirectPressure].filter((v) => v);
  return vals.length ? Math.min(...vals) : 0;
};

export const HKSHTitle = ({ D, d, L, mountA = 2, mountB = 2 }) => {
  return "HKSH" + mountA + mountB + "." + ("000" + D).slice(-3) + ("000" + d).slice(-3) + ("000" + L).slice(-4);
};
export const hkshCounting = ({ D, d, L, z, directPress, directPressValue, directPressValueB }, { Q, p, DBD, HKSH }) => {
  const SD = S(D);
  const Sd = S(D, d);
  const VD = V(SD, L);
  const Vd = V(Sd, L);
  const tOut = t(VD, z, Q);
  const tIn = t(Vd, z, Q);
  const tC = tIn + tOut;
  const minDirectPressure = Math.min(...HKSH.map(({ directPress, directPressValue }) => (directPress === "011" ? directPressValue : null)).filter((v) => v));
  const FOut = F(getPressure(["011", "012", "013"].some((el) => directPress === el) ? { DBD, p, directPressValue, minDirectPressure } : { DBD, p, minDirectPressure }), SD);
  const FIn = F(getPressure(["011", "012", "014"].some((el) => directPress === el) ? { DBD, p, directPressValue: directPress === "012" ? directPressValueB : directPressValue, minDirectPressure } : { DBD, p, minDirectPressure }), Sd);
  const vOut = v(L, tOut);
  const vIn = v(L, tIn);
  const wall = wallThick(D, getPressure({ DBD, p, directPressValue, directPress }));
  const k = S(D) / S(D, d);
  return { FOut, FIn, tOut, tIn, tC, VD, Vd, k, vOut, vIn, wall };
};

export const buckling = ({ HKSH, p, DBD }) => {
  const SD = S(HKSH?.D);
  const FOut = F(getPressure({ DBD, p, directPressValue: HKSH.directPressValue, directPress: HKSH.directPress }), SD);
  const F1 = FI(HKSH?.d, HKSH?.L);
  return F1 <= FOut ? "error" : 1 - FOut / F1 < bucklingSafety / 100 ? "yellow" : "";
};

export const unitTitle = (unit) => {
  const power = getStandartPower(reducedPower(unit));
  const pumpLitre = unit.map((item) => item.Q).join("x");
  return power && pumpLitre ? `${round(power)}kW - ${pumpLitre}L` : "";
};
export const getQfromProject = (project) => project.map(({ unit }) => unit.map(({ Q }) => Q)).flat();
export const getT = (Q) => tank(Q.reduce((a, b) => a + b));
export const getTankSize = (project, meta) => getStandartTank(meta, agregatCounting(project));

export const agregatTitle = (project, meta, order) => {
  const P = project.map(({ unit }) => reducedPower(unit)).map((el) => getStandartPower(el));
  const pmax = Math.max(project.flatMap(({ unit }) => unit.map(({ p }) => p)));
  const Q = getQfromProject(project).map((q) => round(q));
  const type = order.tank?.tankData?.type || meta.tank;
  const size = order.tank?.tankData?.Size || getStandartTank(meta, getT(Q))?.Size;
  const tank = type && size ? `HAG${type}${size}` : "";
  const motor = P.some((el) => el) ? `${P.join("/")}` : "";
  const pump = Q.some((el) => el) ? `${Q.join("/")}` : "";
  const pressure = pmax ? `${pmax}` : "";
  const extra = order.frames?.title ? "-ZAB" : order.trays?.title ? "-W" : "";
  const sp1 = tank && motor ? "-" : "";
  const sp2 = pump && motor ? "-" : "";
  const sp3 = pump && pressure ? "." : "";
  return tank + sp1 + motor + sp2 + pump + sp3 + pressure + extra;
};

export const agregatCounting = (project) => getT(getQfromProject(project));

// export const pipeCounting = ({ Q, HKSH }) => {
//     const k = Math.max(...HKSH.map(({ D, d }) => S(D) / S(D, d)));
//     const Q1 = Q * k;
//     const pPmax = pipePmax(Q);
//     const pPmin = pipePmin(Q);
//     const pTmax = pipePmax(Q1);
//     const pTmin = pipePmax(Q1);
//     return { Q1, pPmin, pPmax, pTmin, pTmax };
// };
export const powerCounting = (unit) => {
  const Pcalc = reducedPower(unit);
  const I = 2.4 * Pcalc ** 0.9;
  return { Pcalc, I };
};
const maxRatio = (HKSH) => Math.max(...HKSH.map(({ D, d }) => S(D) / S(D, d)));
const getPipeP = (Q1, DBD, p1) => Object.entries(pipesData).find(([_, { Q, p }]) => Q >= Q1 && p > Math.max(DBD, p1));
const getPipe = (Q1, k) => Object.entries(k ? pipesData : pipesSData).find(([_, { Q }]) => Q > Q1 * (k ? k : 1));
const getTPipe = (Q1, k) =>
  Object.entries(pipesData)
    .filter((el) => el[0] !== "L12-1.5")
    .find(([_, { Q }]) => Q > Q1 * (k ? k : 1));
export const pumpCounting = ({ Q, p, DBD, HKSH }) => {
  const k = maxRatio(HKSH);
  const pipe_P = getPipeP(Q, DBD, p);
  const pipeP = pipe_P ? pipe_P[0] : "∄";
  const pipe_T = getTPipe(Q, k);
  const pipeT = pipe_T ? pipe_T[0] : "∄";
  const pipe_S = getPipe(Q);
  const pipeS = pipe_S ? pipe_S[0] : "∄";
  const Qback = Q * k;
  const minDirectPressure = Math.min(...HKSH.map(({ directPress, directPressValue }) => (directPress === "011" ? directPressValue : null)).filter((v) => v));
  const Pcalc = Power(Q, getPressure({ DBD, p, directPressValue: HKSH.directPressValue, directPress: HKSH.directPress, minDirectPressure }));
  return { pipeP, pipeT, pipeS, Qback, Pcalc };
};

export const filtrationD = (arr, { D }) => arr.filter((el) => el < D);

// const splitJoin = (arr, ö) => {
//   const splitter = (A) => A.split('').map(str => str.split(','));
//   const svgLeft = (A, ö) => A.map(([x, y]) => ([+x - ö, y]));
//   const svgRight = (A, ö) => A.map(([x, y]) => ([+x + ö, y]));
//   const svgUp = (A, ö) => A.map(([x, y]) => ([x, +y - ö]));
//   const svgDown = (A, ö) => A.map(([x, y]) => ([x, +y + ö]));
//   const a = splitter(arr);
//   const b = svgUp(a, 2);
//   const c = b.map((arr) => arr.join(',')).join('');
//   return c;
// };
// console.log(splitJoin('407.5,572 409,575 413,572'));
export const getTextWithSpace = (text) => text.match(/HK|[a-zA-Z.\-\/]+|\d+\.+\d+|\d+/g).join(" ");

export const Pv = (project, η) => project.map(({ unit }) => reducedPower(unit)).reduce((prev, cur) => prev + cur) * (1 - η / 100);

export const P01 = (project, cooler) => Pv(project, cooler.η) / (cooler.vBT - cooler.vZ);

export const KITtitle = (project, order) => {
  const motorKeys = Object.keys(order).filter((key) => key.includes("motor"));
  const pumpKeys = Object.keys(order).filter((key) => key.includes("pump"));
  const pmax = Math.max(project.flatMap(({ unit }) => unit.map(({ p }) => p)));
  const obj = {};
  const blockKeys = Object.keys(order).filter((key) => key.includes("block"));
  const start = Object.keys(order).filter((key) => key.includes("start"));
  const blockSections = blockKeys.length ? `${blockKeys.map((key, i) => order[key]?.blockData?.stations - !!order[start[i]]?.title?.startsWith("HK4")).join("/")}` : "";
  Object.keys(order)
    .filter((key) => key.match(/valve\d+/))
    .map((key) => order[key]?.valveData?.spool)
    .forEach((a) => (obj[a] ? obj[a]++ : (obj[a] = 1)));

  const tank = order.tank?.tankData?.type && order.tank?.tankData?.Size ? `HAG${order.tank?.tankData?.type}${order.tank?.tankData?.Size}` : "";
  const motor = motorKeys.length ? `${motorKeys.map((key) => order[key]?.motorData?.power).join("/")}` : "";
  const pump = pumpKeys.length ? `${pumpKeys.map((key, ind) => round(getQ(order[key]?.pumpData?.CC, order["motor" + ind]?.motorData?.n), 1)).join("/")}` : "";
  const pressure = pmax ? `${pmax}` : "";
  const block = Object.entries(obj).length ? Object.entries(obj).reduce((str, [key, value]) => str + key, "R" + blockSections) : "";
  const extra = order.frames?.title ? "-ZAB" : order.trays?.title ? "-W" : "";

  const sp1 = tank && motor ? "-" : "";
  const sp2 = pump && motor ? "-" : "";
  const sp3 = pump && pressure ? "." : "";
  const sp4 = block && pressure ? "-" : "";
  return (tank + sp1 + motor + sp2 + pump + sp3 + pressure + sp4 + block + extra).replace("undefined", "");
};

export const getSmthFromProject = (arr) => arr.flatMap(({ unit }) => unit.flatMap(({ HKSH }) => HKSH.flatMap((item) => item)));
export const uniqOrder = (elem, key, order) => {
  order[key] = {};
  const unit = order[key];
  if (unit[elem]) unit[elem].count ? unit[elem].count++ : 1;
  else unit[elem] = { count: 1 };
};
