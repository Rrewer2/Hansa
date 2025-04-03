export const initialValues = { i: 1, D: 100, d: 60, L: 300, Q: 12, P: 200, aF: 40, bF: 80, DF: 20, η: 70, vBT: 45, vz: 20, z: 4,};

export const g = 9.80665;

export const separator = " | ";

export const standartDiameters = [ 200,195,190,185,180,175,170,165,160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 63, 60, 56, 55, 50, 45, 40, 36, 35, 32, 30, 28, 25, 22, 20, 16
 ];
export const bucklingSafety = 5;

export const HKSHMount  = {0:'Zakończone gwintem',1:'Tuleja sztywna',2:'Wahliwe łożysko',3:'Kołnierz dławnicy',4:'Kołnierz dna',5:'Kołnierz pręta',6:'Na łapach',7:'Na kuli',8:'Przelotowy pręt',9:'Na czopach',W:'Widlaste',X:'Inne'};

const RA = [{HKBAKRA03:{Size:3,CoolingCapacity: 0.16}},{HKBAKRA06:{Size:6,CoolingCapacity: 0.36}},{HKBAKRA12:{Size:12,CoolingCapacity: 0.6}},{HKBAKRA20:{Size:20,CoolingCapacity: 0.72}},{HKBAKRA30:{Size:30,CoolingCapacity: 0.92}},{HKBAKRA44:{Size:44,CoolingCapacity: 1.04}},{HKBAKRA70:{Size:70,CoolingCapacity: 1.16}},{HKBAKRA130:{Size:130,CoolingCapacity: 2.1}}];
const BSK = [{HKBSK40:{Size:40}},{HKBSK63:{Size:63}},{HKBSK100:{Size:100}},{HKBSK160:{Size:160}},{HKBSK200:{Size:200}},{HKBSK250:{Size:250}},{HKBSK300:{Size:300}},{HKBSK400:{Size:400}}];
const BEK = [{HKBEK12:{Size:12}},{HKBEK20:{Size:20}},{HKBEK35:{Size:35}},{HKBEK50:{Size:50}},{HKBEK60:{Size:60}},{HKBEK75:{Size:75}},{HKBEK100:{Size:100}},{HKBEK150:{Size:150}},{HKBEK225:{Size:225}},{HKBEK300:{Size:300}}];
const SBT =[{HKSBT006:{Size:6}},{HKSBT012:{Size:12}},{HKSBT025:{Size:25}},{HKSBT040:{Size:40}},{HKSBT070:{Size:70}},{HKSBT100:{Size:100}},{HKSBT160:{Size:160}},{HKSBT250:{Size:250}}];
export const tankData = { RA, BSK, BEK, SBT};

export const motorData = [ 0.37, 0.55, 0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132, 160, 200];
export const freqData = [ 750, 1500, 1800, 3000 ];
export const engineMountData = ['B5', 'B35', 'B14', 'B34'];
const engines = [{'K-400B35-1.5-90': {P:1.5,size:90,V:400,mount:'B35',},'K-400B35-2.2-100': {P:2.2,size:100,V:400,mount:'B35',},'K-400B35-3-112': {P:3,size:112,V:400,mount:'B35',},'K-400B35-4-112': {P:4,size:112,V:400,mount:'B35',},'K-400B35-5.5-132': {P:5.5,size:132,V:400,mount:'B35',},'K-400B35-7.5-160': {P:7.5,size:160,V:400,mount:'B35',},},
  {'K-230B14-1.5-90': {P:1.5,size:90,V:230,mount:'B14',},'K-230B14-2.2-100': {P:2.2,size:100,V:230,mount:'B14',},'K-230B14-3-112': {P:3,size:112,V:230,mount:'B14',},}];
export const enginesData = engines.reduce((prev, cur) => ({...prev, ...cur}));

export const screwArr = [12.9, 10.9, 8.8, 6.8, 6.6, 5.8];

export const screwProcent = [48, 15, 7.5];

export const screwISO = [ [5, 4.134, 0.8, 4.48, 4.2, 5.8], [6, 4.917, 1, 5.35, 5, 7], [8, 6.647, 1.25, 7.188, 6.8, 10], [10, 8.376, 1.5, 9.026, 8.5, 12], [12, 10.106, 1.75, 10.863, 10.2, 15], [14, 11.835, 2, 12.701, 12, 17], [16, 13.835, 2, 14.701, 14, 19], [18, 15.394, 2.5, 16.376, 15.5, 22], [20, 17.294, 2.5, 18.376, 17.5, 24], [22, 19.294, 2.5, 20.376, 19.5, 26], [24, 20.752, 3, 22.051, 21, 28], [27, 23.752, 3, 25.051, 24, 33], [30, 26.211, 3.5, 27.727, 26.5, 35], [33, 29.211, 3.5, 30.727, 29.5, 38], [36, 31.67, 4, 33.402, 32, 41], [39, 34.67, 4, 36.402, 35, 44], [42, 37.129, 4.5, 39.077, 37.5, 47], [45, 40.129, 4.5, 42.077, 40.5, 50], [48, 42.857, 5, 44.752, 43, 53], [52, 46.587, 5, 48.752, 47, 57], [56, 50.046, 5.5, 52.428, 50.5, 61], [60, 54.046, 5.5, 56.428, 54.5, 65], [64, 57.505, 6, 60.103, 58, 69], [68, 61.505, 6, 64.103, 62, 73],
];

export const VPipe = { P: [3, 8], T: [1, 3] };

// "średnica zewn. [mm], grubość ścianki [mm], średnica wewn. [mm], ciśn.teoretyczne* [bar] statyczne, dynamiczne";
export const pipesData = { 'L06-1': { p: 300, Q: 4 }, 'L08-1': { p: 248, Q: 5 }, 'L10-1.5': { p: 282, Q: 12 }, 'L12-1.5': { p: 248, Q: 20 }, 'L15-1.5': { p: 210, Q: 35 }, 'L18-2': { p: 227, Q: 45 }, 'L22-2': { p: 194, Q: 75 }, 'L28-2.5': { p: 192, Q: 120 }, 'L35-3': { p: 185, Q: 200 }, 'L42-3': { p: 160, Q: 300 }, 'S06-1.5': { p: 390, Q: 2 }, 'S08-2': { p: 390, Q: 4 }, 'S10-2': { p: 342, Q: 9 }, 'S12-2.5': { p: 351, Q: 20 }, 'S14-3.5': { p: 390, Q: 40 }, 'S16-3.5': { p: 360, Q: 60 }, 'S20-4': { p: 340, Q: 120 }, 'S25-4': { p: 300, Q: 170 }, 'S30-4': { p: 260, Q: 250 }, 'S35-4': { p: 230, Q: 350 },
};

export const pipesSData = { 'L12-1.5': { Q: 7 }, 'L15-1.5': { Q: 12 }, 'L18-2': { Q: 18 }, 'L22-2': { Q: 25 }, 'L28-2.5': { Q: 43 }, 'L35-3': { Q: 70 }, 'L42-3': { Q: 100 }, 'L42-3': { Q: 100 },
};

export const coolerData = [ { Model: "2005K", Flow: { min: 5, max: 75 }, Performance: { min: 0.021, max: 0.031 }, }, { Model: "2010K", Flow: { min: 20, max: 100 }, Performance: { min: 0.052, max: 0.06 }, }, { Model: "2015K", Flow: { min: 20, max: 200 }, Performance: { min: 0.084, max: 0.101 }, }, { Model: "2020K", Flow: { min: 20, max: 250 }, Performance: { min: 0.099, max: 0.12 }, }, { Model: "2024K", Flow: { min: 20, max: 250 }, Performance: { min: 0.165, max: 0.214 }, }, { Model: "2030K", Flow: { min: 50, max: 300 }, Performance: { min: 0.257, max: 0.309 }, }, { Model: "2040K", Flow: { min: 50, max: 350 }, Performance: { min: 0.337, max: 0.425 }, }, { Model: "2050K", Flow: { min: 50, max: 400 }, Performance: { min: 0.447, max: 0.635 }, },
];

export const filterData = [];

export const spoolTypes = ['G', 'E', 'J', 'H', 'L', 'M', 'U', 'W', 'F', 'P', 'A', 'B', 'C', 'D', 'D1', 'Y', 'Y1'];


export const pumpGroups = [[0.25,2.3],[1,9.8],[4.5,36],[20,87],[60,150]];
const gearPumpAPF = [
  {},
  {
    HK1PF21L01Z01LBF: { CC: 2.1, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', pmax:200},
    HK1PF27L01Z01LBF: { CC: 2.7, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', pmax:200},
    HK1PF37L01Z01LBF: { CC: 3.7, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', pmax:200},
    HK1PF42L01Z01LBF: { CC: 4.2, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', pmax:200},
    HK1PF58L01Z01LBF: { CC: 5.8, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', pmax:160},
    HK1PF80L01Z01LBF: { CC: 8, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', pmax:160},
  },
  {
    HK2APF04F02Z41RSS: { CC: 4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF06F02Z41RSS: { CC: 6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF08F02Z41RSS: { CC: 8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF10F02Z41RSS: { CC: 10, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF14F02Z41RSS: { CC: 14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF16F02Z41RSS: { CC: 16, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF20F02Z41RSS: { CC: 20, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:200},
    HK2APF25F02Z41RSS: { CC: 25, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:200},
  },
  {
    HK3APF26F09Z05RSS: { CC: 26, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:200},
    HK3APF33F09Z05RSS: { CC: 33, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:200},
    HK3APF39F09Z05RSS: { CC: 39, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:200},
    HK3APF46F09Z05RSS: { CC: 46, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:200},
    HK3APF55F09Z05RSS: { CC: 55, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:200},
    HK3APF63F09Z05RSS: { CC: 63, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:180},
  }
];
//  flange: 'Ø36,5 European'
const gearPumpVivolo =[
  {},
  {},
  {
  HK2P4102EOOA: { CC: 4.2, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:260},
  HK2P4302EOOA: { CC: 6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:260},
  HK2P4502EOOA: { CC: 8.4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:260},
  HK2P4702EOOA: { CC: 10.8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:260},
  HK2P4902EPOA: { CC: 14.4, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:250},
  HK2P5102EPOA: { CC: 16.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:230},
  HK2P5302EPOA: { CC: 19.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:210},
  HK2P5502EPOA: { CC: 22.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:200},
  HK2P5702EQPA: { CC: 26.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', pmax:170},
  HK2P6102EQPA: { CC: 30, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', pmax:160},
  HK2P5902EQPA: { CC: 34.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', pmax:150},
  HK2P6302EQPA: { CC: 39.6, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', pmax:140},
 },
 {
  HKX3P7002ABAA: { CC: 21.1, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:250},
  HKX3P7202ABAA: { CC: 26.06, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:250},
  HKX3P7402ABAA: { CC: 32.27, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:250},
  HKX3P7802ABAA: { CC: 38.47, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:250},
  HKX3P7902ABAA: { CC: 43.44, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:250},
  HKX3P8102ABAA: { CC: 50.88, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:230},
  HKX3P8302ACBA: { CC: 60.81, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:230},
  HKX3P8702ACBA: { CC: 74.46, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:180},
},
];
const gearPumpCasappa = [
  {},
  {},
  {
    HKKP2004D082E2L: { CC: 4.95, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:285},
    HKKP2006D082E2L: { CC: 6.61, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:285},
    HKKP2008D082E2L: { CC: 8.26, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:285},
    HKKP2011D082E2L: { CC: 11.23, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', pmax:275},
    HKKP2014D082E2L: { CC: 14.53, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:265},
    HKKP2016D082E2L: { CC: 16.85, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:260},
    HKKP2020D082E2L: { CC: 21.14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:210},
    HKKP2025D082E2L: { CC: 26.42, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:180},
    HKKP2031D082E2L: { CC: 33.03, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', pmax:140}
  },
  {
    HKKP3027D083E3L: { CC: 26.7, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:310},
    HKKP3034D083E3L: { CC: 34.6, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:300},
    HKKP3038D083E3L: { CC: 39.3, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:300},
    HKKP3043D083E3L: { CC: 43.9, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:290},
    HKKP3051D083E3L: { CC: 51.8, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:270},
    HKKP3061D083E3L: { CC: 61.3, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', pmax:240},
    HKKP3073D083E3L: { CC: 73.8, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', pmax:220},
  }
];
const pistonPumpRexroth = {
  HKA10VSO18DRG31R: { CC: 18, in: 'SAE J518C - 1″', out: 'SAE J518C - 3/4″', drain:'-',  pmax:280, Regulator: 'Regulator ciśnienia'},
  HKA10VSO18DFR31R: { CC: 18, in: 'SAE J518C - 1″', out: 'SAE J518C - 3/4″', drain:'-',  pmax:280, Regulator: 'Kontroler wykrywania obciążenia'},
  HKA10VSO28DRG31R: { CC: 28, in: 'SAE J518C - 1.1/4″', out: 'SAE J518C - 3/4″', drain:'-',  pmax:280, Regulator: 'Regulator ciśnienia'},
  HKA10VSO28DFR31R: { CC: 28, in: 'SAE J518C - 1.1/4″', out: 'SAE J518C - 3/4″', drain:'-',  pmax:280, Regulator: 'Kontroler wykrywania obciążenia'},
  HKA10VSO45DRG31R: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain:'-',  pmax:280, Regulator: 'Regulator ciśnienia'},
  HKA10VSO45DFR31R: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain:'-',  pmax:280, Regulator: 'Kontroler wykrywania obciążenia'},
  HKA10VSO71DRG31R: { CC: 71, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain:'-',  pmax:280, Regulator: 'Regulator ciśnienia'},
  HKA10VSO71DFR31R: { CC: 71, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain:'-',  pmax:280, Regulator: 'Kontroler wykrywania obciążenia'},
  HKA10VSO88DRG31R: { CC: 88, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain:'-',  pmax:280, Regulator: 'Regulator ciśnienia'},
  HKA10VSO88DFR31R: { CC: 88, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain:'-',  pmax:280, Regulator: 'Kontroler wykrywania obciążenia'},
  HKA10VS100DRG31R: { CC: 100, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain:'-',  pmax:280, Regulator: 'Regulator ciśnienia'},
  HKA10VS100DFR31R: { CC: 100, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain:'-',  pmax:280, Regulator: 'Kontroler wykrywania obciążenia'},
};
const pistonPumpKawasaki = {
  HKK3VL045B1NRMMP0: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain:'M22 x 1.5', pmax:320, Regulator: 'Regulator ciśnienia'},
  HKK3VL080B1NRMMP0: { CC: 80, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain:'M22 x 1.5', pmax:320, Regulator: 'Regulator ciśnienia'},
  HKK3VL112B1NRMMP0: { CC: 112, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain:'M27 x 2', pmax:320, Regulator: 'Regulator ciśnienia'},
  HKK3VL140B1NRMMP0: { CC: 140, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain:'M27 x 2', pmax:320, Regulator: 'Regulator ciśnienia'},
  HKK3VL200B1NRMMP0: { CC: 200, in: 'SAE J518C - 3″', out: 'SAE J518C - 1.1/2″', drain:'3/4″', pmax:320, Regulator: 'Regulator ciśnienia'},
  HKK3VL045B1NRMML0: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain:'M22 x 1.5', pmax:320, Regulator: 'Kontroler wykrywania obciążenia'},
  HKK3VL080B1NRMML0: { CC: 80, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain:'M22 x 1.5', pmax:320, Regulator: 'Kontroler wykrywania obciążenia'},
  HKK3VL112B1NRMML0: { CC: 112, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain:'M27 x 2', pmax:320, Regulator: 'Kontroler wykrywania obciążenia'},
  HKK3VL140B1NRMML0: { CC: 140, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain:'M27 x 2', pmax:320, Regulator: 'Kontroler wykrywania obciążenia'},
  HKK3VL200B1NRMML0: { CC: 200, in: 'SAE J518C - 3″', out: 'SAE J518C - 1.1/2″', drain:'3/4″', pmax:320, Regulator: 'Kontroler wykrywania obciążenia'},
};
const pistonPumpDaikin = {
  HKJV15A3RX95: { CC: 14.8, in: 'G1″', out: 'G1″', drain:'3/8″', pmax:210, Regulator: 'Regulator ciśnienia'},
  HKJV23A4RX30: { CC: 23, in: 'G1″', out: 'G1″', drain:'3/8″', pmax:250, Regulator: 'Regulator ciśnienia'},
  HKJV38A4RX95: { CC: 37.7, in: 'G1″', out: 'G1″', drain:'1/2″', pmax:250, Regulator: 'Regulator ciśnienia'},
  HKJV15SA3CRX95: { CC: 14.8, in: 'G1″', out: 'G1″', drain:'3/8″', pmax:210, Regulator: 'Kontroler wykrywania obciążenia'},
  HKJV23SA4CRX30: { CC: 23, in: 'G1″', out: 'G1″', drain:'3/8″', pmax:250, Regulator: 'Kontroler wykrywania obciążenia'},
  HKJV38SA4CRX95: { CC: 37.7, in: 'G1″', out: 'G1″', drain:'1/2″', pmax:250, Regulator: 'Kontroler wykrywania obciążenia'},
};
const pistonPumpPBA = {
  HKPBA012L8051SF: { CC: 12, in: 'G3/4″', out: 'G3/4″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA018L8051SF: { CC: 18, in: 'G3/4″', out: 'G3/4″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA025L8051SF: { CC: 25, in: 'G3/4″', out: 'G3/4″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA040L8051SF: { CC: 40, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA063L8051SF: { CC: 63, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA080L8051SF: { CC: 80, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA080L8064SF: { CC: 80, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA108L8051SF: { CC: 108, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA108L8064SF: { CC: 108, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
};
export const pumpData = {
  gears: [['VIVOLO', gearPumpVivolo], ['CASAPPA', gearPumpCasappa], ['CHINA', gearPumpAPF]]
  .map(([maker, pumpsByGroup]) => pumpsByGroup
    .map((el, group) => Object.entries(el)
      .map(([title, data]) => ({[title]: { ...data, maker, group }})))).flat(2),
  piston:[['REXROTH', pistonPumpRexroth], ['KAWASAKI', pistonPumpKawasaki], ['DAIKIN', pistonPumpDaikin], ['HIDROCEL', pistonPumpPBA]]
  .map(([maker, pumpsByGroup]) => Object.entries(pumpsByGroup)
    .map(([title, data]) => ({[title]: { ...data, maker }}))).flat()
};
