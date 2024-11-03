<script setup>
import { ref } from "vue";
import { sqr } from "../services/functions";
import {
    g,
    screwArr,
    screwProcent,
    screwISO,
    tankData,
    bucklingSafety,
    motorData,
    VPipe,
} from "../services/data";
import Scheme from "./Scheme.vue";
import Article from "./Article.vue";
import { initialValues, standartDiameters } from "../services/data";


const inputs = ref({
    main: {
        i: { title: "Ilość siłowników", unit: "szt", value: initialValues.i },
        D: {
            title: "Średnica cylindra",
            unit: "mm",
            value: initialValues.D,
            select: true,
            array: standartDiameters,
        },
        d: {
            title: "Średnica tloczyska",
            unit: "mm",
            value: initialValues.d,
            select: true,
            array: standartDiameters,
        },
        L: { title: "Skok siłownika", unit: "mm", value: initialValues.L },
        Q: { title: "Wydajność pompy", unit: "l/min", value: initialValues.Q },
        P: { title: "Ciśnienie", unit: "bar", value: initialValues.P },
    },
    flange: {
        aF: { title: "Bok flanszy", unit: "cm", value: initialValues.aF },
        bF: { title: "Bok flanszy", unit: "cm", value: initialValues.bF },
        DF: { title: "Średnica flanszy", unit: "cm", value: initialValues.DF },
    },
    cooler: {
        η: { title: "Sprawność pompy", unit: "%", value: initialValues.η },
        vBT: {
            title: "Optymalna temperatura cieczy roboczej",
            unit: "°C",
            value: initialValues.vBT,
        },
        vz: {
            title: "Zakładana temperatura otoczenia ",
            unit: "°C",
            value: initialValues.vz,
        },
    },
    screw: {
        z: { title: "Ilość śrub", unit: "sztuk", value: initialValues.z },
    },
});
const i = () => inputs.value.main.i.value;
const D = () => inputs.value.main.D.value;
const d = () => inputs.value.main.d.value;
const L = () => inputs.value.main.L.value;
const Q = () => inputs.value.main.Q.value;
const P = () => inputs.value.main.P.value;

const aF = () => inputs.value.flange.aF.value;
const bF = () => inputs.value.flange.bF.value;
const DF = () => inputs.value.flange.DF.value;

const η = () => inputs.value.cooler.η.value;
const vBT = () => inputs.value.cooler.vBT.value;
const vz = () => inputs.value.cooler.vz.value;

const z = () => inputs.value.screw.z.value;

const S = (d = 0) => sqr(D()) - sqr(d); //Площа поверхні
const V = S => (S * L()) / 100 ** 3; //Об'єм циліндра
const t = V => (V * 60 * i()) / Q(); //Час роботи
const F = S => (P() * S) / 100; //Сила
const v = t => L() / t; //Швидкість
const Power = () => (Q() * P()) / 500; //Потужність розрахункова
const Power1 = () => motorData.find(N => N >= Power()); //Потужність каталогова
const tank = () => 3 * Q(); //Ємність баку
const pipe = (Q, VP) => 2 * (Q / (Math.PI * VP * 0.06)) ** 0.5; //Діаметр труби
const tankSize = () => ({
    body: Object.fromEntries(
        Object.entries(tankData).map(row => [
            row[0],
            [row[1].find(el => el >= tank())],
        ])
    ),
}); // Розмір баку

const FI = () => (Math.PI * sqr(d()) ** 2) / L() / 2; //Сила вигину
const buckling = () =>
    FI() <= F(S()) ? 0 : 1 - F(S()) / FI() < bucklingSafety / 100 ? 1 : 2;
const wallThick = () => (D() * 2.6 * P()) / 200 / 47;
// const wallThick = () => (D() * P()) / (2 * 138 + 0.6 * P());
// const wallThick = () => (D() * P()) / (2.3 * 800 - P());

const Sd = () => S(d());
const VD = () => V(S());
const Vd = () => V(Sd());
const tOut = () => t(VD());
const tIn = () => t(Vd());
const FOut = key => () => F(S()) * [1, g / 1000][key];
const FIn = key => () => F(Sd()) * [1, g / 1000][key];
const vOut = key => () => v(tOut()) * [1, 0.001, 0.06][key];
const vIn = key => () => v(tIn()) * [1, 0.001, 0.06][key];
const tC = () => tIn() + tOut();
const QBack = () => (Q() * S()) / Sd();
const pipePmax = () => pipe(Q(), VPipe.P[0]);
const pipeTmax = () => pipe(QBack(), VPipe.T[0]);
const pipePmin = () => pipe(Q(), VPipe.P[1]);
const pipeTmin = () => pipe(QBack(), VPipe.T[1]);

const mainOutputs = [
    { title: "Nadtłokowa objętość", unit: "l", value: VD },
    { title: "Podtłokowa objętość", unit: "l", value: Vd },
    {
        title: "Czas",
        unit: "sec",
        types: ["wysuwu", "wsuwu", "cykłu"],
        value: [tOut, tIn, tC],
    },
    { title: "Siła wysuwu", types: ["kG", "kN"], value: [FOut(0), FOut(1)] },
    { title: "Siła wsuwu", types: ["kG", "kN"], value: [FIn(0), FIn(1)] },
    {
        title: "Szybkość  wysuwu",
        types: ["mm/s", "m/min"],
        value: [vOut(0), vOut(2)],
    },
    {
        title: "Szybkość  wsuwu",
        types: ["mm/s", "m/min"],
        value: [vIn(0), vIn(2)],
    },
    {
        title: "Warunek wyboczeniowy",
        value: buckling,
        boolean: true,
        options: ["Przekroczony", `Mniej niż ${bucklingSafety}%`, "Zachowany"],
    },
    { title: "Ścianka cylindra", unit: "mm", value: wallThick },
    { title: "Powrót oleju", unit: "l/min", value: QBack },
    {
        title: "Przelot przewodu P",
        unit: "mm",
        types: ["min", "max"],
        value: [pipePmin, pipePmax],
    },
    {
        title: "Przelot przewodu T",
        unit: "mm",
        types: ["min", "max"],
        value: [pipeTmin, pipeTmax],
    },
    { title: "Pojemność zbiornika", unit: "l", value: tank },
    // { value: tankSize, table: true },
    {
        title: "Moc silnika",
        unit: "kW",
        types: ["obliczona", "katalogowa"],
        value: [Power, Power1],
    },
];

// Flange Powrót Oleju
const Ssq = () => sqr(aF(), bF());
const psq = () => FOut(0)() / Ssq();
const Srn = () => sqr(DF());
const prn = () => FOut(0)() / Srn();

const flangeOutputs = [
    { title: "Pole powierzchni", unit: "cm²", value: Ssq },
    { title: "Nacisk", unit: "kG/cm²", value: psq },
    { title: "Pole powierzchni", unit: "cm²", value: Srn },
    { title: "Nacisk", unit: "kG/cm²", value: prn },
];

// Screws
const M = kr => ((4 / Math.PI) * ((FOut(0)() * g) / kr) ** 0.5) / z();
const screwTable = arr => {
    const Rm = arr => arr.map(el => Math.trunc(el) * 100);
    const Re = arr =>
        arr.map(num =>
            num
                .toString()
                .split(".")
                .reduce((a, b) => a * b * 10)
        );
    const kr = arr => Re(arr).map(el => (el * screwProcent[0]) / 100);
    const krj = arr => Re(arr).map(el => (el * screwProcent[1]) / 100);
    const krc = arr => Re(arr).map(el => (el * screwProcent[2]) / 100);
    const JJJ = A =>
        A.map(el => M(el)).map(
            el => "M" + screwISO.find(item => item[1] > el)[0]
        );
    const Mkr = arr => JJJ(kr(arr));
    const Mkrj = arr => JJJ(krj(arr));
    const Mkrc = arr => JJJ(krc(arr));
    return {
        "Wytrzymałość na rozciąganie (Rm)": Rm(arr),
        "Granica plastyczności (Re)": Re(arr),
        "Rozciąganie stałe (kr)": kr(arr),
        "Śruba kr": Mkr(arr),
        "Jednostronnie tętniące (krj)": krj(arr),
        "Śruba krj": Mkrj(arr),
        "Obustronnie tętniące (krc)": krc(arr),
        "Śruba krc": Mkrc(arr),
    };
};

const MD = () => ({ head: ["Klasa", ...screwArr], body: screwTable(screwArr) });

const screwOutputs = [{ value: MD, table: true }];

// Cooler
const nu = () => (100 - η()) / 100;
const Pv = () => Power() * nu();
const P01 = () => Pv() / (vBT() - vz());

const coolerOutputs = [
    { title: "Moc strat", unit: "kW", value: Pv },
    { title: "Specyficzna wydajność chłodnicza", unit: "kW/K", value: P01 },
];

const funcs = { tank, Power };

const obj = [
    {
        title: "Wpisz dane",
        inputs: inputs.value.main,
        outputs: mainOutputs,
    },
    {
        title: "Dobór chłodnicy",
        inputs: inputs.value.cooler,
        outputs: coolerOutputs,
    },
    {
        title: "Nacisk",
        inputs: inputs.value.flange,
        outputs: flangeOutputs,
    },
    {
        title: "Obliczenia śrub",
        inputs: inputs.value.screw,
        outputs: screwOutputs,
    },
];
</script>

<template>
    <!-- <input v-model="inputs.value.main.D.value" type="number" /> -->
    <div class="app">
        <Article :data="obj[0]"/>
        <!-- <div v-for="el in obj" :data="el">
            <Article :data="el"/>
        </div> -->
        
        <!-- <Scheme :inputs="obj[0].inputs" /> -->
        <Scheme :data="funcs" />
        <!-- <Data :obj="obj" /> -->
    </div>
    <!-- <Input :inputs="obj[0].inputs" />
    <Tank :tank="tank" /> -->
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}
.app {
    background-color: rgba(0, 66, 25, 0.5);
    padding: 10px;
    width: 100vw;
    height: 100vh;
    /* display: grid;
    grid-template-columns: 40vw 60vw; */
}
.cool {
    position: fixed;
    z-index: 300;
    left: 460px;
    top: 410px;
}
</style>
