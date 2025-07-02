import {
  bucklingSafety,
  tankData,
  motorData,
  VPipe,
  pipesData,
  pipesSData,
  coolerData,
} from "./data";

export const round = (num, param = 10) =>
   typeof num === "string"
      ? num :
      num === Infinity || isNaN(num)
      ? "-"      
      : Math.round(num * param) / param;

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

const tank = (Q) => 3 * Q; //Ємність баку
export const getStandartTank = ({ tank }, T) =>
  tankData[tank].find(({ Size }) => Size >= T); // Розмір баку

const Power = (Q, p) => (Q * p) / 500; //Потужність розрахункова
const pressure = (Q, P) => (P * 500) / Q; //Тиск
export const setPressure = (unit, P) =>
  (unit[0].p = round(pressure(unit[0].Q, P), 1));
export const reducedPower = (unit) =>
  unit
    .map(({ Q, p, DBD }) => Power(Q, getPressure(DBD, p)))
    .reduce((a, b) => a + b); // Сукупна потужність
export const getStandartPower = (P) =>
  motorData.find((N) => N >= 0.97 * P) || "___"; //Потужність каталогова

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

const getPressure = (DBD, p) => {
  if (DBD) {
    if (p) return Math.min(p, DBD);
    return DBD;
  }
  if (p) return p;
  return 0;
};

export const HKSHTitle = ({ D, d, L, mountA = 2, mountB = 2 }) => {
  return (
    "HKSH" +
    mountA +
    mountB +
    "." +
    ("000" + D).slice(-3) +
    ("000" + d).slice(-3) +
    ("000" + L).slice(-4)
  );
};

export const hkshCounting = ({ D, d, L, z }, { Q, p, DBD }) => {
  const SD = S(D);
  const Sd = S(D, d);
  const VD = V(SD, L);
  const Vd = V(Sd, L);
  const tOut = t(VD, z, Q);
  const tIn = t(Vd, z, Q);
  const tC = tIn + tOut;
  const FOut = F(getPressure(DBD, p), SD);
  const FIn = F(getPressure(DBD, p), Sd);
  const vOut = v(L, tOut);
  const vIn = v(L, tIn);
  const wall = wallThick(D, getPressure(DBD, p));
  const k = S(D) / S(D, d);
  return { FOut, FIn, tOut, tIn, tC, VD, Vd, k, vOut, vIn, wall };
};

export const buckling = ({ HKSH: { D, d, L }, p, DBD }) => {
  const SD = S(D);
  const FOut = F(getPressure(DBD, p), SD);
  const F1 = FI(d, L);
  return F1 <= FOut
    ? "error"
    : 1 - FOut / F1 < bucklingSafety / 100
      ? "yellow"
      : "";
};

export const unitTitle = (unit) => {
  const power = getStandartPower(reducedPower(unit));
  const pumpLitre = unit.map((item) => item.Q).join("x");
  return round(power) && pumpLitre ? `${round(power)}kW - ${pumpLitre}L` : "";
};
export const getQfromProject = (project) =>
  project.map(({ unit }) => unit.map(({ Q }) => Q)).flat();
export const getT = (Q) => tank(Q.reduce((a, b) => a + b));
export const getTankSize = (project, meta) =>
  getStandartTank(meta, agregatCounting(project));

export const agregatTitle = (project, meta, order) => {
  const P = project
    .map(({ unit }) => reducedPower(unit))
    .map((el) => getStandartPower(el));
  const Q = getQfromProject(project).map((q) => round(q));
  const type = order.tank?.tankData?.type || meta.tank;
  const size =
    order.tank?.tankData.Size || getStandartTank(meta, getT(Q))?.Size || "___";
  return `HAG${type}${size}-${P.join("/")}-${Q.join("/")}`;
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
  const P = reducedPower(unit);
  const I = 2.4 * P ** 0.9;
  return { P, I };
};
export const pumpCounting = ({ Q: Q1, p: p1, DBD, HKSH }) => {
  const k = Math.max(...HKSH.map(({ D, d }) => S(D) / S(D, d)));
  const pipe_P = Object.entries(pipesData).find(
    ([_, { Q, p }]) => Q >= Q1 && p > getPressure(DBD, p1),
  );
  const pipeP = pipe_P ? pipe_P[0] : "∄";
  const pipe_T = Object.entries(pipesData).find(([_, { Q }]) => Q > Q1 * k);
  const pipeT = pipe_T ? pipe_T[0] : "∄";
  const pipe_S = Object.entries(pipesSData).find(([_, { Q }]) => Q > Q1);
  const pipeS = pipe_S ? pipe_S[0] : "∄";
  const Qback = Q1 * k;
  const P = Power(Q1, getPressure(DBD, p1));
  return { pipeP, pipeT, pipeS, Qback, P };
};

export const filtrationD = (arr, D) => arr;

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
export const getTextWithSpace = (text) =>
  text.match(/HK|[a-zA-Z.\-\/]+|\d+\.+\d+|\d+/g).join(" ");

export const Pv = (project, η) =>
  project
    .map(({ unit }) => reducedPower(unit))
    .reduce((prev, cur) => prev + cur) *
  (1 - η / 100);

export const P01 = (project, cooler) =>
  Pv(project, cooler.η) / (cooler.vBT - cooler.vZ);
export const filteredCooler = (project, cooler) =>
  coolerData.find(({ performance, flow }) => {
    const P = P01(project, cooler);
    const Qm = Qmax(project);
    return performance.max >= P && flow.max >= 5 * Qm;
  });

export const KITtitle = (order) => {
  const { Size, type } = order.tank?.title
    ? order.tank?.tankData
    : { Size: "__", type: "__" };
  const Pkeys = Object.keys(order).filter((key) => key.includes("motor"));
  const P = Pkeys.length
    ? Pkeys.map((key) => order[key]?.motorData?.power).join("/")
    : "___";
  const Qkeys = Object.keys(order).filter((key) => key.includes("pump"));
  const Q = Qkeys.length
    ? Qkeys.map((key) =>
        round(getQ(order[key]?.pumpData?.CC, order[key]?.pumpData?.n), 1),
      ).join("/")
    : "___";
  return `HAG${type}${Size}-${P}-${Q} AGREGAT HYDRAULICZNY`;
  // const Q = getQfromProject(project).map(q => round(q));
  // const type = order.tank?.tankData?.type || meta.tank;
  // const size = order.tank?.tankData.Size || getStandartTank(meta, getT(Q))?.Size || '___';
  // return `HAG${type}${size}-${P}-${Q.join("/")}`;
};

export const getSmthFromProject = (arr) =>
  arr.flatMap(({ unit }) =>
    unit.flatMap(({ HKSH }) => HKSH.flatMap((item) => item)),
  );
export const uniqOrder = (elem, key, order) => {
  order[key] = {};
  const unit = order[key];
  if (unit[elem]) unit[elem].count ? unit[elem].count++ : 1;
  else unit[elem] = { count: 1 };
};
