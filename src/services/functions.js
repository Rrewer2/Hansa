import { separator, bucklingSafety, tankData, motorData, VPipe, pipesData, pipesSData } from "./data";

const isString = variable => typeof variable === "string";

export const round = (num) => isString(num) ? num : Math.trunc(num * 10) / 10;

export const getId = (key) => key + Date.now(); 

export const sqr = ( a ) => (Math.PI * a ** 2) / 4 
const S = ( D, d = 0 ) => sqr(D)  - sqr(d) ; //Площа поверхні
const V = ( S, L ) => (S * L) / 10 ** 6; //Об'єм циліндра
const t = ( V, l, Q ) => (V * 60 * l) / Q; //Час роботи
const F = (p, S) => (p * S) / 100; //Сила
const v = ( L, t ) => L / t; //Швидкість
const FI = ( d, L ) => (Math.PI * sqr(d) ** 2) / L / 2; //Сила вигину
const wallThick = (D, p) => (D * 2.6 * p) / 200 / 47;
// const wallThick = () => (D() * P()) / (2 * 138 + 0.6 * P());
// const wallThick = () => (D() * P()) / (2.3 * 800 - P());

const tank = ( Q ) => 3 * Q; //Ємність баку
export const getStandartTank = (key, T) => tankData[key].find((a) => Object.values(a)[0].Size >= T); // Розмір баку

export const Power = ( Q, p ) => ( Q * p ) / 500; //Потужність розрахункова
export const reducedPower = (unit) => unit.map(({ Q, p}) => Power(Q, p)).reduce((a, b) => a + b);
export const getStandartPower = ( P ) => motorData.find(N => N >= P)  || '___'; //Потужність каталогова

const QBack = ( Q, SD, Sd ) => Q * SD / Sd;
export const getVFU = (Q, n) => Q * 1000 / (n * 0.96);
export const getQ = (VFU, n) => VFU * (n * 0.96) / 1000;
const pipe = ( Q, VP ) => 2 * (Q / (Math.PI * VP * 0.06)) ** 0.5; //Діаметр труби
const pipePmax = ( Q ) => pipe(Q, VPipe.P[0]);
const pipeTmax = ( QBack ) => pipe(QBack, VPipe.T[0]);
const pipePmin = ( Q ) => pipe(Q, VPipe.P[1]);
const pipeTmin = ( QBack ) => pipe(QBack, VPipe.T[1]);

export const titleFromArray = elem =>
    Array.isArray(elem) ? elem.join(separator) : elem;

export const getResults = elem =>
    Array.isArray(elem)
        ? elem.map(item => round(item())).join(separator)
        : round(elem());

export const parenthesis = smt => (smt ? `(${smt})`: "");

export const HKSHTitle = ({D,d,L,mountA = 2,mountB = 2}) => {
    return 'HKSH' + mountA + mountB + '.'  + ("000" + D).slice(-3) + ("000" + d).slice(-3) + ("000" + L).slice(-4)
};

export const hkshCounting = ( { D, d, L, z }, Q, p ) => {
    const SD = S(D);
    const Sd = S(D, d);
    const VD = V(SD, L);
    const Vd = V(Sd, L);
    const tOut = t(VD , z, Q);
    const tIn = t(Vd, z, Q);
    const tC = tIn + tOut;
    const FOut = F(p, SD);
    const FIn = F(p, Sd);
    const vOut = v(L, tOut);
    const vIn = v(L, tIn);
    const wall = wallThick(D, p);

    return { FOut, FIn, tOut, tIn, tC, VD, Vd, vOut, vIn, wall };
}

export const buckling = ( { D, d, L }, p) => {
    const SD = S(D);
    const FOut = F(p, SD);
    const F1 = FI(d, L);
    return F1 <= FOut ? 'error': 1 - FOut / F1 < bucklingSafety / 100 ? 'yellow': '';
}

export const powerUnitCounting = (unit) => {
    const power = getStandartPower(reducedPower(unit));
    const pumpLitre = unit.map(item => item.Q).join("x");
    return `${ round(power) }kW - ${ pumpLitre }L`;
};
const getQfromProject = project => project.map(({unit}) => unit.map(({ Q }) => Q)).flat();
const getT = Q => tank(Q.reduce((a, b) => a + b));
export const getTankSize = (project, meta) => getStandartTank(meta, getT(getQfromProject(project)));

export const agregatTitle = (project, meta, order) => {
    const P = project.map(({unit}) => reducedPower(unit));
    const P1 = P.map(el => getStandartPower(el));
    const Q = getQfromProject(project);
    const T = getT(Q);
    const temp = Object.values(order.tank || getStandartTank(meta, T));
    const T1 = temp? temp[0]?.Size : '___';
    return `HAG${meta}${T1}-${P1.join("/")}-${Q.join("/")}`;
};

export const agregatCounting = (project) => {
    const Q = getQfromProject(project);
    const T = getT(Q);
    return { T };
};

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
    const P = unit.map(({ Q, p}) => Power(Q, p)).reduce((a, b) => a + b);
    const I = 2.4 * P ** 0.9;
    return {P, I}
}
export const pumpCounting = ({ Q: Q1, p: p1, HKSH }) => {
    const k = Math.max(...HKSH.map(({ D, d }) => S(D) / S(D, d)));
    const pipe_P = Object.entries(pipesData).find(([_, { Q, p }]) => Q >= Q1 && p > p1);
    const pipeP = pipe_P ? pipe_P[0] : '∄';
    const pipe_T = Object.entries(pipesData).find(([_, { Q }]) => Q > Q1 * k);
    const pipeT = pipe_T ? pipe_T[0] : '∄';
    const pipe_S = Object.entries(pipesSData).find(([_, { Q }]) => Q > Q1);
    const pipeS = pipe_S ? pipe_S[0] : '∄';
    const QBack = Q1 * k;
    return { pipeP, pipeT, pipeS, QBack, k  };
};

export const filtrationD = (arr, D) => arr;

// console.log(Object.fromEntries([
//     { title: "Nadtłokowa objętość", unit: "l", value: 'VD'},
//     { title: "Podtłokowa objętość", unit: "l", value: 'Vd'},
//     {
//         title: "Czas",
//         unit: "sec",
//         // types: ["wysuwu", "wsuwu", "cykłu"],
//         value: 'tOut'
//     },
//     { title: "Siła wysuwu", unit: "kG", value: 'FOut'},
//     { title: "Siła wsuwu", unit: "kG", value: 'FIn'},
//     {
//         title: "Szybkość  wysuwu",
//         unit:"mm/s",
//         value: 'vOut',
//     },
//     {
//         title: "Szybkość  wsuwu",
//         types: "mm/s",
//         value: 'VIn',
//     },
//     // {
//     //     title: "Warunek wyboczeniowy",
//     //     value: buckling,
//     //     boolean: true,
//     //     options: ["Przekroczony", `Mniej niż ${bucklingSafety}%`, "Zachowany"],
//     // },
//     { title: "Ścianka cylindra", unit: "mm", value: 'wallThick'},
//     { title: "Powrót oleju", unit: "l/min", value: 'QBack'},
//     // {
//     //     title: "Przelot przewodu P",
//     //     unit: "mm",
//     //     types: ["min", "max"],
//     //     value: [pipePmin, pipePmax],
//     // },
//     // {
//     //     title: "Przelot przewodu T",
//     //     unit: "mm",
//     //     types: ["min", "max"],
//     //     value: [pipeTmin, pipeTmax],
//     // },
//     { title: "Pojemność zbiornika", unit: "l", value: 'tank'},
//     // { value: getStandartTank, table: true },
//     {
//         title: "Moc silnika",
//         unit: "kW",
//         value: 'Power',
//     },
// ].map(({title, unit,value}) => ([value, [title, unit]]))));
const splitJoin = (arr,ö) => {
    const splitter = (A) => A.split('').map(str => str.split(',')); 
    const svgLeft = (A, ö) => A.map(([x, y]) => ([+x - ö, y]));
    const svgRight= (A, ö) => A.map(([x, y]) => ([+x + ö, y]));
    const svgUp= (A, ö) => A.map(([x, y]) => ([x, +y - ö]));
    const svgDown= (A, ö) => A.map(([x, y]) => ([x, +y + ö]));
    const a = splitter(arr);
    const b = svgUp(a, 2);
    const c = b.map((arr) => arr.join(',')).join('');
    return c;
};
// console.log(splitJoin('407.5,572 409,575 413,572'));
export const getTextWithSpace = text => text.split('').reduce((prev, cur, i) =>{
    if ((i+2) % 2) return prev + cur;
    else return prev + ' ' + cur;
});