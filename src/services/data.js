export const g = 9.80665;

export const standartDiameters = [
  500, 450, 400, 360, 340, 320, 300, 280, 260, 250, 240, 220, 200,
  195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 63, 60, 56, 55, 50, 45, 40, 36, 35, 32, 30, 28, 25, 22, 20, 16
];
export const bucklingSafety = 5;

export const HKSHMountD = {
  0: "mountThread",
  1: "mountRigidBushing",
  2: "mountSwivelBearing",
  3: "mountGlandFlange",
  4: "mountBottomFlange",
  6: "mountFeet",
  7: "mountBall",
  9: "mountPins",
  W: "mountForked",
  X: "mountOther"
};

export const HKSHMountd = {
  0: "mountThread",
  1: "mountRigidBushing",
  2: "mountSwivelBearing",
  5: "mountRodFlange",
  6: "mountFeet",
  7: "mountBall",
  8: "mountThroughRod",
  W: "mountForked",
  X: "mountOther"
};

export const HKSHMountD2 = {
  0: "mountThread",
  1: "mountRigidBushing",
  2: "mountSwivelBearing",
  3: "mountGlandFlange",
  4: "mountBottomFlange",
  6: "mountFeet",
  7: "mountBall",
  9: "mountPins",
  W: "mountForked",
  X: "mountOther"
};

export const HKSHMountd2 = {
  0: "mountThread",
  1: "mountRigidBushing",
  2: "mountSwivelBearing",
  5: "mountRodFlange",
  6: "mountFeet",
  7: "mountBall",
  8: "mountThroughRod",
  W: "mountForked",
  X: "mountOther"
};

const RA = [
  {title: "HKBAKRA03",Size: 3,CoolingCapacity: 0.16},
  {title: "HKBAKRA06",Size: 6,CoolingCapacity: 0.36},
  {title: "HKBAKRA12",Size: 12,CoolingCapacity: 0.6},
  {title: "HKBAKRA20",Size: 20,CoolingCapacity: 0.72},
  {title: "HKBAKRA30",Size: 30,CoolingCapacity: 0.92},
  {title: "HKBAKRA44",Size: 44,CoolingCapacity: 1.04},
  {title: "HKBAKRA70",Size: 70,CoolingCapacity: 1.16},
  {title: "HKBAKRA130",Size: 130,CoolingCapacity: 2.1}
].map((el) => ({...el, type: "RA", material: 'Alu'}));
const BSK = [
  {title: "HKBSK40",Size: 40},
  {title: "HKBSK50",Size: 50},
  {title: "HKBSK60",Size: 60},
  {title: "HKBSK80",Size: 80},
  {title: "HKBSK100",Size: 100},
  {title: "HKBSK120",Size: 120},
  {title: "HKBSK140",Size: 140},
  {title: "HKBSK160",Size: 160},
  {title: "HKBSK180",Size: 180},
  {title: "HKBSK200",Size: 200},
  {title: "HKBSK220",Size: 220},
  {title: "HKBSK250",Size: 250},
  {title: "HKBSK280",Size: 280},
  {title: "HKBSK320",Size: 320},
  {title: "HKBSK360",Size: 360},
  {title: "HKBSK400",Size: 400},
  {title: "HKBSK450",Size: 450},
  {title: "HKBSK500",Size: 500}
].map((el) => ({...el, type: "BSK", material: 'Steel'}));
const BEK = [
  {title: "HKBEK12",Size: 12},
  {title: "HKBEK20",Size: 20},
  {title: "HKBEK35",Size: 35},
  {title: "HKBEK50",Size: 50},
  {title: "HKBEK60",Size: 60},
  {title: "HKBEK75",Size: 75},
  {title: "HKBEK100",Size: 100},
  {title: "HKBEK150",Size: 150},
  {title: "HKBEK225",Size: 225},
  {title: "HKBEK300",Size: 300}
].map((el) => ({...el, type: "BEK", material: 'Steel'}));
const SBT = [
  {title: "HKSBT006",Size: 6},
  {title: "HKSBT012",Size: 12},
  {title: "HKSBT025",Size: 25},
  {title: "HKSBT040",Size: 40},
  {title: "HKSBT070",Size: 70},
  {title: "HKSBT100",Size: 100},
  {title: "HKSBT160",Size: 160},
  {title: "HKSBT250",Size: 250}
].map((el) => ({...el, type: "SBT", material: 'Steel'}));
const KS = [
  {title: "HKKS01", Size: 1, poz: 'h'},
  {title: "HKKS01V", Size: 1, poz: 'v'},
  {title: "HKKS02", Size: 2.5, poz: 'h'},
  {title: "HKKS02V", Size: 2.5, poz: 'v'},
  {title: "HKKS03", Size: 5, poz: 'h'},
  {title: "HKKS03V", Size: 5, poz: 'v'},
  {title: "HKKS04", Size: 8, poz: 'h'},
  {title: "HKKS04V", Size: 8, poz: 'v'},
  {title: "HKKS07", Size: 6, poz: 'h'},
  {title: "HKKS09", Size: 20, poz: 'v'},
  {title: "HKKS10", Size: 30, poz: 'v'},
  {title: "HKKS109", Size: 11, poz: 'h'},
  {title: "HKKS11", Size: 45, poz: 'v'},
  {title: "HKKS115", Size: 60, poz: 'v'},
  {title: "HKKS12", Size: 60, poz: 'v'},
  {title: "HKKS138", Size: 6, poz: 'v'},
  {title: "HKKS139", Size: 6, poz: 'v'},
  {title: "HKKS140", Size: 12, poz: 'v'},
  {title: "HKKS141", Size: 15, poz: 'h'},
  {title: "HKKS143", Size: 20, poz: 'v'},
  {title: "HKKS20", Size: 1.8, poz: 'h'},
  {title: "HKKS205", Size: 8, poz: 'v'},
  {title: "HKKS208", Size: 12, poz: 'v'},
  {title: "HKKS20V", Size: 1.8, poz: 'v'},
  {title: "HKKS34", Size: 7, poz: 'h'},
  {title: "HKKS34V", Size: 7, poz: 'v'},
  {title: "HKKS48", Size: 6, poz: 'v'},
  {title: "HKKS90", Size: 12, poz: 'h'},
  {title: "HKKS90V", Size: 12, poz: 'v'},
  {title: "HKKS92", Size: 18, poz: 'h'},
  {title: "HKKS92V", Size: 18, poz: 'v'},
  {title: "HKKS94", Size: 8, poz: 'h'},
].map((el) => ({...el, type: "KS", material: 'Steel'}));
export const tankData = { RA, BSK, BEK, SBT, KS };

export const motorData = [ '',0.37, 0.55, 0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 9.2, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132, 160, 200];
export const freqData = [ 750, 1000, 1500, 1800, 3000 ];
const enginesHK = [	
  {title: 'HK63B4B3142-4IE2', size: 63,power: 0.18,meta: 'E-Motor 230/400V 0,18kW 1360U B34 IE2'},
  {title: 'HK71A4B3142-4IE2', size: 71,power: 0.25,meta: 'E-Motor 230/400V 0,25kW 1380U B34 IE2'},
  {title: 'HK71A4B352-4IE2', size: 71,power: 0.25,meta: 'E-Motor 230/400V 0,25kW 1380U B35 IE2'},
  {title: 'HK71B4B3142-4IE2', size: 71,power: 0.37,meta: 'E-Motor 230/400V 0,37kW 1380U B34 IE2'},
  {title: 'HK80A4B352-4IE2', size: 80,power: 0.55,meta: 'E-Motor 230/400V 0,75kW 1390U B35 IE3'},
  {title: 'HK80M4B352-4IE3', size: 80,power: 0.75,meta: 'E-Motor 230/400V 0,75kW 1400U B35 IE3'},
  {title: 'HK90S4B352-4IE3', size: 90,power: 1.1,meta: 'E-Motor 230/400V 1,1kW 1400U B35 IE3'},
  {title: 'HK90L4B352-4IE3', size: 90,power: 1.5,meta: 'E-Motor 230/400V 1,5kW 1400U B35 IE3'},
  {title: 'HKK407A90LB4IE3', size: 90,power: 1.5,meta: 'E-Motor 230/400V 1,5kW 1445U B34 IE3'},
  {title: 'HK100LA4B352-4IE3', size: 100,power: 2.2,meta: 'E-Motor 230/400V 2,2kW 1455U B35 IE3'},
  {title: 'HKK408A100LA4IE3', size: 100,power: 2.2,meta: 'E-Motor 230/400V 2,2kW 1445U B34 IE3'},
  {title: 'HK100LB4B352-4IE3', size: 100,power: 3,meta: 'E-Motor 230/400V 3,0kW 1455U B35 IE3'},
  {title: 'HK100LB4B52-4IE3', size: 100,power: 3,meta: 'E-Motor 230/400V 3,0kW 1455U B5 IE3'},
  {title: 'HKK409A100LB4IE3', size: 100,power: 3,meta: 'E-Motor 230/400V 3,0kW 1420U B34 IE3'},
  {title: 'HK112M4B354-6IE3', size: 112,power: 4,meta: 'E-Motor 400/690V 4,0kW 1460U B35 IE3'},
  {title: 'HK132SB4B354-6IE3', size: 132,power: 5.5,meta: 'E-Motor 400/690V 5,5kW 1470U B35 IE3'},
  {title: 'HK132SB4B54-6IE3', size: 132,power: 5.5,meta: 'E-Motor 400/690V 5,5kW 1470U B5 IE3'},
  {title: 'HKK411A132SA4IE2', size: 132,power: 5.5,meta: 'Silnik-E 400/690V 5,5kW 1450U B34 IE2'},
  // {title: 'HK132M4B354-6IE2', size: 132,power: 7.5,meta: 'Silnik-E 400/690V 7,5kW 1465U B35 IE2'},
  {title: 'HK132M4B354-6IE3', size: 132,power: 7.5,meta: 'E-MOTOR 400/690V 7,5KW 1465U B35 IE3'},
  // {title: 'HK160M4B354-6IE2', size: 160,power: 11,meta: 'Silnik-E 400/690V 11,0kW 1470U B35 IE2'},
  {title: 'HK160M4B354-6IE3', size: 160,power: 11,meta: 'E-MOTOR 400/690V 11,0KW 1470U B35 IE3'},
  // {title: 'HK160M4B54-6IE2', size: 160,power: 11,meta: 'Silnik-E 400/690V 11,0kW 1470U B5 IE2'},
  {title: 'HK160M4B54-6IE3', size: 160,power: 11,meta: 'E-MOTOR 400/690V 11,0KW 1470U B5 IE3'},
  {title: 'HK160L4B354-6IE3', size: 160,power: 15,meta: 'E-MOTOR 400/690V 15,0KW 1475U B35 IE3'},
  {title: 'HK180M4B354-6IE3', size: 180,power: 18.5,meta: 'E-MOTOR 400/690V 18,5KW 1470U B35 IE3'},
  {title: 'HK200L4B354-6IE3', size: 200,power: 30,meta: 'E-MOTOR 400/690V 30,0KW 1475U B35 IE3'},
  {title: 'HK180M4B354-6IE3', size: 225,power: 45,meta: 'E-MOTOR 400/690V 45,0KW 1475U B35 IE3'},
].map(({meta, ...rest}) => ({ ...rest, U: meta.includes('230/400V') ? '230/400V' : '400/690V', n: meta.match(/(\d{2,4})U/)[1], meta }));
const enginesK400 = [
  {title: 'K-400B5-1.1-90S', size: 90, power: 1.1, meta: 'Silnik 3faz. 400V; 1.1kW 1420obr/min; B5'},
  {title: 'K-400B14-1.5-90L', size: 90, power: 1.5, meta: 'Silnik trójfazowy 400V; 1,5kW 1400obr.'},
  {title: 'K-400B34-1.5-90L', size: 90, power: 1.5, meta: 'Silnik trójfaz. 400V; 1,5kW 1400obr; B34'},
  {title: 'K-400B14-2.2100L', size: 100, power: 2.2, meta: 'Silnik 3-faz. 400V; 2,2kW 1420obr/min;'},
  {title: 'K-400B35-2.2-90L', size: 90, power: 2.2, meta: 'Silnik 3-faz. B35; 400V; 2,2kW 1410obr/m'},
  {title: 'K-400B5-2.2-100L', size: 100, power: 2.2, meta: 'Silnik 3faz. 400V; 2.2kW 1420obr/min; B5'},
  {title: 'K-400B14-3-100L', size: 100, power: 3, meta: 'Silnik 3-faz. 400V; 3kW 1420obr/min;'},
  {title: 'K-400B34-3-100L', size: 100, power: 3, meta: 'Silnik 3-faz. 400V; 3kW 1420obr/min; B34'},
  {title: 'K-400B35-3-100L', size: 100, power: 3, meta: 'Silnik elektr. 3 kW; B35; 230/400V; 1450'},
  {title: 'K-400B35-4-112M', size: 112, power: 4, meta: 'Silnik trójfazowy 400V; 4kW 1450obr/min;'},
  {title: 'K-400B35-5.5-132', size: 132, power: 5.5, meta: 'Silnik 3-faz. 400V; 5.5kW 1420obr/min; B'},
  {title: 'K-400B35-7.5132M', size: 132, power: 7.5, meta: 'Silnik el. 400/690V 7,5KW 1465U B35 IE3'},
  {title: 'K-400B5-11-132L', size: 132, power: 11, meta: 'Silnik prog. 400/690V 11kW 1465 B5 132L2'}
].map(({meta, ...rest}) => ({ ...rest, U: meta.includes('400V') ? '400V' : '400/690V', n: meta.match(/(\d{4})/)[1], meta }));
const enginesK230 = [
  {title: "K-230B14-0.18-63", size: 63,power: 0.18,meta: "Siln.1-faz. 230V; 0,18kW 1390obr.B34; MY"},
  {title: "K-230B34-1.5-90L", size: 90,power: 1.5,meta: "Siln.1-faz. 230V; 1,5kW 1370obr.B34; MYT"}
].map(({meta, ...rest}) => ({ ...rest, U: '230V', n: meta.match(/(\d{4})/)[1], meta }));

const enginesACMotoren = [
  {title: "K-FCPA804/PHE", size: 80,power: 1.1,meta: "SILNIK PROGRESYWNY 1,1KW"},
  {title: "K-FCA90LC4/PHE", size: 90,power: 2.2,meta: "SILNIK PROGRESYWNY 2,2 Kw"},
  {title: "K-FCPA112MD-4IMB35", size: 112,power: 7.5,meta: "SILNIK PROGRESYWNY 7,5 KW"},
  {title: "K-FCPA132MC4/HE", size: 132,power: 9.2,meta: "Silnik 9,2kW progresywny"}
].map(({meta, ...rest}) => ({ ...rest, U: '400V', n: '1440', meta }));
const enginesT3A=[
  {title: "K-T3A90L1-4.B34", size: 90,power: 1.5,meta: "Silnik trójfazowy T3A90L1-4,B34;1,5kW"},
  {title: "K-T3A100L2-4", size: 100,power: 3,meta: "Silnik eleketr. 3 kW; B5; 230/400V"},
  {title: "K-T3A112M4B35-4KW", size: 112,power: 4,meta: "Silnik elektryczny 4kW"},
  {title: "K-T3A-112M2-4", size: 112,power: 5.5,meta: "Silnik prog. T3A-112M2-4; 5,5kW, B5, 145"},
  {title: "K-T3A-132M-4", size: 132,power: 7.5,meta: "Silnik prog. T3A 132M-4, B35, 7.5kW"},
  {title: "K-T3A-132M3-4", size: 132,power: 11,meta: "Silnik prog. T3A 132M3-4, B35,11kW"}
].map(({meta, ...rest}) => ({ ...rest, U: meta.includes('230/400V') ? '230/400V' : '400V', n: '1440', meta }));

export const motorSizes = ['', 63, 71, 80, 90, 100, 112, 132, 160, 180, 200, 225, 250, 280, 315].sort((a, b) => a - b);
export const enginesData = [...enginesK400,...enginesK230,...enginesT3A,...enginesHK,...enginesACMotoren].map(({meta, title,  ...rest})=>({title,...rest,meta, mount: meta.match(/B14|B34|B35|B5/)?.[0] || title.match(/B14|B34|B35|B5/)?.[0] || 'B35'}));
// console.log('enginesData : >> ', enginesData);
export const engineMountData = ['', 'B5', 'B35', 'B14', 'B34'];

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

export const coolerData = [ { title: "2005K", flow: { min: 5, max: 75 }, performance: { min: 0.021, max: 0.031 }, }, { title: "2010K", flow: { min: 20, max: 100 }, performance: { min: 0.052, max: 0.06 }, }, { title: "2015K", flow: { min: 20, max: 200 }, performance: { min: 0.084, max: 0.101 }, }, { title: "2020K", flow: { min: 20, max: 250 }, performance: { min: 0.099, max: 0.12 }, }, { title: "2024K", flow: { min: 20, max: 250 }, performance: { min: 0.165, max: 0.214 }, }, { title: "2030K", flow: { min: 50, max: 300 }, performance: { min: 0.257, max: 0.309 }, }, { title: "2040K", flow: { min: 50, max: 350 }, performance: { min: 0.337, max: 0.425 }, }, { title: "2050K", flow: { min: 50, max: 400 }, performance: { min: 0.447, max: 0.635 }, },
].map(({title,...rest})=>({title: 'HKOILAIR'+title, ...rest}));

export const filterData = [];

export const spoolTypes = ['G','GA','GB', 'E','EA','EB', 'J','JA','JB', 'H','HA','HB', 'L', 'M', 'U', 'W', 'F', 'P', 'A', 'B', 'C', 'D', 'Y', 'D1', 'Y1'];

export const flanges = [
  { title: "WDA0.512", pressure: 180, LK: "LK Ø 26 mm / M 5", thread: "G 1/2″ -14" }, 
  { title: "WDA0.538", pressure: 180, LK: "LK Ø 26 mm / M 5", thread: "G 3/8″ -19" }, 
  { title: "WDA112", pressure: 180, LK: "LK Ø 30 mm / M 6", thread: "G 1/2″ -14" }, 
  { title: "WDA138", pressure: 180, LK: "LK Ø 30 mm / M 6", thread: "G 3/8″ -19" }, 
  { title: "WDA212", pressure: 180, LK: "LK Ø 40 mm / M 8", thread: "G 1/2″ -14" }, 
  { title: "WDA234", pressure: 180, LK: "LK Ø 40 mm / M 8", thread: "G 3/4″ -14" }, 
  { title: "WDA334", pressure: 180, LK: "LK Ø 51 mm / M 10", thread: "G 3/4″ -14" }, 
  { title: "WDA3100", pressure: 180, LK: "LK Ø 56 mm / M 10", thread: "G 1″ -11" },
  { title: "WDS0.512", pressure: 315, LK: "LK Ø 26 mm / M 5", thread: "G 1/2″ -14" },
  { title: "WDS0.538", pressure: 315, LK: "LK Ø 26 mm / M 5", thread: "G 3/8″ -19" },
  { title: "WDS112", pressure: 315, LK: "LK Ø 30 mm / M 6", thread: "G 1/2″ -14" },
  { title: "WDS138", pressure: 315, LK: "LK Ø 30 mm / M 6", thread: "G 3/8″ -19" },
  { title: "WDS212", pressure: 315, LK: "LK Ø 40 mm / M 8", thread: "G 1/2″ -14" },
  { title: "WDS234", pressure: 315, LK: "LK Ø 40 mm / M 8", thread: "G 3/4″ -14" },
  { title: "WDS3100", pressure: 315, LK: "LK Ø 51 mm / M 10", thread: "G 1″ -11" },
  { title: "WDS334", pressure: 315, LK: "LK Ø 51 mm / M 10", thread: "G 3/4″ -14" },
  { title: "WDS3B100", pressure: 315, LK: "LK Ø 56 mm / M 10", thread: "G 1″ -11" },
  { title: "WDS3B34", pressure: 315, LK: "LK Ø 56 mm / M 10", thread: "G 3/4″ -14" },
  { title: "F1", pressure: 250, LK: "LK Ø 30 mm / M 6", thread: "G 3/8″ -19" },
  { title: "F2", pressure: 250, LK: "LK Ø 40 mm / M 8", thread: "G 1/2″ -14" },
  { title: "F3A", pressure: 250, LK: "LK Ø 51 mm / M 10", thread: "G 3/4″ -14" },
  { title: "F3B", pressure: 250, LK: "LK Ø 56 mm / M 10", thread: "G 3/4″ -14" },
  { title: "F3.5A", pressure: 180, LK: "LK Ø 62 mm / M 10", thread: "G 1″ -11" },
  { title: "F3.5B", pressure: 180, LK: "LK Ø 62 mm / M 12", thread: "G 1″ -11" },
  { title: "F4", pressure: 180, LK: "LK Ø 72.5 mm / M 12", thread: "G 1.1/4″ -11" },
  { title: "GF35LKL12315", pressure: 315, LK: "LK Ø 35 mm / M 6", thread: "M 18 x 1,5" },
  { title: "GF35LKL15250", pressure: 250, LK: "LK Ø 35 mm / M 6", thread: "M 22 x 1,5" },
  { title: "GF35LKS16315", pressure: 315, LK: "LK Ø 35 mm / M 6", thread: "M 24 x 1,5" },
];

export const flangesPP = [
  { title: "HKK234069000", pressure: 10, LK: "G 3/8″ -19" },
];

export const pumpGroups = [[0.25,2.3],[1,9.8],[4.5,36],[20,87],[60,150]];
const gearPumpAPF = [
  {},
  {
    HK1PF21L01Z01LBF: { CC: 2.1, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', shaft: 'Ø7', pmax: 200, holePattern: '40 x 40 - Ø 32'},
    HK1PF27L01Z01LBF: { CC: 2.7, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', shaft: 'Ø7', pmax: 200, holePattern: '40 x 40 - Ø 32'},
    HK1PF37L01Z01LBF: { CC: 3.7, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', shaft: 'Ø7', pmax: 200, holePattern: '40 x 40 - Ø 32'},
    HK1PF42L01Z01LBF: { CC: 4.2, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', shaft: 'Ø7', pmax: 200, holePattern: '40 x 40 - Ø 32'},
    HK1PF58L01Z01LBF: { CC: 5.8, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', shaft: 'Ø7', pmax: 160, holePattern: '40 x 40 - Ø 32'},
    HK1PF80L01Z01LBF: { CC: 8, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring', shaft: 'Ø7', pmax: 160, holePattern: '40 x 40 - Ø 32'},
  },
  {
    HK2APF04F02Z41RSS: { CC: 4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF06F02Z41RSS: { CC: 6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF08F02Z41RSS: { CC: 8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF10F06Z41RSS: { CC: 10, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF14F06Z41RSS: { CC: 14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF16F06Z41RSS: { CC: 16, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF20F06Z41RSS: { CC: 20, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HK2APF25F06Z41RSS: { CC: 25, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
  },
  {
    HK3APF26F09Z05RSS: { CC: 26, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 200, holePattern: '128 x 98 - Ø 50.8'},
    HK3APF33F09Z05RSS: { CC: 33, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 200, holePattern: '128 x 98 - Ø 50.8'},
    HK3APF39F09Z05RSS: { CC: 39, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 200, holePattern: '128 x 98 - Ø 50.8'},
    HK3APF46F09Z05RSS: { CC: 46, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 200, holePattern: '128 x 98 - Ø 50.8'},
    HK3APF55F12Z05RSS: { CC: 55, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 200, holePattern: '128 x 98 - Ø 50.8'},
    HK3APF63F12Z05RSS: { CC: 63, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 180, holePattern: '128 x 98 - Ø 50.8'},
  }
];
//  flange: 'Ø36,5 European'
const gearPumpVivolo =[
  {
  HK0P0102ABBA: { CC: 0.16, in: 'G 1/4″ -19', out: 'G 1/4″ -19', shaft: 'Ø 7', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HK0P0202ABBA: { CC: 0.24, in: 'G 1/4″ -19', out: 'G 1/4″ -19', shaft: 'Ø 7', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HK0P0402ABBA: { CC: 0.45, in: 'G 1/4″ -19', out: 'G 1/4″ -19', shaft: 'Ø 7', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HK0P0502ABBA: { CC: 0.56, in: 'G 1/4″ -19', out: 'G 1/4″ -19', shaft: 'Ø 7', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HK0P0602ABBA: { CC: 0.75, in: 'G 1/4″ -19', out: 'G 1/4″ -19', shaft: 'Ø 7', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HK0P0702ABBA: { CC: 0.92, in: 'G 1/4″ -19', out: 'G 1/4″ -19', shaft: 'Ø 7', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  },
  {
  HK1P1602FIIA: { CC: 0.91, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P1702FIIA: { CC: 1.17, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P1802FIIA: { CC: 1.56, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2002FIIA: { CC: 2.08, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2102FIIA: { CC: 2.6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2302FIIA: { CC: 3.12, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2502FIIA: { CC: 3.64, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2702FIIA: { CC: 4.16, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2902FIIA: { CC: 4.94, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3102FIIA: { CC: 5.85, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 190, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3202FIIA: { CC: 6.5, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 190, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3402FIIA: { CC: 7.54, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 190, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3602FIIA: { CC: 9.88, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 170, holePattern: '71.9 x 52.4 - Ø 25.4'},

  HK1P1602FBBA: { CC: 0.91, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P1702FBBA: { CC: 1.17, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P1802FBBA: { CC: 1.56, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2002FBBA: { CC: 2.08, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2102FBBA: { CC: 2.6, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 250, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2302FBBA: { CC: 3.12, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2502FBBA: { CC: 3.64, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2702FBBA: { CC: 4.16, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 240, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P2902FBBA: { CC: 4.94, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 200, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3102FBBA: { CC: 5.85, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 190, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3202FBBA: { CC: 6.5, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 190, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3402FBBA: { CC: 7.54, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 190, holePattern: '71.9 x 52.4 - Ø 25.4'},
  HK1P3602FBBA: { CC: 9.88, in: 'G 3/8″ -19', out: 'G 3/8″ -19', shaft: '1: 8', pmax: 170, holePattern: '71.9 x 52.4 - Ø 25.4'},
  
  HK1P1612GIIA: { CC: 0.91, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '73 x 56 - Ø 30'},
  HK1P1712GIIA: { CC: 1.17, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '73 x 56 - Ø 30'},
  HK1P1812GIIA: { CC: 1.56, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '73 x 56 - Ø 30'},
  HK1P2012GIIA: { CC: 2.08, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '73 x 56 - Ø 30'},
  HK1P2112GIIA: { CC: 2.6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '73 x 56 - Ø 30'},
  HK1P2312GIIA: { CC: 3.12, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '73 x 56 - Ø 30'},
  HK1P2512GIIA: { CC: 3.64, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '73 x 56 - Ø 30'},
  HK1P2712GIIA: { CC: 4.16, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 240, holePattern: '73 x 56 - Ø 30'},
  HK1P2912GIIA: { CC: 4.94, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '73 x 56 - Ø 30'},
  HK1P3112GIIA: { CC: 5.85, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 190, holePattern: '73 x 56 - Ø 30'},
  HK1P3212GIIA: { CC: 6.5, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 190, holePattern: '73 x 56 - Ø 30'},
  HK1P3412GIIA: { CC: 7.54, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 190, holePattern: '73 x 56 - Ø 30'},
  HK1P3612GIIA: { CC: 9.88, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 170, holePattern: '73 x 56 - Ø 30'},
  },
  {
  HK2P4102EOOA: { CC: 4.2, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4302EOOA: { CC: 6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4502EOOA: { CC: 8.4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4702EOOA: { CC: 10.8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4902EPOA: { CC: 14.4, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 250, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5102EPOA: { CC: 16.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 230, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5302EPOA: { CC: 19.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 210, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5502EPOA: { CC: 22.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5702EQPA: { CC: 26.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 170, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P6102EQPA: { CC: 30, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 160, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5902EQPA: { CC: 34.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 150, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P6302EQPA: { CC: 39.6, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 140, holePattern: '96.2 x 71.5 - Ø 36.5'},
  
  HK2P4102EBBA: { CC: 4.2, in: 'G 1/2″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4302EBBA: { CC: 6, in: 'G 1/2″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4502EBBA: { CC: 8.4, in: 'G 1/2″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4702EBBA: { CC: 10.8, in: 'G 1/2″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P4902ECBA: { CC: 14.4, in: 'G 3/4″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 250, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5102ECBA: { CC: 16.8, in: 'G 3/4″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 230, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5302ECBA: { CC: 19.2, in: 'G 3/4″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 210, holePattern: '96.2 x 71.5 - Ø 36.5'},
  HK2P5502ECBA: { CC: 22.8, in: 'G 3/4″ -14', out: 'G 1/2″ -14', shaft: '1: 8', pmax: 200, holePattern: '96.2 x 71.5 - Ø 36.5'},

  HK2P4142FSRA: { CC: 4.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 260, holePattern: '100 x 72 - Ø 80'},
  HK2P4342FSRA: { CC: 6, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 260, holePattern: '100 x 72 - Ø 80'},
  HK2P4542FSRA: { CC: 8.4, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 260, holePattern: '100 x 72 - Ø 80'},
  HK2P4742FSRA: { CC: 10.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 260, holePattern: '100 x 72 - Ø 80'},
  HK2P4942FSRA: { CC: 14.4, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 250, holePattern: '100 x 72 - Ø 80'},
  HK2P5142FSRA: { CC: 16.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 230, holePattern: '100 x 72 - Ø 80'},
  HK2P5342FSRA: { CC: 19.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 210, holePattern: '100 x 72 - Ø 80'},
  HK2P5542FSRA: { CC: 22.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 200, holePattern: '100 x 72 - Ø 80'},
  HK2P5742FSRA: { CC: 26.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 35 mm / M 6', shaft: '1: 5', pmax: 170, holePattern: '100 x 72 - Ø 80'},
 },
 {
  HKX3P7002ABAA: { CC: 21.1, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 250, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P7202ABAA: { CC: 26.06, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 250, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P7402ABAA: { CC: 32.27, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 250, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P7802ABAA: { CC: 38.47, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 250, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P7902ABAA: { CC: 43.44, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 250, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P8102ABAA: { CC: 50.88, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 230, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P8302ACBA: { CC: 60.81, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 230, holePattern: '128 x 98 - Ø 50.8'},
  HKX3P8702ACBA: { CC: 74.46, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 180, holePattern: '128 x 98 - Ø 50.8'},
},
];
const gearPumpCasappa = [
  {},
  {},
  {
    HKKP2004D082E2L: { CC: 4.95, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 285, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2006D082E2L: { CC: 6.61, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 285, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2008D082E2L: { CC: 8.26, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 285, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2011D082E2L: { CC: 11.23, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 275, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2014D082E2L: { CC: 14.53, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 265, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2016D082E2L: { CC: 16.85, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 260, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2020D082E2L: { CC: 21.14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 210, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2025D082E2L: { CC: 26.42, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 180, holePattern: '96.2 x 71.5 - Ø 36.5'},
    HKKP2031D082E2L: { CC: 33.03, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 140, holePattern: '96.2 x 71.5 - Ø 36.5'},
  },
  {
    HKKP3027D083E3L: { CC: 26.7, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 310, holePattern: '128 x 98 - Ø 50.8'},
    HKKP3034D083E3L: { CC: 34.6, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 300, holePattern: '128 x 98 - Ø 50.8'},
    HKKP3038D083E3L: { CC: 39.3, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 300, holePattern: '128 x 98 - Ø 50.8'},
    HKKP3043D083E3L: { CC: 43.9, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 290, holePattern: '128 x 98 - Ø 50.8'},
    HKKP3051D083E3L: { CC: 51.8, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 270, holePattern: '128 x 98 - Ø 50.8'},
    HKKP3061D083E3L: { CC: 61.3, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 240, holePattern: '128 x 98 - Ø 50.8'},
    HKKP3073D083E3L: { CC: 73.8, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 220, holePattern: '128 x 98 - Ø 50.8'},
  }
];
const gearPumpRexroth = [
  {
  HKKM1: { CC: 0.17, in: 'G 1/4″ -19', out: 'Bore Ø 5 mm with O-Ring', shaft: 'Ø 7,16 frez 5', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HKK01: { CC: 0.25, in: 'G 1/4″ -19', out: 'Bore Ø 5 mm with O-Ring', shaft: 'Ø 7,16 frez 5', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HKK02: { CC: 0.45, in: 'G 1/4″ -19', out: 'Bore Ø 5 mm with O-Ring', shaft: 'Ø 7,16 frez 5', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HKK03: { CC: 0.57, in: 'G 1/4″ -19', out: 'Bore Ø 5 mm with O-Ring', shaft: 'Ø 7,16 frez 5', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  HKK04: { CC: 0.76, in: 'G 1/4″ -19', out: 'Bore Ø 5 mm with O-Ring', shaft: 'Ø 7,16 frez 5', pmax: 220, holePattern: 'Ø 66 - Ø 22'},
  },
  {
  HKK10: { CC: 0.92, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK11: { CC: 1.17, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK12: { CC: 1.56, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK13: { CC: 2.08, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK14: { CC: 2.60, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK15: { CC: 3.12, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK16: { CC: 3.64, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 200, holePattern: '40 x 40 - Ø 32'},
  HKK17: { CC: 4.16, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 180, holePattern: '40 x 40 - Ø 32'},
  HKK18: { CC: 4.94, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 150, holePattern: '40 x 40 - Ø 32'},
  HKK19: { CC: 5.85, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: 'Ø 10 frez 5', pmax: 120, holePattern: '40 x 40 - Ø 32'},
  HKK10CON: { CC: 0.92, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK11CON: { CC: 1.17, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK12CON: { CC: 1.56, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK13CON: { CC: 2.08, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK14CON: { CC: 2.6, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK15CON: { CC: 3.12, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK16CON: { CC: 3.64, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK17CON: { CC: 4.16, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK18CON: { CC: 4.94, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK19CON: { CC: 5.85, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK19ACON: { CC: 6.5, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 220, holePattern: '40 x 40 - Ø 32'},
  HKK20CON: { CC: 7.54, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 210, holePattern: '40 x 40 - Ø 32'},
  HKK21CON: { CC: 9.88, in: 'G 3/8″ -19', out: 'Bore Ø 9.25 mm with O-Ring', shaft: '1: 8', pmax: 190, holePattern: '40 x 40 - Ø 32'},
  },
  {},
  {} 
];
const gearPumpWPH = [
  {},
  {    
    '1PZ4-1/28-2-776': { CC: 1, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-1.2/28-2-776': { CC: 1.2, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-1.6/28-2-776': { CC: 1.6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-2/28-2-776': { CC: 2, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-2.5/28-2-776': { CC: 2.5, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-3.2/28-2-776': { CC: 3.2, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-4/22-2-776': { CC: 4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 220, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-5/22-2-776': { CC: 5, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 220, holePattern: '71.9 x 52.4 - Ø 25.4'},
    '1PZ4-6.3/17-2-776': { CC: 6.3, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 170, holePattern: '71.9 x 52.4 - Ø 25.4'},
  },
  {
    '2PZ4-4/28-2-775': { CC: 4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-5.5/28-2-775': { CC: 5.5, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-6.3/28-2-775': { CC: 6.3, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-8/28-2-775': { CC: 8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-11/28-2-775': { CC: 11, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-12.5/28-2-775': { CC: 12.5, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-14/25-2-775': { CC: 14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-16/22-2-775': { CC: 16, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 220, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-20/22-2-775': { CC: 20, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 220, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-22/22-2-775': { CC: 22, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 220, holePattern: '96.2 x 71.5 - Ø 36.5'},
    '2PZ4-25/18-2-775': { CC: 25, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 180, holePattern: '96.2 x 71.5 - Ø 36.5'},
  },
  {
    '3PZ4-16/28-2-775': { CC: 16, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-20/28-2-775': { CC: 20, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-25/28-2-775': { CC: 25, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-28/28-2-775': { CC: 28, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8', shaft: '1: 8', pmax: 280, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-32/28-2-775': { CC: 32, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 280, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-40/22-2-775': { CC: 40, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 220, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-52/20-2-775': { CC: 52, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 200, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-60/18-2-775': { CC: 60, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 180, holePattern: '128 x 98 - Ø 50.8'},
    '3PZ4-70/16-2-775': { CC: 70, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10', shaft: '1: 8', pmax: 160, holePattern: '128 x 98 - Ø 50.8'},
  }
];
const pistonPumpRexroth = {
  HKA10VSO18DRG31R: { CC: 18, in: 'SAE J518C - 1″', out: 'SAE J518C - 3/4″', drain: 'M16 x 1.5',  pmax: 280, regulator: 'Regulator ciśnienia', holePattern: 'Ø 106,4 - Ø 80', shaft: 'Ø18'},
  HKA10VSO18DFR31R: { CC: 18, in: 'SAE J518C - 1″', out: 'SAE J518C - 3/4″', drain: 'M16 x 1.5',  pmax: 280, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 106,4 - Ø 80', shaft: 'Ø18'},
  HKA10VSO28DRG31R: { CC: 28, in: 'SAE J518C - 1.1/4″', out: 'SAE J518C - 3/4″', drain: 'M18 x 1.5',  pmax: 280, regulator: 'Regulator ciśnienia', holePattern: 'Ø 140 - Ø 100', shaft: 'Ø22'},
  HKA10VSO28DFR31R: { CC: 28, in: 'SAE J518C - 1.1/4″', out: 'SAE J518C - 3/4″', drain: 'M18 x 1.5',  pmax: 280, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 140 - Ø 100', shaft: 'Ø22'},
  HKA10VSO45DRG31R: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5',  pmax: 280, regulator: 'Regulator ciśnienia', holePattern: 'Ø 140 - Ø 100', shaft: 'Ø25'},
  HKA10VSO45DFR31R: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5',  pmax: 280, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 140 - Ø 100', shaft: 'Ø25'},
  HKA10VSO71DRG31R: { CC: 71, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5',  pmax: 280, regulator: 'Regulator ciśnienia', holePattern: 'Ø 180 - Ø 125', shaft: 'Ø32'},
  HKA10VSO71DFR31R: { CC: 71, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5',  pmax: 280, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 180 - Ø 125', shaft: 'Ø32'},
  HKA10VSO88DRG31R: { CC: 88, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain: '?',  pmax: 280, regulator: 'Regulator ciśnienia', holePattern: 'Ø 180 - Ø 125', shaft: 'Ø32'},
  HKA10VSO88DFR31R: { CC: 88, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain: '?',  pmax: 280, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 180 - Ø 125', shaft: 'Ø32'},
  HKA10VS100DRG31R: { CC: 100, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain: 'M27 x 2',  pmax: 280, regulator: 'Regulator ciśnienia', holePattern: 'Ø 180 - Ø 125', shaft: 'Ø40'},
  HKA10VS100DFR31R: { CC: 100, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain: 'M27 x 2',  pmax: 280, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 180 - Ø 125', shaft: 'Ø40'},
};
const pistonPumpKawasaki = {
  HKK3VL045B1NRMMP0: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5', pmax: 320, regulator: 'Regulator ciśnienia', holePattern: 'Ø 140 - Ø 100 ISO 3019/2', shaft: 'Ø25'},
  HKK3VL080B1NRMMP0: { CC: 80, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5', pmax: 320, regulator: 'Regulator ciśnienia', holePattern: 'Ø 180 - Ø 125 ISO 3019/2', shaft: 'Ø32'},
  HKK3VL112B1NRMMP0: { CC: 112, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain: 'M27 x 2', pmax: 320, regulator: 'Regulator ciśnienia', holePattern: 'Ø 224 - Ø 180 ISO 3019/2', shaft: 'Ø45'},
  HKK3VL140B1NRMMP0: { CC: 140, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain: 'M27 x 2', pmax: 320, regulator: 'Regulator ciśnienia', holePattern: 'Ø 224 - Ø 180 ISO 3019/2', shaft: 'Ø45'},
  HKK3VL200B1NRMMP0: { CC: 200, in: 'SAE J518C - 3″', out: 'SAE J518C - 1.1/2″', drain: '3/4″', pmax: 320, regulator: 'Regulator ciśnienia', holePattern: '224,5 x 224,5 - Ø 165,1 ISO 3019/2', shaft: 'Ø44,45'},
  HKK3VL045B1NRMML0: { CC: 45, in: 'SAE J518C - 1.1/2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5', pmax: 320, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 140 - Ø 100 ISO 3019/2', shaft: 'Ø25'},
  HKK3VL080B1NRMML0: { CC: 80, in: 'SAE J518C - 2″', out: 'SAE J518C - 1″', drain: 'M22 x 1.5', pmax: 320, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 180 - Ø 125 ISO 3019/2', shaft: 'Ø32'},
  HKK3VL112B1NRMML0: { CC: 112, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain: 'M27 x 2', pmax: 320, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 224 - Ø 180 ISO 3019/2', shaft: 'Ø45'},
  HKK3VL140B1NRMML0: { CC: 140, in: 'SAE J518C - 2.1/2″', out: 'SAE J518C - 1.1/4″', drain: 'M27 x 2', pmax: 320, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 224 - Ø 180 ISO 3019/2', shaft: 'Ø45'},
  HKK3VL200B1NRMML0: { CC: 200, in: 'SAE J518C - 3″', out: 'SAE J518C - 1.1/2″', drain: '3/4″', pmax: 320, regulator: 'Kontroler wykrywania obciążenia', holePattern: '224,5 x 224,5 - Ø 165,1 ISO 3019/2', shaft: 'Ø44,45'},
};
const pistonPumpDaikin = {
  HKJV15A3RX95: { CC: 14.8, in: 'G1″', out: 'G1″', drain: '3/8″', pmax: 210, regulator: 'Regulator ciśnienia', holePattern: 'Ø 105,6 - Ø 82,55', shaft: 'Ø19,05'},
  HKJV23A4RX30: { CC: 23, in: 'G1″', out: 'G1″', drain: '3/8″', pmax: 250, regulator: 'Regulator ciśnienia', holePattern: 'Ø 146 - Ø 101,6', shaft: 'Ø22,2'},
  HKJV38A4RX95: { CC: 37.7, in: 'G1″', out: 'G1″', drain: '1/2″', pmax: 250, regulator: 'Regulator ciśnienia', holePattern: 'Ø 146 - Ø 101,6', shaft: 'Ø22,2'},
  HKJV15SA3CRX95: { CC: 14.8, in: 'G1″', out: 'G1″', drain: '3/8″', pmax: 210, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 105,6 - Ø 82,55', shaft: 'Ø19,05'},
  HKJV23SA4CRX30: { CC: 23, in: 'G1″', out: 'G1″', drain: '3/8″', pmax: 250, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 146 - Ø 101,6', shaft: 'Ø22,2'},
  HKJV38SA4CRX95: { CC: 37.7, in: 'G1″', out: 'G1″', drain: '1/2″', pmax: 250, regulator: 'Kontroler wykrywania obciążenia', holePattern: 'Ø 146 - Ø 101,6', shaft: 'Ø22,2'},
};
const pistonPumpPBA = {
  HKPBA012L8051SF: { CC: 12, in: 'G3/4″', out: 'G3/4″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA018L8051SF: { CC: 18, in: 'G3/4″', out: 'G3/4″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA025L8051SF: { CC: 25, in: 'G3/4″', out: 'G3/4″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA032L8051SF: { CC: 32, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA040L8051SF: { CC: 40, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA063L8051SF: { CC: 63, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA080L8051SF: { CC: 80, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA080L8064SF: { CC: 80, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA108L8051SF: { CC: 108, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
  HKPBA108L8064SF: { CC: 108, in: 'G1″', out: 'G1″', drain: '-', pmax: 350,regulator: "-", holePattern: '80 x 80 - Ø 80', shaft: "8x32x36 DIN-ISO14"},
};
export const pumpData = {
  gears: [['VIVOLO', gearPumpVivolo], ['CASAPPA', gearPumpCasappa], ['REXROTH', gearPumpRexroth], ['WPH', gearPumpWPH], ['CHINA', gearPumpAPF]]
  .flatMap(([maker, pumpsByGroup]) => pumpsByGroup
    .flatMap((el, group) => Object.entries(el)
      .map(([title, data]) => ({[title]: { title, ...data, maker, group }})))),
  piston: [['REXROTH', pistonPumpRexroth], ['KAWASAKI', pistonPumpKawasaki], ['DAIKIN', pistonPumpDaikin], ['HIDROCEL', pistonPumpPBA]]
  .flatMap(([maker, pumpsByGroup]) => Object.entries(pumpsByGroup)
    .map(([title, data]) => ({[title]: { title, ...data, shaft: data.shaft || '-', maker }})))
};

export const coolerVBT =  Array.from(Array(11), (_, i) => i*5 + 20);
export const coolerVZ =  Array.from(Array(11), (_, i) => i*5 + 10);

export const bellhousingData = [
  {title: "HKPTRV16070468", size: 71, holePattern: 'Ø 66 - Ø 22', group: 0},
  {title: "HKPTRV20080468", size: 80, holePattern: 'Ø 66 - Ø 22', group: 0},
   
  {title: "HKPTRV16080448ZFV", size: 71, holePattern: '71.9 x 52.4 - Ø 25.4', group: 1},
  {title: "HKPTRV20080448", size: 80, holePattern: '71.9 x 52.4 - Ø 25.4', group: 1},
  {title: "HKPTRV20090448", size: 90, holePattern: '71.9 x 52.4 - Ø 25.4', group: 1},
  {title: "HKPTRV250110448", size: 100, holePattern: '71.9 x 52.4 - Ø 25.4', group: 1},
  {title: "HKPTRV250110448", size: 112, holePattern: '71.9 x 52.4 - Ø 25.4', group: 1},

  {title: "HKPTRV20096446ZFV", size: 80, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPTRV20096446ZFV", size: 90, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPTRV250110446", size: 100, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPTRV250110446", size: 112, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPTRV300130446", size: 132, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPTRV350173446", size: 160, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},

  {title: "HKPL3000102", size: 132, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPL3500105", size: 160, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},
  {title: "HKPL3500105", size: 180, holePattern: '96.2 x 71.5 - Ø 36.5', group: 2},

  {title: "HKPTRV20096441", size: 80, holePattern: '100 x 72 - Ø 80', group: 2},
  {title: "HKPTRV20096441", size: 90, holePattern: '100 x 72 - Ø 80', group: 2},
  {title: "HKPTRV250110441", size: 100, holePattern: '100 x 72 - Ø 80', group: 2},
  {title: "HKPTRV250110441", size: 112, holePattern: '100 x 72 - Ø 80', group: 2},
  {title: "HKPTRV300130441", size: 132, holePattern: '100 x 72 - Ø 80', group: 2},
  {title: "HKPTRV350173441", size: 160, holePattern: '100 x 72 - Ø 80', group: 2},
  
  {title: "HKPTRV250115465", size: 100, holePattern: '128 x 98 - Ø 50.8', group: 3},
  {title: "HKPTRV250115465", size: 112, holePattern: '128 x 98 - Ø 50.8', group: 3},
  {title: "HKPTRV300144465", size: 132, holePattern: '128 x 98 - Ø 50.8', group: 3},
  {title: "HKPTRV350173465", size: 160, holePattern: '128 x 98 - Ø 50.8', group: 3},
  {title: "HKPTRV350173465", size: 180, holePattern: '128 x 98 - Ø 50.8', group: 3},

  {title: "HKPL3500106", size: 160, holePattern: '128 x 98 - Ø 50.8', group: 3},
  {title: "HKPL3500106", size: 180, holePattern: '128 x 98 - Ø 50.8', group: 3},

  {title: "HKPK350040400", size: 160, holePattern: 'Ø 146 - Ø 101,6'},
  {title: "HKPK350060400", size: 160, holePattern: 'Ø 146 - Ø 101,6'},
  {title: "HKPK350060400", size: 180, holePattern: 'Ø 146 - Ø 101,6'},
  {title: "HKPK400040400", size: 200, holePattern: 'Ø 146 - Ø 101,6'},
  {title: "HKPK350060500", size: 180, holePattern: 'Ø 181 - Ø127'},
  {title: "HKPK350101900", size: 180, holePattern: 'Ø 181 - Ø127'},
  {title: "HKPK400040600", size: 200, holePattern: 'Ø 181 - Ø127'},
  {title: "HKPK400050700", size: 200, holePattern: 'Ø 181 - Ø127'},
  {title: "HKPK450032300", size: 225, holePattern: 'Ø 181 - Ø127'},

  {title: "HKPT132000PBA8080", size: 132, holePattern: '80 x 80 - Ø 80'},
  {title: "HKPT160180PBA8080", size: 160, holePattern: '80 x 80 - Ø 80'},
  {title: "HKPT160180PBA8080", size: 180, holePattern: '80 x 80 - Ø 80'},
  {title: "HKPT200000PBA8080", size: 200, holePattern: '80 x 80 - Ø 80'},
  {title: "HKPT225000PBA8080", size: 225, holePattern: '80 x 80 - Ø 80'},
  {title: "HKPT250000PBA8080", size: 250, holePattern: '80 x 80 - Ø 80'},

  {title: "HKPL250030500", size: 100, holePattern: "Ø 105,6 - Ø 82,55", pump: "HKPFE31,HKJV15"},
  {title: "HKPL250030500", size: 112, holePattern: "Ø 105,6 - Ø 82,55", pump: "HKPFE31,HKJV15"},
  {title: "HKPL250034400", size: 100, holePattern: "Ø 106,4 - Ø 80", pump: "HKA10VSO18"},
  {title: "HKPL250034400", size: 112, holePattern: "Ø 106,4 - Ø 80", pump: "HKA10VSO18"},
  {title: "HKPK300052100", size: 132, holePattern: "Ø 140 - Ø 100", pump: "HKA10VSO28"},
  {title: "HKPK300055500", size: 132, holePattern: "Ø 106,4 - Ø 80", pump: "HKA10VSO18"},
  {title: "HKPK350045400", size: 160, holePattern: "Ø 140 - Ø 100", pump: "HKA10VSO28,HKA10VSO45,HKK3VL045"},
  {title: "HKPK350045500", size: 160, holePattern: "Ø 106,4 - Ø 80", pump: "HKA10VSO18"},
  {title: "HKPK350068700", size: 180, holePattern: "Ø 140 - Ø 100", pump: "HKA10VSO28,HKA10VSO45,HKK3VL045"},
  {title: "HKPK400044600", size: 200, holePattern: "Ø 140 - Ø 100", pump: "HKA10VSO45,HKK3VL045"},
  {title: "HKPK450023700", size: 225, holePattern: "Ø 140 - Ø 100", pump: "HKA10VSO45,HKK3VL045"},
  {title: "HKPK350062600", size: 180, holePattern: "Ø 180 - Ø 125", pump: "HKA10VSO71"},
  {title: "HKPK450020900", size: 225, holePattern: "Ø 180 - Ø 125", pump: "HKA10VSO71,HKA10VSO88,HKA10VSO100,HKK3VL080"},
  {title: "HKPK400040900", size: 200, holePattern: "Ø 180 - Ø 125", pump: "HKA10VSO71,HKA10VSO88,HKK3VL080"},
  {title: "HKPL550010700", size: 280, holePattern: "Ø 180 - Ø 125", pump: "HKA10VSO88,HKA10VSO100,HKK3VL080"},
  {title: "HKPL550081200", size: 250, holePattern: "Ø 180 - Ø 125", pump: "HKA10VSO71,HKA10VSO88,HKA10VSO100,HKK3VL080"},
  {title: "HKPK400053100", size: 200, holePattern: "Ø 180 - Ø 125", pump: "HKA10VSO100"},
  {title: "HKPL550010200", size: 250, holePattern: "Ø 224 - Ø 180 ISO 3019/2", pump: "HKK3VL112,HKK3VL140"},
  {title: "HKPL550010200", size: 280, holePattern: "Ø 224 - Ø 180 ISO 3019/2", pump: "HKK3VL112,HKK3VL140"},
  {title: "HKPK660020500", size: 315, holePattern: "Ø 224 - Ø 180 ISO 3019/2", pump: "HKK3VL140"},
  {title: "HKPK660020400", size: 315, holePattern: "224,5 x 224,5 - Ø 165,1 ISO 3019/2", pump: "HKK3VL200"},

  {title: "HKPL250040400", size: 100, holePattern: "Ø 146 - Ø 101,6", pump: "HKJV23"},
  {title: "HKPL250040400", size: 112, holePattern: "Ø 146 - Ø 101,6", pump: "HKJV23"},
  {title: "HKPL300040700", size: 132, holePattern: "Ø 146 - Ø 101,6", pump: "HKJV23,HKJV38"},
  {title: "HKPK300054800", size: 132, holePattern: "Ø 105,6 - Ø 82,55", pump: "HKPFE31,HKJV15"},
  {title: "HKPK350040400", size: 160, holePattern: "Ø 146 - Ø 101,6", pump: "HKPFE41,HKPVPC30"},
  {title: "HKPK350041000", size: 160, holePattern: "Ø 105,6 - Ø 82,55", pump: "HKPFE31,HKJV15"},
  {title: "HKPK350060400", size: 160, holePattern: "Ø 146 - Ø 101,6", pump: "HKPFE41,HKPVPC30"},
  {title: "HKPK350060400", size: 180, holePattern: "Ø 146 - Ø 101,6", pump: "HKPFE41,HKPVPC30"},
  {title: "HKPK350060500", size: 180, holePattern: "kołnierz dwuotworowy 181", pump: "HKPVPC50"},
  {title: "HKPK350101900", size: 180, holePattern: "kołnierz dwuotworowy 181", pump: "HKPFE52"},
  {title: "HKPK400040400", size: 200, holePattern: "Ø 146 - Ø 101,6", pump: "HKPVPC40"},
  {title: "HKPK400040600", size: 200, holePattern: "kołnierz dwuotworowy 181", pump: "HKPVPC50"},
  {title: "HKPK400050700", size: 200, holePattern: "kołnierz dwuotworowy 181", pump: "HKPFE52"},
  {title: "HKPK450032300", size: 225, holePattern: "kołnierz dwuotworowy 181", pump: "HKPVPC50"},
];

export const manifoldData = [
  {title: "HKKA12", size: 80, holePattern: "Ø 66 - Ø 22", group: 0},
  {title: "HKKA12", size: 71, holePattern: "40 x 40 - Ø 32", group: 1},
  {title: "HKKA12", size: 80, holePattern: "40 x 40 - Ø 32", group: 1},
  {title: "HKKA12", size: 90, holePattern: "40 x 40 - Ø 32", group: 1},
  {title: "HKKA12", size: 100, holePattern: "40 x 40 - Ø 32", group: 1},
  {title: "HKKA12", size: 112, holePattern: "40 x 40 - Ø 32", group: 1},
]

export const couplingsKitData = [
  {title: "HKKE31", size: "DC motor 1.5 - 2.0 kW", holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},
  {title: "HKKE64", size: "DC motor 2.4 - 3.0 kW", holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},
  {title: "HKKE62", size: "DC motor 2.4 - 3.0 kW", holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},
  {title: "HKKE67", size: "DC motor 0.5 - 0.8 kW", holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},

  {title: "HKKF95", size: 80, holePattern: "Ø 66 - Ø 22", group: 0, shaft: "Ø 10 frez 5"},

  {title: "HKKF68", size: 71, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},
  {title: "HKKF14", size: 80, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},
  {title: "HKKF16", size: 90, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},
  {title: "HKKF18", size: 100, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "Ø 10 frez 5"},

  {title: "HKKF82", size: 71, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "1: 8"},
  {title: "HKKF24", size: 80, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "1: 8"},
  {title: "HKKF25", size: 90, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "1: 8"},
  {title: "HKKF26", size: 100, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "1: 8"},
  {title: "HKKF26", size: 112, holePattern: "40 x 40 - Ø 32", group: 1, shaft: "1: 8"},
]

export const couplingData = [
  {title: "HKA1914714184AL", size: 71, shaft: "Ø7", group: 0},
  {title: "HKA1914714184AL", size: 80, shaft: "Ø7", group: 0},
  
  {title: "HKA1914N125AL", size: 71, shaft: "1: 8", group: 1},
  {title: "HKA1919N1AL", size: 80, shaft: "1: 8", group: 1},
  {title: "HKA24197B17AL", size: 90, shaft: "1: 8", group: 1},
  {title: "HKA24322860N1AL", size: 100, shaft: "1: 8", group: 1},
  {title: "HKA24322860N1AL", size: 112, shaft: "1: 8", group: 1},
  
  {title: "HKA2419N2AAL", size: 80, shaft: "1: 8", group: 2},
  {title: "HKA2424N2AAL", size: 90, shaft: "1: 8", group: 2},
  {title: "HKA243228N2AAL", size: 100, shaft: "1: 8", group: 2},
  {title: "HKA243228N2AAL", size: 112, shaft: "1: 8", group: 2},
  {title: "HKA28383860N2AAL", size: 132, shaft: "1: 8", group: 2},
  {title: "HKA384542N2AAL", size: 160, shaft: "1: 8", group: 2},
  
  {title: "HKR2838N2A", size: 132, shaft: "1: 8", group: 2},
  {title: "HKR3842N2A", size: 160, shaft: "1: 8", group: 2},
  
  {title: "HKA243228N3AL", size: 100, shaft: "1: 8", group: 3},
  {title: "HKA243228N3AL", size: 112, shaft: "1: 8", group: 3},
  {title: "HKA28383860N3AL", size: 132, shaft: "1: 8", group: 3},
  {title: "HKA384542N3AL", size: 160, shaft: "1: 8", group: 3},
  
  {title: "HKR2838N3", size: 132, shaft: "1: 8", group: 3},
  {title: "HKR3842N3", size: 160, shaft: "1: 8", group: 3},
  {title: "HKR4248N3", size: 180, shaft: "1: 8", group: 3},
  
  {title: "HKA24197B17AL", size: 80, shaft: "1: 5", group: 2},
  {title: "HKA24247B17AL", size: 90, shaft: "1: 5", group: 2},
  {title: "HKA2432287B17AL", size: 100, shaft: "1: 5", group: 2},
  {title: "HKA2432287B17AL", size: 112, shaft: "1: 5", group: 2},
  {title: "HKA2838387B17AL", size: 132, shaft: "1: 5", group: 2},
  {title: "HKA3845427B17AL", size: 160, shaft: "1: 5", group: 2},

  {title: "HKAGN009PBA83236", size: 132, shaft: "8x32x36 DIN-ISO14"},
  {title: "HKAGN015PBA83236", size: 160, shaft: "8x32x36 DIN-ISO14"},
  {title: "HKAGN022PBA83236", size: 180, shaft: "8x32x36 DIN-ISO14"},
  {title: "HKAGN030PBA83236", size: 200, shaft: "8x32x36 DIN-ISO14"},
  {title: "HKAGN045PBA83236", size: 225, shaft: "8x32x36 DIN-ISO14"},
  {title: "HKAGN055PBA83236", size: 250, shaft: "8x32x36 DIN-ISO14"},

  {title: "HKR2428-18", pump: "HKA10VSO18", size: 100},
  {title: "HKR2428-18", pump: "HKA10VSO18", size: 112},
  {title: "HKR2428-19.05A", pump: "HKJV15", size: 100},
  {title: "HKR2428-19.05A", pump: "HKJV15", size: 112},
  {title: "HKR2428-22.22F", pump: "HKJV23", size: 100},
  {title: "HKR2428-22.22F", pump: "HKJV23", size: 112},
  {title: "HKR2838-18", pump: "HKA10VSO18", size: 132},
  {title: "HKR2838-19.05A", pump: "HKJV15", size: 132},
  {title: "HKR2838-22", pump: "HKA10VSO28", size: 132},
  {title: "HKR2838-22.22F", pump: "HKJV38", size: 132},
  {title: "HKR3842-18", pump: "HKA10VSO18", size: 160},
  {title: "HKR3842-19.05A", pump: "HKJV15", size: 160},
  {title: "HKR3842-22", pump: "HKA10VSO28", size: 160},
  {title: "HKR3842-22.22F", pump: "HKPVPC30", size: 160},
  {title: "HKR3842-22.22F", pump: "HKJV23", size: 160},
  {title: "HKR3842-22.22F", pump: "HKJV38", size: 160},
  {title: "HKR3842-22.22G", pump: "HKPFE41", size: 160},
  {title: "HKR3842-25", pump: "HKA10VSO45", size: 180},
  {title: "HKR3842-25", pump: "HKK3VL045", size: 180},
  {title: "HKR3842-25.38BS", pump: "HKPVPC40", size: 160},
  {title: "HKR4248-22", pump: "HKA10VSO28", size: 180},
  {title: "HKR4248-22.22F", pump: "HKPVPC30", size: 180},
  {title: "HKR4248-22.22F", pump: "HKJV23", size: 180},
  {title: "HKR4248-22.22F", pump: "HKJV38", size: 180},
  {title: "HKR4248-22.22G", pump: "HKPFE41", size: 180},
  {title: "HKR4248-25", pump: "HKA10VSO45", size: 180},
  {title: "HKR4248-25", pump: "HKK3VL045", size: 180},
  {title: "HKR4248-31.75K", pump: "HKPVPC50", size: 180},
  {title: "HKR4248-32", pump: "HKA10VSO71", size: 180},
  {title: "HKR4248-34.92M", pump: "HKPFE52", size: 180},
  {title: "HKR424875-2538BS", pump: "HKPVPC40", size: 160},
  {title: "HKR424875-2538BS", pump: "HKPVPC40", size: 180},
  {title: "HKR4255-22.22F", pump: "HKJV38", size: 200},
  {title: "HKR4255-31.75K", pump: "HKPVPC50", size: 200},
  {title: "HKR4255-32", pump: "HKA10VSO71", size: 200},
  {title: "HKR4255-32", pump: "HKA10VSO88", size: 200},
  {title: "HKR4255-32", pump: "HKK3VL080", size: 200},
  {title: "HKR4255-34.92M", pump: "HKPFE52", size: 200},
  {title: "HKR4255-40", pump: "HKA10VSO100", size: 200},
  {title: "HKR425575-2538BS", pump: "HKPVPC40", size: 200},
  {title: "HKR4255X075-25", pump: "HKA10VSO45", size: 200},
  {title: "HKR4255X075-25", pump: "HKK3VL045", size: 200},
  {title: "HKR4860-25", pump: "HKA10VSO45", size: 225},
  {title: "HKR4860-25", pump: "HKK3VL045", size: 225},
  {title: "HKR4860-32", pump: "HKA10VSO71", size: 225},
  {title: "HKR4860-32", pump: "HKA10VSO88", size: 225},
  {title: "HKR4860-32", pump: "HKK3VL080", size: 225},
  {title: "HKR4860-40", pump: "HKA10VSO100", size: 225},
  {title: "HKR486080-31.75K", pump: "HKPVPC50", size: 225},
  {title: "HKR5565-32", pump: "HKA10VSO71", size: 250},
  {title: "HKR5565-32", pump: "HKA10VSO88", size: 250},
  {title: "HKR5565-32", pump: "HKK3VL080", size: 250},
  {title: "HKR5565-40", pump: "HKA10VSO100", size: 250},
  {title: "HKR5565-45", pump: "HKK3VL112", size: 250},
  {title: "HKR6575-32", pump: "HKA10VSO88", size: 280},
  {title: "HKR6575-32", pump: "HKK3VL080", size: 280},
  {title: "HKR6575-40", pump: "HKA10VSO100", size: 280},
  {title: "HKR6575-45", pump: "HKK3VL112", size: 280},
  {title: "HKR6575-45", pump: "HKK3VL140", size: 280},
  {title: "HKR7580-44.45L", pump: "HKK3VL200", size: 315},
  {title: "HKR7580-45", pump: "HKK3VL140", size: 315},
  {title: "HKR9080-44.45L", pump: "HKK3VL200", size: 315},
];

const spoolHansa = [
  {title: "HK4132080302C1Q",spool: "J",CETOP: 3},
  {title: "HK4131080601C1Q",spool: "JA",CETOP: 3},
  {title: "HK4132070302C1Q",spool: "G",CETOP: 3},
  {title: "HK4131070601C1Q",spool: "GA",CETOP: 3},
  {title: "HK4132030302C1Q",spool: "E",CETOP: 3},
  {title: "HK4131030601C1Q",spool: "EA",CETOP: 3},
  {title: "HK4132010302C1Q",spool: "H",CETOP: 3},
  {title: "HK4131010601C1Q",spool: "HA",CETOP: 3},
  {title: "HK4131520101C1Q",spool: "A",CETOP: 3},
  {title: "HK4131110101C1Q",spool: "C",CETOP: 3},
  {title: "HK4131510101C1Q",spool: "D",CETOP: 3},
  {title: "HK4131510201C1Q",spool: "Y",CETOP: 3},
  {title: "HK4137510902C1Q",spool: "D^",CETOP: 3},
];
const spoolEaton = [
  {title: "HKDG4V30CVMU24DC",spool: "H",CETOP: 3},
  {title: "HKDG4V30BVMU24DC",spool: "HA",CETOP: 3},
  {title: "HKDG4V32CVMU24DC",spool: "E",CETOP: 3},
  {title: "HKDG4V32BVMU24DC",spool: "EA",CETOP: 3},
  {title: "HKDG4V36CVMU24DC",spool: "J",CETOP: 3},
  {title: "HKDG4V36BVMU24DC",spool: "JA",CETOP: 3},
  {title: "HKDG4V38CVMU24DC",spool: "G",CETOP: 3},
  {title: "HKDG4V38BLVMU24DC",spool: "GA",CETOP: 3},
  {title: "HKDG4V322AVMU24DC",spool: "A",CETOP: 3},
  {title: "HKDG4V322ALVMU24DC",spool: "B",CETOP: 3},
  {title: "HKDG4V32AVMU24DC",spool: "D",CETOP: 3},
  {title: "HKDG4V32ALVMU24DC",spool: "Y",CETOP: 3},
  {title: "HKDG4V32NVMU24DC",spool: "D^",CETOP: 3},
  {title: "HKDG4V37CVMU24DC",spool: "M",CETOP: 3}
];
const spoolRexroth = [
  {title: "D1VW004CNJW",spool: "J",CETOP: 3},
  {title: "D1VW004ENJW",spool: "JA",CETOP: 3},
  {title: "D1VW009CNJW",spool: "G",CETOP: 3},
  {title: "D1VW009KNJW",spool: "GA",CETOP: 3},
  {title: "D1VW001CNJW",spool: "E",CETOP: 3},
  {title: "D1VW001ENJW",spool: "EA",CETOP: 3},
  {title: "D1VW002CNJW",spool: "H",CETOP: 3},
  {title: "D1VW002ENJW",spool: "HA",CETOP: 3},
  {title: "D1VW208BNJW",spool: "A",CETOP: 3},
  {title: "D1VW208HNJW",spool: "B",CETOP: 3},
  {title: "D1VW030BNJW",spool: "C",CETOP: 3},
  {title: "D1VW020BNJW",spool: "D",CETOP: 3},
  {title: "D1VW020HNJW",spool: "Y",CETOP: 3},
  {title: "D1VW020DNJW",spool: "D^",CETOP: 3},
];
const spoolAtos = [
  {title: "HKDHE0710X00DC",spool: "H",CETOP: 3},
  {title: "HKDHE0610X00DC",spool: "HA",CETOP: 3},
  {title: "HKDHE0711X00DC",spool: "E",CETOP: 3},
  {title: "HKDHE0611X00DC",spool: "EA",CETOP: 3},
  {title: "HKDHE0713X00DC",spool: "J",CETOP: 3},
  {title: "HKDHE0613X00DC",spool: "JA",CETOP: 3},
  {title: "HKDHE0714X00DC",spool: "G",CETOP: 3},
  {title: "HKDHE0614X00DC",spool: "GA",CETOP: 3},
  {title: "HKDHE06322X00DC",spool: "A",CETOP: 3},
  {title: "HKDHE06302X00DC",spool: "C",CETOP: 3},
  {title: "HKDHE06312X00DC",spool: "D",CETOP: 3},
  {title: "HKDHE06312AX00DC",spool: "Y",CETOP: 3},
  {title: "HKDHE07512X00DC",spool: "D^",CETOP: 3},
  {title: "HKDHE0716X00DC",spool: "L",CETOP: 3},
  {title: "HKDHE0718X00DC",spool: "M",CETOP: 3},
  {title: "HKDHE0717X00DC",spool: "U",CETOP: 3},
];
const spoolAtosCetop5 = [
  {title: "HKDKE1710X00DC",spool: "H",CETOP: "5"},
  {title: "HKDKE1610X00DC",spool: "HA",CETOP: "5"},
  {title: "HKDKE1711X00DC",spool: "E",CETOP: "5"},
  {title: "HKDKE1611X00DC",spool: "EA",CETOP: "5"},
  {title: "HKDKE1713X00DC",spool: "J",CETOP: "5"},
  {title: "HKDKE1613X00DC",spool: "JA",CETOP: "5"},
  {title: "HKDKE1714X00DC",spool: "G",CETOP: "5"},
  {title: "HKDKE16322X00DC",spool: "A",CETOP: "5"},
  {title: "HKDKE16312X00DC",spool: "D",CETOP: "5"},
  {title: "HKDKE16312AX00DC",spool: "Y",CETOP: "5"},
  {title: "HKDKE17512X00DC",spool: "D^",CETOP: "5"},
];
export const spoolData = [
  ...spoolHansa.map(({...rest})=>({...rest, h:30 })),
  ...spoolEaton.map(({...rest})=>({...rest, h:30 })),
  ...spoolRexroth.map(({...rest})=>({...rest, h:30 })),
  ...spoolAtos.map(({...rest})=>({...rest, h:30 })),
  ...spoolHansa.map(({title,CETOP,...rest})=>({title: title.replace('HK413','HK423'),...rest,CETOP: 5, h:40 })),
  ...spoolEaton.map(({title,CETOP,...rest})=>({title: title.replace('HKDG4V3','HKDG4V5'),...rest,CETOP: 5, h:40 })),
  ...spoolAtosCetop5.map(({...rest})=>({...rest, h:40 })),
];
export const gasketPump = [
  {title: "HKDPT160NBR", size: 71},
  {title: "HKDPT200NBR", size: 80},
  {title: "HKDPT200NBR", size: 90},
  {title: "HKDPT250NBR", size: 100},
  {title: "HKDPT250NBR", size: 112},
  {title: "HKDPT300NBR", size: 132},
  {title: "HKDPT350NBR", size: 160},
  {title: "HKDPT350NBR", size: 180},
  {title: "HKDPT400NBR", size: 200},
];
export const dampingRail = [
  {title: "HKDLMDL90L", size: 90},
  {title: "HKDLMDL100L", size: 100},
  {title: "HKDLMDL112M", size: 112},
  {title: "HKDLMDL132S", size: 132},
  {title: "HKDLMDL132M", size: 132},
  {title: "HKDLMDL160M", size: 160},
  {title: "HKDLMDL160L", size: 160},
  {title: "HKDLMDL180M", size: 180},
  {title: "HKDLMDL180L", size: 180},
  {title: "HKDLMDL200L", size: 200},
];
const singleConnectionPlate = [
  {title: "HKES3B38X2F", cetop: 3, pressure: 210, threadP: 'G 3/8″ -19', threadT: 'G 3/8″ -19', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: true},
  {title: "HKES3B38X3F", cetop: 3, pressure: 350, threadP: 'G 3/8″ -19', threadT: 'G 3/8″ -19', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: true},
  {title: "HKES5B34PLX2F", cetop: 5, pressure: 120, threadP: 'G 3/4″ -14', threadT: 'G 3/4″ -14', threadA: 'G 3/4″ -14', threadB: 'G 3/4″ -14', DBV: true},
  {title: "HKES5B34PLX3F", cetop: 5, pressure: 270, threadP: 'G 3/4″ -14', threadT: 'G 3/4″ -14', threadA: 'G 3/4″ -14', threadB: 'G 3/4″ -14', DBV: true},
  {title: "HKEM103138X2F", cetop: 3, pressure: 210, threadP: 'G 1/2″ -14', threadT: 'G 1/2″ -14', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: true},
  {title: "HKEM103138X3F", cetop: 3, pressure: 350, threadP: 'G 1/2″ -14', threadT: 'G 1/2″ -14', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: true},
  {title: "HKEM105134X2F", cetop: 5, pressure: 120, threadP: 'G 3/4″ -14', threadT: 'G 3/4″ -14', threadA: 'G 3/4″ -14', threadB: 'G 3/4″ -14', DBV: true},
  {title: "HKEM105134X3F", cetop: 5, pressure: 270, threadP: 'G 3/4″ -14', threadT: 'G 3/4″ -14', threadA: 'G 3/4″ -14', threadB: 'G 3/4″ -14', DBV: true},
  {title: "K-DR2-06/11-AL", cetop: 3, pressure: 210, threadP: 'G 1/2″ -14', threadT: 'G 1/2″ -14', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: true},
  {title: "HKBA201HF", cetop: 3, pressure: 350, threadP: 'G 3/8″ -19', threadT: 'G 3/8″ -19', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: false},
  {title: "HKBA202HF", cetop: 3, pressure: 350, threadP: 'G 3/8″ -19', threadT: 'G 3/8″ -19', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: false},
  {title: "HKBA204HF", cetop: 3, pressure: 350, threadP: 'G 3/8″ -19', threadT: 'G 3/8″ -19', threadA: 'G 3/8″ -19', threadB: 'G 3/8″ -19', DBV: false},
];
const multipleConnectionPlateBA214 = Array.from({ length: 9 }, (_, i) => {
  const stations = 2 + i;
  return {
    title: `HKBA214${stations}`,
    cetop: 3,
    pressure: 350,
    stations,
    threadP: 'G 1/2″ -14',
    threadT: 'G 1/2″ -14',
    threadA: 'G 3/8″ -19',
    threadB: 'G 3/8″ -19',
    DBV: false
  };
});
const multipleConnectionPlateBA314 = Array.from({ length: 5 }, (_, i) => {
  const stations = 2 + i;
  return {
    title: `HKBA314${stations}`,
    cetop: 5,
    pressure: 350,
    stations,
    threadP: 'G 3/4″ -14',
    threadT: 'G 1″ -11',
    threadA: 'G 3/4″ -14',
    threadB: 'G 3/4″ -14',
    DBV: false
  };
});
const createMultipleConnectionPlateEM103 = (suffix) => 
  Array.from({ length: 5 }, (_, i) => {
    const stations = 2 + i;
    return {
      title: `HKEM103${stations}38X${suffix}`,
      cetop: 3,
      pressure: suffix === "3F" ? 350 : 210,
      stations,
      threadP: 'G 1/2″ -14',
      threadT: 'G 1/2″ -14',
      threadA: 'G 3/8″ -19',
      threadB: 'G 3/8″ -19',
      DBV: true
    };
  });
const createMultipleConnectionPlateEM105 = (suffix) => 
  Array.from({ length: 4 }, (_, i) => {
    const stations = 2 + i;
    return {
      title: `HKEM105${stations}34X${suffix}`,
      cetop: 5,
      pressure: suffix === "3F" ? 270 : 120,
      stations,
      threadP: 'G 3/4″ -14',
      threadT: 'G 3/4″ -14',
      threadA: 'G 3/4″ -14',
      threadB: 'G 3/4″ -14',
      DBV: true
    };
  });
const multipleConnectionPlateEM1033F = createMultipleConnectionPlateEM103("3F");
const multipleConnectionPlateEM1032F = createMultipleConnectionPlateEM103("2F");
const multipleConnectionPlateEM1053F = createMultipleConnectionPlateEM105("3F");
const multipleConnectionPlateEM1052F = createMultipleConnectionPlateEM105("2F");

const createMultipleConnectionPlateDR2 = (suffix) => 
  Array.from({ length: 5 }, (_, i) => {
    const stations = 2 + i;
    return {
      title: `K-DR2-06/${stations}${suffix}-AL`,
      cetop: 3,
      pressure: 210,
      stations,
      threadP: 'G 1/2″ -14',
      threadT: 'G 1/2″ -14',
      threadA: 'G 3/8″ -19',
      threadB: 'G 3/8″ -19',
      DBV: true,
      start: suffix === 1 ? false : true,
    };
  });
const multipleConnectionPlateDR21 = createMultipleConnectionPlateDR2(1);
const multipleConnectionPlateDR22 = createMultipleConnectionPlateDR2(2);

export const blockData = [
  ...singleConnectionPlate.map(({ title, cetop, pressure, ...rest }) => ({ title, cetop, pressure, stations: 1, ...rest })),
  ...multipleConnectionPlateBA214,
  ...multipleConnectionPlateBA314,
  ...multipleConnectionPlateEM1032F,
  ...multipleConnectionPlateEM1033F,
  ...multipleConnectionPlateEM1052F,
  ...multipleConnectionPlateEM1053F,
  ...multipleConnectionPlateDR21,
  ...multipleConnectionPlateDR22,
].map((el) => ({ ...el, start: !!el.start }));

export const HKHQ = [
  {title: "HKHQ012", type: "012",CETOP: 3, h: 40},
  {title: "HKHQ012U", type: "012",CETOP: 3, h: 40},
  {title: "HKHQ013", type: "013",CETOP: 3, h: 40},
  {title: "HKHQ014", type: "014",CETOP: 3, h: 40},
  {title: "HKHQ022", type: "022",CETOP: 3, h: 40},
  {title: "HKHQ022U", type: "022",CETOP: 3, h: 40},
  {title: "HKHQ023", type: "023",CETOP: 3, h: 40},
  {title: "HKHQ024", type: "024",CETOP: 3, h: 40},
  {title: "HKKQ012", type: "012",CETOP: 5, h: 50},
  {title: "HKKQ013", type: "013",CETOP: 5, h: 50},
  {title: "HKKQ014", type: "014",CETOP: 5, h: 50},
  {title: "HKKQ022", type: "022",CETOP: 5, h: 50},
  {title: "HKKQ023", type: "023",CETOP: 5, h: 50},
  {title: "HKKQ024", type: "024",CETOP: 5, h: 50},
];

export const HKHR = [
  {title: "HKHR011", type: "011",CETOP: 3, h: 40},
  {title: "HKHR012", type: "012",CETOP: 3, h: 40},
  {title: "HKHR013", type: "013",CETOP: 3, h: 40},
  {title: "HKHR014", type: "014",CETOP: 3, h: 40},
  {title: "HKHR016", type: "016",CETOP: 3, h: 40},
  {title: "HKKR011", type: "011",CETOP: 5, h: 50},
  {title: "HKKR012", type: "012",CETOP: 5, h: 50},
  {title: "HKKR013", type: "013",CETOP: 5, h: 50},
  {title: "HKKR014", type: "014",CETOP: 5, h: 50},
];

export const HKHMP = [
  {title: "HKHMP011100", type: "011",CETOP: 3, pmax: 100, h: 40},
  {title: "HKHMP011210", type: "011",CETOP: 3, pmax: 210, h: 40},
  {title: "HKHMP011350", type: "011",CETOP: 3, pmax: 350, h: 40},
  {title: "HKHMP012100", type: "012",CETOP: 3, pmax: 100, h: 40},
  {title: "HKHMP012210", type: "012",CETOP: 3, pmax: 210, h: 40},
  {title: "HKHMP012350", type: "012",CETOP: 3, pmax: 350, h: 40},
  {title: "HKHMP013100", type: "013",CETOP: 3, pmax: 100, h: 40},
  {title: "HKHMP013210", type: "013",CETOP: 3, pmax: 210, h: 40},
  {title: "HKHMP013350", type: "013",CETOP: 3, pmax: 350, h: 40},
  {title: "HKHMP014350", type: "014",CETOP: 3, pmax: 350, h: 40},
  
  {title: "HKKM011100", type: "011",CETOP: 5, pmax: 100, h: 50},
  {title: "HKKM011210", type: "011",CETOP: 5, pmax: 210, h: 50},
  {title: "HKKM011350", type: "011",CETOP: 5, pmax: 350, h: 50},
  {title: "HKKM012100", type: "012",CETOP: 5, pmax: 100, h: 50},
  {title: "HKKM012210", type: "012",CETOP: 5, pmax: 210, h: 50},
  {title: "HKKM012350", type: "012",CETOP: 5, pmax: 350, h: 50},
  {title: "HKKM013100", type: "013",CETOP: 5, pmax: 100, h: 50},
  {title: "HKKM013210", type: "013",CETOP: 5, pmax: 210, h: 50},
  {title: "HKKM013350", type: "013",CETOP: 5, pmax: 350, h: 50},
  {title: "HKKM014100", type: "014",CETOP: 5, pmax: 100, h: 50},
  {title: "HKKM014210", type: "014",CETOP: 5, pmax: 210, h: 50},
  {title: "HKKM014350", type: "014",CETOP: 5, pmax: 350, h: 50},
];

export const HKM = [
  {title: "HKM530", L: 30,CETOP: 3},
  {title: "HKM550", L: 50,CETOP: 3},
  {title: "HKM560", L: 60,CETOP: 3},
  {title: "HKM570", L: 70,CETOP: 3},
  {title: "HKM580", L: 80,CETOP: 3},
  {title: "HKM590", L: 90,CETOP: 3},
  {title: "HKM5100", L: 100,CETOP: 3},
  {title: "HKM5110", L: 110,CETOP: 3},
  {title: "HKM5120", L: 120,CETOP: 3},
  {title: "HKM5140", L: 140,CETOP: 3},
  {title: "HKM5150", L: 150,CETOP: 3},
  {title: "HKM5160", L: 160,CETOP: 3},
  {title: "HKM640", L: 40,CETOP: 5},
  {title: "HKM675", L: 75,CETOP: 5},
  {title: "HKM690", L: 90,CETOP: 5},
  {title: "HKM6100", L: 100,CETOP: 5},
  {title: "HKM6125", L: 125,CETOP: 5},
  {title: "HKM6140", L: 140,CETOP: 5},
  {title: "HKM6175", L: 175,CETOP: 5},
  {title: "HKM6190", L: 190,CETOP: 5},
];

const priority = [
  "HAG",
  "pump",
  "flangeIn",
  "flangeOut",
  "motor",
  "bellhousing",
  "coupling",
  "vibro",
  "block",
  "valve",
  "start",
  "throttle",
  "check",
  "directPress",
  "bolt",
  "plug",
  'tank',
  'cooler',
];
export const getPriority = (KIT) => {
  const array = Object.entries(KIT);
  const sorting = (a, b) => {
    const a1 = priority.findIndex(item => a[1].opis.includes(item));
    const b1 = priority.findIndex(item => b[1].opis.includes(item));
    return a1 - b1;
    }
    const sorted = array.sort(sorting);
  return Object.fromEntries(sorted)
};

export const ventilation = [
  {title: "FIBL046FP03002", thread: "Ø41 3 x M5", q: 150},
  {title: "FIBL046FP10002", thread: "Ø41 3 x M5", q: 200},
  {title: "FIBL080FP03080", thread: "Ø73 6 x M5", q: 450},
  {title: "FIBL080FP10080", thread: "Ø73 6 x M5", q: 550},
  {title: "FIBL080FP10150", thread: "Ø73 6 x M5", q: 550},
  {title: "FIBL080GP03", thread: "G 3/4″ -14", q: 450},
  {title: "FIBL080GP10", thread: "G 3/4″ -14", q: 550},
  {title: "FIBL116FP03001", thread: "Ø73 6 x M5", q: 1600},
  {title: "FIBL116FP03001", thread: "Ø73 6 x M5", q: 2150},
].map(({ title, ...rest }) => ({ title, ...rest, rating: title.slice(8, 11) }));

const HKRTR = [ { title: "HKRTR0502CG1P10", plug: "G 3/8″ -19", q: 25, type: 'PowerPack' }, ];
const FIRL = [
  {title: "FIRL024A10NVG1/2", plug: "G 1/2″ -14", q: 24},
  {title: "FIRL048P10NVG1/2", plug: "G 1/2″ -14", q: 60},
  {title: "FIRL053A10NVG1/2", plug: "G 1/2″ -14", q: 53},
  {title: "FIRL064A10NVG3/4", plug: "G 3/4″ -14", q: 64},
  {title: "FIRL086P10NVG3/4", plug: "G 3/4″ -14", q: 86},
  {title: "FIRL110P10NVG1/2", plug: "G 1/2″ -14", q: 86},
  {title: "FIRL110P10NVG3/4", plug: "G 3/4″ -14", q: 110},
  {title: "FIRL150P10NVG1", plug: "G 1″ -11", q: 110},
  {title: "FIRL150P10NVG3/4", plug: "G 3/4″ -14", q: 110},
  {title: "FIRL225P10NVG1", plug: "G 1″ -11", q: 220},
  {title: "FIRL225P10NVG3/4", plug: "G 3/4″ -14", q: 220},
  {title: "FIRL281P10NVG11/4", plug: "G 1.1/4″ -11", q: 280},
  {title: "FIRL290A10NVG11/4", plug: "G 1.1/4″ -11", q: 290},
  {title: "FIRL320P10NVG11/2", plug: "G 1.1/2″ -11", q: 610},
  {title: "FIRL610P10NVG11/2", plug: "G 1.1/2″ -11", q: 610},
].map(el => ({ ...el, type: 'Immersion' }));
const FISPR = [
  {title: "FISPR48A10VG3/4", plug: "G 3/4″ -14", q: 48},
  {title: "FISPR55P10VG3/4", plug: "G 3/4″ -14", q: 55},
  {title: "FISPR110A10VG11/4", plug: "G 1.1/4″ -11", q: 110},
  {title: "FISPR115A10VG11/4", plug: "G 1.1/4″ -11", q: 115},
  {title: "FISPR150P10VG11/4", plug: "G 1.1/4″ -11", q: 150},
  {title: "FISPR220A10VG11/2", plug: "G 1.1/2″ -11", q: 220},
  {title: "FISPR250A10VG11/2", plug: "G 1.1/2″ -11", q: 250},
  {title: "FISPR282P10VG11/2", plug: "G 1.1/2″ -11", q: 282},
].map(el => ({ ...el, type: 'Spin-On' }));
export const filtration = [ ...HKRTR ,...FIRL, ...FISPR ];

// const d = 
// [{title: "D1VW001CNJW",article: "K-D1VW001CNJW",description: "Zawór magrozdz4/3 WZ6 bez cewki"},
// {title: "D1VW001CNJW",article: "K-VED1VW001CNJW",description: "n.v. => HK4132030302C1Q"},
// {title: "D1VW001CNJW",article: "K-VED1W001CNJW",description: "n.v. => HK4132030302C1Q"},
// {title: "D1VW003FNJW",article: "K-VED1VW035CNJW",description: "4/2-Wegeventil, 24VDC"},
// {title: "D1VW035CNJW",article: "K-VED1VW035CNJW",description: "Wegeventil D1VW035CNJW91"},
// {title: "D1VW006KNJW",article: "K-VED1VW006KNJW",description: "4/2-Wegeventil, NG6 24VDC"},
// {title: "D1VW101BNJW",article: "K-D1VW101BNJW",description: "4/2 Wegeventil"},
// {title: "D1VW011CNJW",article: "K-VED1VW011CNJW",description: "4/3-Wegeventil NG6 24 DC"},
// {title: "D1VW020DNJW",article: "K-VED1VW020DNJW",description: "n.v. --> siehe HK4137510902C1Q"},
// {title: "D1VW031CNJW",article: "K-VED1VW031CNJW",description: "Wegeventil NG6 24Volt"},
// {title: "D1VW004CNJW",article: "HK4132080302C1Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW004KNJW",article: "K-VED1VW004KNJW",description: "4/2-Wegeventil NG6 24 VDC"},
// {title: "D1VW021CNJW",article: "K-VED1VW021CNJW",description: "4/3-Wegeventil NG6 24VDC"},
// {title: "D1VW003CNJW",article: "K-VED1VW003CNJW",description: "Wegeventil D1VW003CNJW, 24VDC"},
// {title: "D1VW022CNJW",article: "K-VED1VW022CNJW",description: "4/3-Wegeventil NG6 24VDC"},
// {title: "D1VW208BNJW",article: "K-VED1VW208BNJW",description: "4/2-WV 350bar 80l/mim neg.Überdeckung"},
// {title: "D1VW026BNJW",article: "K-VED1VW026BNJW",description: "4/2-Wegeventil, NG6"},
// {title: "D1VW014CNJW",article: "K-VED1VW014CNJW",description: "4/3 Wegeventil D1VW014CNJW   NG6"},
// {title: "D1VW20HNJW",article: "K-VED1VW20HNJW",description: "4/2 wegeventil NG 6, 24 VDC"},
// {title: "D1VW004CNJW",article: "K-VED1VW004CNJW",description: "4/3-Wegeventil 24 VDC"},
// {title: "D1VW001CNJW",article: "K-VED1VW001CNJW",description: "4/3-Wegeventil NG6 24DC"},
// {title: "D1VW022ENJW",article: "K-VED1VW022ENJW",description: "4/3-Wegeventil NG6 24VDC"},
// {title: "D1VW002ENJW",article: "HK4131010601C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW015CNJW",article: "K-VED1VW015CNJW",description: "4/3-Wegeventil NG6 24VDC"},
// {title: "D1VW008CNJW",article: "K-VED1VW008CNJW",description: "4/3-Wegeventil Ng6 24VDC"},
// {title: "D1VW020BNJW",article: "K-VED1VW020BNJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW001FNJW",article: "K-VED1VW001FNJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW002KNJW",article: "K-VED1VW002KNJW",description: "4/3 Wegeventil NG6 24VDC"},
// {title: "D1VW4CNJW",article: "K-VED1VW4CNJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW9ENJW",article: "K-VED1VW9ENJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW020DNJW",article: "K-D1VW020DNJW",description: ""},
// {title: "D1VW101DNJW",article: "K-D1VW101DNJW",description: "Filterelement"},
// {title: "D1VW002ENJW",article: "K-VED1VW002ENJW",description: "Valv.Dir.Ele.D1VW002ENJW"},
// {title: "D1VW061CNJW",article: "K-VED1VW061CNJW",description: "4/3 Wegeventil NG06 24VDC"},
// {title: "D1VW004ENJW",article: "K-4/2WEGEMAGNETVEN",description: "4/2 Wege-Magnetventil NG6"},
// {title: "D1VW002CNJW",article: "K-VED1VW002CNJW",description: "4/3 Wegeventil NG6 24VDC"},
// {title: "D1VW004FNJW",article: "K-VED1VW004FNJW",description: "4/3 Wegeventil NG6 24 VDC"},
// {title: "D1VW002ENJW",article: "K-VED1VW002ENJW",description: "4/2-Wegev. NG6 24VDC => HK4131010601C1Q"},
// {title: "D1VW004CNJW",article: "K-VED1VW004CNJW",description: "4/3-Wegeventil 24 VDC => HK4132080302C1Q"},
// {title: "D1VW004CNJW",article: "K-VED1VW004CNJW",description: "n.v. => HK4132080302C1Q"},
// {title: "D1VW020DNJW",article: "HK4137510902C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW001CNJW",article: "K-VED1W001CNJW",description: "4/3 Wege-Magnetventil"},
// {title: "D1VW008KNJW",article: "K-VED1VW008KNJW",description: "4/2-Wegeventil NG6 24VDC"},
// {title: "D1VW008CNJW",article: "K-VED1VW008CNJW",description: "4/3-Wegeventil NG6 24VDC"},
// {title: "D1VW020DNJW",article: "K-VED1VW020DNJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW002ENJW",article: "HK41310106011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW001ENJW",article: "HK4131030601C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW001ENJW",article: "HK41310306011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW009KNJW",article: "HK4131070601C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW009KNJW",article: "HK41310706011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW004ENJW",article: "HK4131080601C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW004ENJW",article: "HK41310806011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW030BNJW",article: "HK4131110101C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW030BNJW",article: "HK41311101011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW020BNJW",article: "HK4131510101C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW020BNJW",article: "HK41315101011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW020HNJW",article: "HK4131510201C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW020HNJW",article: "HK41315102011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW020DNJW",article: "K-D1VW020DNJW1",description: "Ventil"},
// {title: "D1VW020HNJW",article: "K-D1VW020HNJW",description: "Ventil"},
// {title: "D1VW001FNJW",article: "K-VED1VW001FNJW",description: "4/2-Wegeventil 24 VDC (K-VEDHE067124DC)"},
// {title: "D1VW001CNJW",article: "K-VED1VW001CNJW",description: "4/3-Wegeventil NG6, 24 Volt DC"},
// {title: "D1VW001CNJW",article: "HK4132030302C1Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW076KNJW",article: "K-VED1VW076KNJW",description: "4/2-Wegeventil NG6 24VDC"},
// {title: "D1VW078ENJW",article: "K-VED1VW078ENJW",description: "4/2-Wegeventil NG6 24VDC"},
// {title: "D1VW004CNJW",article: "K-VED1VW4CNJW75",description: "Wegeventil"},
// {title: "D1VW026HNJW",article: "K-VED1VW026HNJW",description: "4/2-Wegeventil, NG6"},
// {title: "D1VW004CNJW",article: "K-D1VW004CNJW",description: "4/3 Valve NG6 ABT"},
// {title: "D1VW004CNJW",article: "HK41320803021Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW001FNJW",article: "K-D1VW001FNJW",description: "4/2 magn. vožtuvas NG6 24VDC (Parker)"},
// {title: "D1VW006CNJW",article: "K-VED1VW006CNJW",description: "4/3 Wegeventil NG6 24VDC"},
// {title: "D1VW083BNJW",article: "K-VED1VW083BNJW",description: "4/2 Wegeventil  NG6 Sonderschieber 24VDC"},
// {title: "D1VW004ENJW",article: "K-VED1VW004ENJW",description: "4/2-Wegeventil NG6 24VDC"},
// {title: "D1VW001MNJW",article: "K-VED1VW001MNJW",description: "4/2 Wegeventil NG 6, 24 VDC"},
// {title: "D1VW020HNJW",article: "K-VED1VW020HNJW",description: "Wegeventil"},
// {title: "D1VW009CNJW",article: "K-VED1VW009CNJW",description: "4/3-Wegeventil NG6 24VDC"},
// {title: "D1VW104KNJW",article: "K-VED1VW104KNJW",description: "3/2-Wegeventil, Sonderschieber"},
// {title: "D1VW001MNJW",article: "K-VED1VW001MNJW",description: "4/2 wegeventil NG 6, 24 VDC"},
// {title: "D1VW20BNJW",article: "K-VED1VW20BNJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW002KNJW",article: "K-VED1VW002KNJW",description: "4/2 Wegeventil NG6 24VDC"},
// {title: "D1VW011BNJW",article: "K-VED1VW011BNJW",description: "4/2 Wegeventil"},
// {title: "D1VW011DNJW",article: "K-VED1VW011DNJW",description: "4/2 Wegeventil"},
// {title: "D1VW101BNJW",article: "K-VED1VW101BNJW",description: "4/2 Wegeventil"},
// {title: "D1VW101DNJW",article: "K-VED1VW101DNJW",description: "4/2 Wegeventil"},
// {title: "D1VW021KNJW",article: "K-D1VW021KNJW",description: "4/2 Wege Ventil NG 6 24 VDC"},
// {title: "D1VW208BNJW",article: "K-D1VW208BNJW",description: "4/2 Wege Ventil NG 6 24 VDC"},
// {title: "D1VW1CNJW",article: "K-VED1VW1CNJW",description: "4/3-Wegeventil"},
// {title: "D1VW105KNJW",article: "K-VED1VW105KNJW",description: "4/2 Wegeventil NG6 24VDC"},
// {title: "D1VW106CNJW",article: "K-VED1VW106CNJW",description: "4/3-Wegeventil D1VW106CNJW, 24VDC"},
// {title: "D1VW003KNJW",article: "K-VED1VW003KNJW",description: "4/2-Wegeventil NG6 24VDC"},
// {title: "D1VW002KNJW",article: "K-VED1VW002KNJW",description: "4/2 ventil NG6 24VDC"},
// {title: "D1VW004ENJW",article: "K-4/2WEGEMAGNETVEN",description: "n.v. => HK4131080601C1Q"},
// {title: "D1VW020BNJW",article: "K-HKVED1VW020BNJW",description: "n.v. => HK4131510101C1Q"},
// {title: "D1VW020DNJW",article: "K-VED1VW020DNJW",description: "n.v. => HK4137510902C1Q"},
// {title: "D1VW020HNJW",article: "K-D1VW020HNJW",description: "n.v. => HK4131510201C1Q"},
// {title: "D1VW020HNJW",article: "K-VED1VW020HNJW",description: "n.v. => HK4131510201C1Q"},
// {title: "D1VW020BNJW",article: "K-HKVED1VW020BNJW",description: "Wegeventil NG 6"},
// {title: "D1VW081FNJW",article: "K-VED1VW081FNJW",description: "4/2-Wegeventil NG6, 24VDC"},
// {title: "D1VW004CNJW",article: "K-D1VW004CNJW",description: "Wegeventil 24V= 210 bar 1,25 A"},
// {title: "D1VW208BNJW",article: "HK4131520101C1Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW208BNJW",article: "HK41315201011Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW002CNJW",article: "HK4132010302C1Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW002CNJW",article: "HK41320103021Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW001CNJW",article: "HK41320303021Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW009CNJW",article: "HK4132070302C1Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW009CNJW",article: "HK41320703021Q",description: "Zawór magrozdz4/3 WZ6 24VDC"},
// {title: "D1VW020DNJW",article: "HK41375109021Q",description: "Zawór magrozdz4/2 WZ6 24VDC"},
// {title: "D1VW002ENJW",article: "K-VED1VW002ENJW",description: "4/2-Wegeventil NG6 24VDC"},
// {title: "D1VW009ENJW",article: "K-VED1VW009ENJW",description: "4/2-Wegeventil 24 VDC"},
// {title: "D1VW008FNJW",article: "K-VED1VW008FNJW",description: "4/2 Wegeventil NG6"},
// {title: "D1VW055CNJW",article: "K-VED1VW055CNJW",description: "4/3-Wegeventil, Sonderschieber"},
// {title: "D1VW006KNJW",article: "K-VED1VW006KNJW",description: "4/3-Wegeventil, NG6"},
// {title: "D1VW026BNJW",article: "K-VED1VW026BNJW",description: "4/3-Wegeventil, NG6"}]

// const set1 = new Set();
// console.log(d.map(({title})=>spoolRexroth.some(el=> el.title === title) || console.log(title)))
// spoolRexroth.forEach(({title})=>set1.add(title));
// d.forEach(({title})=>{
//   if (set1[title]) console.log(title);
//   else set1.add(title)
// })
