import { separator, bucklingSafety, tankData, motorData, VPipe, pipesData, pipesSData } from "./data";

export const dif = (D, d) => sqr(D) / (sqr(D) - sqr(d));

const isString = variable => typeof variable === "string";

export const round = (num) => isString(num) ? num :  Math.trunc(num * 10) / 10 ?? "-";

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
const tankSize = (key, T) => tankData[key].find(el => el >= T); // Розмір баку

export const Power = ( Q, p ) => ( Q * p ) / 500; //Потужність розрахункова
const Power1 = ( P ) => motorData.find(N => N >= P); //Потужність каталогова

const QBack = ( Q, SD, Sd ) => Q * SD / Sd;
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

export const parenthesis = smt => (smt ? `(${smt})` : "");

export const hkshCounting = ( { D, d, L }, Q, p, length = 1 ) => {
    const SD = S(D);
    const Sd = S(D, d);
    const VD = V(SD, L);
    const Vd = V(Sd, L);
    const tOut = t(VD , length, Q);
    const tIn = t(Vd, length, Q);
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
    return F1 <= FOut ? 'error' : 1 - FOut / F1 < bucklingSafety / 100 ? 'yellow' : '';
}

export const powerUnitCounting = (unit) => {
    const a = unit.map(({ Q, p}) => Power(Q, p)).reduce((a, b) => a + b);
    const P = Power1(a)
    const b = unit.map(item => item.Q).join("x");
    return `HAG${ round(P) }-${ b }`;
};


export const agregatTitle = (project, meta) => {
    const P = project.map(({unit}) => unit.map(({ Q, p }) => Power(Q, p)).reduce((a, b) => a + b));
    const P1 = P.map(el => Power1(el));
    const Q = project.map(({unit}) => unit.map(({ Q }) => Q)).flat();
    const T = tank(Q.reduce((a, b) => a + b));
    const T1 = tankSize(meta, T);
    return `HAG${meta}${T1}-${P1.join("/")}-${Q.join("/")}`;
};

export const agregatCounting = (project, meta) => {
    const Q = project.map(({unit}) => unit.map(({ Q }) => Q)).flat();
    const T = tank(Q.reduce((a, b) => a + b));
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

export const pumpCounting = ({ Q: Q1, p: p1, HKSH }) => {
    const P  = Power(Q1,p1);
    const VFU = round(Q1 / 1.72);
    const pipeP = Object.entries(pipesData).find(([_, { Q, p }]) => Q >= Q1 && p > p1)[0];
    const k = Math.max(...HKSH.map(({ D, d }) => S(D) / S(D, d)));
    const pipeT = Object.entries(pipesData).find(([_, { Q }]) => Q > Q1 * k)[0];
    const pipeS = Object.entries(pipesSData).find(([_, { Q }]) => Q > Q1)[0];
    return { P, VFU, pipeP, pipeT, pipeS, QBack: Q1* k };
};

export const filtrationD = (arr, D) => arr.filter(el => el < D);

// console.log(Object.fromEntries([
//     { title: "Nadtłokowa objętość", unit: "l", value: 'VD' },
//     { title: "Podtłokowa objętość", unit: "l", value: 'Vd' },
//     {
//         title: "Czas",
//         unit: "sec",
//         // types: ["wysuwu", "wsuwu", "cykłu"],
//         value: 'tOut'
//     },
//     { title: "Siła wysuwu", unit: "kG", value: 'FOut' },
//     { title: "Siła wsuwu", unit: "kG", value: 'FIn' },
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
//     { title: "Ścianka cylindra", unit: "mm", value: 'wallThick' },
//     { title: "Powrót oleju", unit: "l/min", value: 'QBack' },
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
//     { title: "Pojemność zbiornika", unit: "l", value: 'tank' },
//     // { value: tankSize, table: true },
//     {
//         title: "Moc silnika",
//         unit: "kW",
//         value: 'Power',
//     },
// ].map(({title, unit,value}) => ([value, [title, unit]]))));
// const splitJoin = (arr,ö) => {
//     const splitter = (A) => A.split(' ').map(str => str.split(',')); 
//     const svgLeft = (A, ö) => A.map(([x, y]) => ([+x - ö, y]));
//     const svgRight= (A, ö) => A.map(([x, y]) => ([+x + ö, y]));
//     const svgUp= (A, ö) => A.map(([x, y]) => ([x, +y - ö]));
//     const svgDown= (A, ö) => A.map(([x, y]) => ([x, +y + ö]));
//     const a = splitter(arr);
//     console.log('a :>> ', a);
//     const b = svgUp(a, 50);
//     console.log('b :>> ', b);
//     const c = b.map((arr) => arr.join(',')).join(' ');
//     console.log('c :>> ', c);
//     return c;
// };
// console.log(splitJoin('380,535 380,565 410,565 410,535'));
