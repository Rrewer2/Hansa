export const initialValues = { i: 1, D: 100, d: 60, L: 300, Q: 12, P: 200, aF: 40, bF: 80, DF: 20, η: 70, vBT: 45, vz: 20, z: 4,};

export const g = 9.80665;

export const separator = " | ";

export const standartDiameters = [ 200,195,190,185,180,175,170,165,160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 63, 60, 56, 55, 50, 45, 40, 36, 35, 32, 30, 28, 25, 22, 20, 16
 ];
export const bucklingSafety = 5;

export const HKSHMount  = {0:'Zakończone gwintem',1:'Tuleja sztywna',2:'Wahliwe łożysko',3:'Kołnierz dławnicy',4:'Kołnierz dna',5:'Kołnierz pręta',6:'Na łapach',7:'Na kuli',8:'Przelotowy pręt',9:'Na czopach',W:'Widlaste',X:'Inne'};

const RA = [{title:'HKBAKRA03',Size:3,CoolingCapacity: 0.16},{title:'HKBAKRA06',Size:6,CoolingCapacity: 0.36},{title:'HKBAKRA12',Size:12,CoolingCapacity: 0.6},{title:'HKBAKRA20',Size:20,CoolingCapacity: 0.72},{title:'HKBAKRA30',Size:30,CoolingCapacity: 0.92},{title:'HKBAKRA44',Size:44,CoolingCapacity: 1.04},{title:'HKBAKRA70',Size:70,CoolingCapacity: 1.16},{title:'HKBAKRA130',Size:130,CoolingCapacity: 2.1}].map((el) => ({...el, type: 'RA'}));
const BSK = [{title:'HKBSK40',Size:40},{title:'HKBSK63',Size:63},{title:'HKBSK100',Size:100},{title:'HKBSK160',Size:160},{title:'HKBSK200',Size:200},{title:'HKBSK250',Size:250},{title:'HKBSK300',Size:300},{title:'HKBSK400',Size:400}].map((el) => ({...el, type: 'BSK'}));;
const BEK = [{title:'HKBEK12',Size:12},{title:'HKBEK20',Size:20},{title:'HKBEK35',Size:35},{title:'HKBEK50',Size:50},{title:'HKBEK60',Size:60},{title:'HKBEK75',Size:75},{title:'HKBEK100',Size:100},{title:'HKBEK150',Size:150},{title:'HKBEK225',Size:225},{title:'HKBEK300',Size:300}].map((el) => ({...el, type: 'BEK'}));;
const SBT =[{title:'HKSBT006',Size:6},{title:'HKSBT012',Size:12},{title:'HKSBT025',Size:25},{title:'HKSBT040',Size:40},{title:'HKSBT070',Size:70},{title:'HKSBT100',Size:100},{title:'HKSBT160',Size:160},{title:'HKSBT250',Size:250}].map((el) => ({...el, type: 'SBT'}));;
export const tankData = { RA, BSK, BEK, SBT };

export const motorData = [ 0.37, 0.55, 0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132, 160, 200];
export const freqData = [ 750, 1500, 1800, 3000 ];
const enginesHK = [{title: "HK63B4B3142-4IE2",power: 0.18,meta: "E-Motor 230/400V 0,18kW 1360U B34 IE2"},{title: "HK71A4B3142-4IE2",power: 0.25,meta: "E-Motor 230/400V 0,25kW 1380U B34 IE2"},{title: "HK71B4B3142-4IE2",power: 0.37,meta: "E-Motor 230/400V 0,37kW 1380U B34 IE2"},{title: "HK80M4B352-4IE3",power: 0.75,meta: "E-Motor 230/400V 0,75kW 1400U B35 IE3"},{title: "HK90S4B352-4IE3",power: 1.1,meta: "E-Motor 230/400V 1,1kW 1400U B35 IE3"},{title: "HK90L4B352-4IE3",power: 1.5,meta: "E-Motor 230/400V 1,5kW 1400U B35 IE3"},{title: "HKK407A90LB4IE3",power: 1.5,meta: "E-Motor 230/400V 1,5kW 1445U B34 IE3"},{title: "HK100LA4B352-4IE3",power: 2.2,meta: "E-Motor 230/400V 2,2kW 1455U B35 IE3"},{title: "HKK408A100LA4IE3",power: 2.2,meta: "E-Motor 230/400V 2,2kW 1445U B34 IE3"},{title: "HK100LB4B352-4IE3",power: 3,meta: "E-Motor 230/400V 3,0kW 1455U B35 IE3"},{title: "HK100LB4B52-4IE3",power: 3,meta: "E-Motor 230/400V 3,0kW 1455U B5 IE3"},{title: "HKK409A100LB4IE3",power: 3,meta: "E-Motor 230/400V 3,0kW 1420U B34 IE3"},{title: "HK112M4B354-6IE3",power: 4,meta: "E-Motor 400/690V 4,0kW 1460U B35 IE3"},{title: "HK132SB4B354-6IE3",power: 5.5,meta: "E-Motor 400/690V 5,5kW 1470U B35 IE3"},{title: "HK132SB4B54-6IE3",power: 5.5,meta: "E-Motor 400/690V 5,5kW 1470U B5 IE3"},{title: "HKK411A132SA4IE2",power: 5.5,meta: "Silnik-E 400/690V 5,5kW 1450U B3B14 IE2"},{title: "HK132M4B354-6IE2",power: 7.5,meta: "Silnik-E 400/690V 7,5kW 1465U B35 IE2"},{title: "HK132M4B354-6IE3",power: 7.5,meta: "E-MOTOR 400/690V 7,5KW 1465U B35 IE3"},{title: "HK160M4B354-6IE2",power: 11,meta: "Silnik-E 400/690V 11,0kW 1470U B35 IE2"},{title: "HK160M4B354-6IE3",power: 11,meta: "E-MOTOR 400/690V 11,0KW 1470U B35 IE3"},{title: "HK160M4B54-6IE2",power: 11,meta: "Silnik-E 400/690V 11,0kW 1470U B5 IE2"},{title: "HK160M4B54-6IE3",power: 11,meta: "E-MOTOR 400/690V 11,0KW 1470U B5 IE3"},{title: "HK160L4B354-6IE3",power: 15,meta: "E-MOTOR 400/690V 15,0KW 1475U B35 IE3"},{title: "HK180M4B354-6IE3",power: 18.5,meta: "E-MOTOR 400/690V 18,5KW 1470U B35 IE3"},{title: "HK200L4B354-6IE3",power: 30,meta: "E-MOTOR 400/690V 30,0KW 1475U B35 IE3"}];
const enginesK400 = [{title: "K-400B14-1.5-90L",power: 1.5,meta: "Silnik trójfazowy 400V; 1,5kW 1400obr."},{title: "K-400B14-2.2100L",power: 2.2,meta: "Silnik 3-faz. 400V; 2,2kW 1420obr/min;"},{title: "K-400B14-3-100L",power: 3,meta: "Silnik 3-faz. 400V; 3kW 1420obr/min;"},{title: "K-400B34-3-100L",power: 3,meta: "Silnik 3-faz. 400V; 3kW 1420obr/min; B34"},{title: "K-400B35-3-100L",power: 3,meta: "Silnik elektr. 3 kW; B35; 230/400V; 1450"},{title: "K-400B35-4-112M",power: 4,meta: "Silnik trójfazowy 400V; 4kW 1450obr/min"},{title: "K-400B35-5.5-132",power: 5.5,meta: "Silnik 3-faz. 400V; 5.5kW 1420obr/min; B"},{title: "K-400B35-7.5132M",power: 7.5,meta: "Silnik el. 400/690V 7,5KW 1465U B35 IE3"},{title: "K-400B5-11-132L",power: 11,meta: "Silnik prog. 400/690V 11kW 1465 B5 132L2"}];
const enginesK230 = [{title: "K-230B34-1.5-90L",power: 1.5,meta: "Siln.1-faz. 230V; 1,5kW 1370obr.B34; MYT"}];
const enginesACMotoren = [{title: "K-FCPA804/PHE",power: 1.1,meta: "SILNIK PROGRESYWNY 1,1KW"},{title: "K-FCA90LC4/PHE",power: 2.2,meta: "SILNIK PROGRESYWNY 2,2 Kw"},{title: "K-FCPA112MD-4IMB35",power: 7.5,meta: "SILNIK PROGRESYWNY 7,5 KW"},{title: "K-FCPA132MC4/HE",power: 9.2,meta: "Silnik 9,2kW progresywny"}];
const enginesT3A=[{title: "K-T3A90L1-4.B34",power: 1.5,meta: "Silnik trójfazowy T3A90L1-4,B34;1,5kW"},{title: "K-T3A100L2-4",power: 3,meta: "Silnik eleketr. 3 kW; B5; 230/400V"},{title: "K-T3A112M4B35-4KW",power: 4,meta: "Silnik elektryczny 4kW"},{title: "K-T3A-112M2-4",power: 5.5,meta: "Silnik prog. T3A-112M2-4; 5,5kW, B5, 145"},{title: "K-T3A-132M-4",power: 7.5,meta: "Silnik prog. T3A 132M-4, B35 , 7.5kW"},{title: "K-T3A-132M3-4",power: 11,meta: "Silnik prog. T3A 132M3-4, B35 ,11kW"}];

export const enginesData = [...enginesK400,...enginesK230,...enginesT3A,...enginesHK,...enginesACMotoren].map(({meta, title,  ...rest})=>({title,...rest,meta,mount:meta.slice(meta.indexOf('B'),meta.indexOf('B') + 3)|| title.slice(title.indexOf('B'),title.indexOf('B') + 3).trim()}));
// console.log('enginesData :>> ', enginesData);
export const engineMountData = ['B5', 'B35', 'B14', 'B34'];

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
].map(({title,...rest})=>({title:'HKOILAIR'+title, ...rest}));

export const filterData = [];

export const spoolTypes = ['G','GA', 'E','EA', 'J','JA', 'H','HA', 'L', 'M', 'U', 'W', 'F', 'P', 'A', 'B', 'C', 'D', 'Y', 'D1', 'Y1'];


export const pumpGroups = [[0.25,2.3],[1,9.8],[4.5,36],[20,87],[60,150]];
const gearPumpAPF = [
  {},
  {
    HK1PF21L01Z01LBF: { CC: 2.1, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring',shaft:'Ø7', pmax:200},
    HK1PF27L01Z01LBF: { CC: 2.7, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring',shaft:'Ø7', pmax:200},
    HK1PF37L01Z01LBF: { CC: 3.7, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring',shaft:'Ø7', pmax:200},
    HK1PF42L01Z01LBF: { CC: 4.2, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring',shaft:'Ø7', pmax:200},
    HK1PF58L01Z01LBF: { CC: 5.8, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring',shaft:'Ø7', pmax:160},
    HK1PF80L01Z01LBF: { CC: 8, in: 'G 3/8″ -19', out: 'Bore Ø 9 mm with O-Ring',shaft:'Ø7', pmax:160},
  },
  {
    HK2APF04F02Z41RSS: { CC: 4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF06F02Z41RSS: { CC: 6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF08F02Z41RSS: { CC: 8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF10F02Z41RSS: { CC: 10, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF14F02Z41RSS: { CC: 14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF16F02Z41RSS: { CC: 16, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF20F02Z41RSS: { CC: 20, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
    HK2APF25F02Z41RSS: { CC: 25, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
  },
  {
    HK3APF26F09Z05RSS: { CC: 26, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:200},
    HK3APF33F09Z05RSS: { CC: 33, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:200},
    HK3APF39F09Z05RSS: { CC: 39, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:200},
    HK3APF46F09Z05RSS: { CC: 46, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:200},
    HK3APF55F09Z05RSS: { CC: 55, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:200},
    HK3APF63F09Z05RSS: { CC: 63, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:180},
  }
];
//  flange: 'Ø36,5 European'
const gearPumpVivolo =[
  {},
  {},
  {
  HK2P4102EOOA: { CC: 4.2, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:260},
  HK2P4302EOOA: { CC: 6, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:260},
  HK2P4502EOOA: { CC: 8.4, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:260},
  HK2P4702EOOA: { CC: 10.8, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:260},
  HK2P4902EPOA: { CC: 14.4, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:250},
  HK2P5102EPOA: { CC: 16.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:230},
  HK2P5302EPOA: { CC: 19.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:210},
  HK2P5502EPOA: { CC: 22.8, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:200},
  HK2P5702EQPA: { CC: 26.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:170},
  HK2P6102EQPA: { CC: 30, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:160},
  HK2P5902EQPA: { CC: 34.2, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:150},
  HK2P6302EQPA: { CC: 39.6, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:140},
 },
 {
  HKX3P7002ABAA: { CC: 21.1, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:250},
  HKX3P7202ABAA: { CC: 26.06, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:250},
  HKX3P7402ABAA: { CC: 32.27, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:250},
  HKX3P7802ABAA: { CC: 38.47, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:250},
  HKX3P7902ABAA: { CC: 43.44, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:250},
  HKX3P8102ABAA: { CC: 50.88, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:230},
  HKX3P8302ACBA: { CC: 60.81, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:230},
  HKX3P8702ACBA: { CC: 74.46, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:180},
},
];
const gearPumpCasappa = [
  {},
  {},
  {
    HKKP2004D082E2L: { CC: 4.95, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:285},
    HKKP2006D082E2L: { CC: 6.61, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:285},
    HKKP2008D082E2L: { CC: 8.26, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:285},
    HKKP2011D082E2L: { CC: 11.23, in: 'LK Ø 30 mm / M 6', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:275},
    HKKP2014D082E2L: { CC: 14.53, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:265},
    HKKP2016D082E2L: { CC: 16.85, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:260},
    HKKP2020D082E2L: { CC: 21.14, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:210},
    HKKP2025D082E2L: { CC: 26.42, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:180},
    HKKP2031D082E2L: { CC: 33.03, in: 'LK Ø 40 mm / M 8', out: 'LK Ø 30 mm / M 6',shaft:'1:8', pmax:140}
  },
  {
    HKKP3027D083E3L: { CC: 26.7, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:310},
    HKKP3034D083E3L: { CC: 34.6, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:300},
    HKKP3038D083E3L: { CC: 39.3, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:300},
    HKKP3043D083E3L: { CC: 43.9, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:290},
    HKKP3051D083E3L: { CC: 51.8, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:270},
    HKKP3061D083E3L: { CC: 61.3, in: 'LK Ø 51 mm / M 10', out: 'LK Ø 40 mm / M 8',shaft:'1:8', pmax:240},
    HKKP3073D083E3L: { CC: 73.8, in: 'LK Ø 62 mm / M 10', out: 'LK Ø 51 mm / M 10',shaft:'1:8', pmax:220},
  }
];
const gearPumpRexroth = [
  {},
  {
  HKK10: { CC: 0.92,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 220},
  HKK11: { CC: 1.17,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 220},
  HKK12: { CC: 1.56,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 220},
  HKK13: { CC: 2.08,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 220},
  HKK14: { CC: 2.60,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 220},
  HKK15: { CC: 3.12,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 220},
  HKK16: { CC: 3.64,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax: 200},
  HKK17: { CC: 4.16,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax:180},
  HKK18: { CC: 4.94,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax:150},
  HKK19: { CC: 5.85,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: 'frez 5 x 10',pmax:120},
  HKK10CON: { CC: 0.92,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK11CON: { CC: 1.17,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK12CON: { CC: 1.56,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK13CON: { CC: 2.08,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK14CON: { CC: 2.6,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK15CON: { CC: 3.12,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK16CON: { CC: 3.64,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK17CON: { CC: 4.16,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK18CON: { CC: 4.94,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK19CON: { CC: 5.85,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK19ACON: { CC: 6.5,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 220 },
  HKK20CON: { CC: 7.54,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 210 },
  HKK21CON: { CC: 9.88,in: 'G 3/8″ -19',out: 'Bore Ø 9.25 mm with O-Ring',shaft: '1:8',pmax: 190 },
  },
  {},
  {} 
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
  HKPBA032L8051SF: { CC: 32, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA040L8051SF: { CC: 40, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA063L8051SF: { CC: 63, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA080L8051SF: { CC: 80, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA080L8064SF: { CC: 80, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA108L8051SF: { CC: 108, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
  HKPBA108L8064SF: { CC: 108, in: 'G1″', out: 'G1″', drain:'-', pmax:350, Regulator: '-'},
};
export const pumpData = {
  gears: [['VIVOLO', gearPumpVivolo], ['CASAPPA', gearPumpCasappa], ['REXROTH', gearPumpRexroth], ['CHINA', gearPumpAPF]]
  .flatMap(([maker, pumpsByGroup]) => pumpsByGroup
    .flatMap((el, group) => Object.entries(el)
      .map(([title, data]) => ({[title]: { ...data, maker, group }})))),
  piston:[['REXROTH', pistonPumpRexroth], ['KAWASAKI', pistonPumpKawasaki], ['DAIKIN', pistonPumpDaikin], ['HIDROCEL', pistonPumpPBA]]
  .flatMap(([maker, pumpsByGroup]) => Object.entries(pumpsByGroup)
    .map(([title, data]) => ({[title]: { ...data, maker }})))
};

export const coolerVBT =  Array.from(Array(11), (_, i) => i*5 + 20);
export const coolerVZ =  Array.from(Array(11), (_, i) => i*5 + 10);

export const bellhousingData = [
  {title:"HKPTRV16070468",group:0,size:71,shaft:"Ø7"},
  {title:"HKPTRV20080468",group:0,size:80,shaft:"Ø7"},
   
  {title:"HKPTRV16080448ZFV",group:1,size:71,shaft:"1:8"},
  {title:"HKPTRV20080448",group:1,size:80,shaft:"1:8"},
  {title:"HKPTRV20090448",group:1,size:90,shaft:"1:8"},
  {title:"HKPTRV250110448",group:1,size:100,shaft:"1:8"},
  {title:"HKPTRV250110448",group:1,size:112,shaft:"1:8"},
  
  {title:"HKPTRV20096446ZFV",group:2,size:80,shaft:"1:8"},
  {title:"HKPTRV20096446ZFV",group:2,size:90,shaft:"1:8"},
  {title:"HKPTRV250110446",group:2,size:100,shaft:"1:8"},
  {title:"HKPTRV250110446",group:2,size:112,shaft:"1:8"},
  {title:"HKPTRV300130446",group:2,size:132,shaft:"1:8"},
  {title:"HKPTRV350173446",group:2,size:160,shaft:"1:8"},
  
  {title:"HKPL3000102",group:2,size:132,shaft:"1:8"},
  {title:"HKPL3500105",group:2,size:160,shaft:"1:8"},
    
  {title:"HKPTRV250115465",group:3,size:100,shaft:"1:8"},
  {title:"HKPTRV250115465",group:3,size:112,shaft:"1:8"},
  {title:"HKPTRV300144465",group:3,size:132,shaft:"1:8"},
  {title:"HKPTRV350173465",group:3,size:160,shaft:"1:8"},
  {title:"HKPTRV350173465",group:3,size:180,shaft:"1:8"},
  
  {title:"HKPK3000208",group:3,size:132,shaft:"1:8"},
  {title:"HKPL3500106",group:3,size:160,shaft:"1:8"},
  {title:"HKPL3500106",group:3,size:180,shaft:"1:8"},
];

export const couplingData = [
  {title:"HKA1914714184AL",group:0,size:71,shaft:"Ø7"},
  {title:"HKA1914714184AL",group:0,size:80,shaft:"Ø7"},
  
  {title:"HKA1914N1AL",group:1,size:71,shaft:"1:8"},
  {title:"HKA1914N1AL",group:1,size:80,shaft:"1:8"},
  {title:"HKA192424N1AL",group:1,size:90,shaft:"1:8"},
  {title:"HKA24322860N1AL",group:1,size:100,shaft:"1:8"},
  {title:"HKA24322860N1AL",group:1,size:112,shaft:"1:8"},
  
  {title:"HKA2419N2AAL",group:2,size:80,shaft:"1:8"},
  {title:"HKA2419N2AAL",group:2,size:90,shaft:"1:8"},
  {title:"HKA243228N2AAL",group:2,size:100,shaft:"1:8"},
  {title:"HKA243228N2AAL",group:2,size:112,shaft:"1:8"},
  {title:"HKA28383860N2AAL",group:2,size:132,shaft:"1:8"},
  {title:"HKA384542N2AAL",group:2,size:160,shaft:"1:8"},
  {title:"HKA384542N2AAL",group:2,size:180,shaft:"1:8"},
  
  {title:"HKR2838N2A",group:2,size:132,shaft:"1:8"},
  {title:"HKR3842N2A",group:2,size:160,shaft:"1:8"},
  
  {title:"HKA243228N3AL",group:3,size:100,shaft:"1:8"},
  {title:"HKA243228N3AL",group:3,size:112,shaft:"1:8"},
  {title:"HKA28383860N3AL",group:3,size:132,shaft:"1:8"},
  {title:"HKA384542N3AL",group:3,size:160,shaft:"1:8"},
  {title:"HKR4248N3",group:3,size:180,shaft:"1:8"},
  
  {title:"HKR2838N3",group:3,size:132,shaft:"1:8"},
  {title:"HKR3842N3",group:3,size:160,shaft:"1:8"},
  {title:"HKR3842N3",group:3,size:180,shaft:"1:8"},
];

const spoolHansa = [
  {title:"HK4132080302C1Q",spool:"J",cetop:"3"},
  {title:"HK4131080601C1Q",spool:"JA",cetop:"3"},
  {title:"HK4132070302C1Q",spool:"G",cetop:"3"},
  {title:"HK4131070601C1Q",spool:"GA",cetop:"3"},
  {title:"HK4132030302C1Q",spool:"E",cetop:"3"},
  {title:"HK4131030601C1Q",spool:"EA",cetop:"3"},
  {title:"HK4132010302C1Q",spool:"H",cetop:"3"},
  {title:"HK4131010601C1Q",spool:"HA",cetop:"3"},
  {title:"HK4131520101C1Q",spool:"A",cetop:"3"},
  // {title:"###HK4131520201C1Q###",spool:"B",cetop:"3"},
  {title:"HK4131110101C1Q",spool:"C",cetop:"3"},
  {title:"HK4131510101C1Q",spool:"D",cetop:"3"},
  {title:"HK4131510201C1Q",spool:"Y",cetop:"3"},
  {title:"HK4137510902C1Q",spool:"D^",cetop:"3"},
]
const spoolEaton = [
  {title:"HKDG4V30CVMU24DC",spool:"H",cetop:"3"},
  {title:"HKDG4V30BVMU24DC",spool:"HA",cetop:"3"},
  {title:"HKDG4V32CVMU24DC",spool:"E",cetop:"3"},
  {title:"HKDG4V32BVMU24DC",spool:"EA",cetop:"3"},
  {title:"HKDG4V36CVMU24DC",spool:"J",cetop:"3"},
  {title:"HKDG4V36BVMU24DC",spool:"JA",cetop:"3"},
  {title:"HKDG4V38CVMU24DC",spool:"G",cetop:"3"},
  {title:"HKDG4V38BLVMU24DC",spool:"GA",cetop:"3"},
  {title:"HKDG4V322AVMU24DC",spool:"A",cetop:"3"},
  {title:"HKDG4V322ALVMU24DC",spool:"B",cetop:"3"},
  {title:"HKDG4V32AVMU24DC",spool:"D",cetop:"3"},
  {title:"HKDG4V32ALVMU24DC",spool:"Y",cetop:"3"},
  {title:"HKDG4V32NVMU24DC",spool:"D^",cetop:"3"},
  {title:"HKDG4V37CVMU24DC",spool:"M",cetop:"3"}
];
const spoolRexroth = [
  {title:"D1VW004CNJW",spool:"J",cetop:"3"},
  {title:"D1VW004ENJW",spool:"JA",cetop:"3"},
  {title:"D1VW009CNJW",spool:"G",cetop:"3"},
  {title:"D1VW009KNJW",spool:"GA",cetop:"3"},
  {title:"D1VW001CNJW",spool:"E",cetop:"3"},
  {title:"D1VW001ENJW",spool:"EA",cetop:"3"},
  {title:"D1VW002CNJW",spool:"H",cetop:"3"},
  {title:"D1VW002ENJW",spool:"HA",cetop:"3"},
  {title:"D1VW208BNJW",spool:"A",cetop:"3"},
  {title:"D1VW208HNJW",spool:"B",cetop:"3"},
  {title:"D1VW030BNJW",spool:"C",cetop:"3"},
  {title:"D1VW020BNJW",spool:"D",cetop:"3"},
  {title:"D1VW020HNJW",spool:"Y",cetop:"3"},
  {title:"D1VW020DNJW",spool:"D^",cetop:"3"},
];
export const spoolData = [
  ...spoolHansa,
  ...spoolEaton,
  ...spoolRexroth,
  ...spoolHansa.map(({title,cetop,...rest})=>({title:title.replace('HK413','HK423'),...rest,cetop:5})),
  ...spoolEaton.map(({title,cetop,...rest})=>({title:title.replace('HKDG4V3','HKDG4V5'),...rest,cetop:5})),
];

// const d = 
// [{title:"D1VW001CNJW",article:"K-D1VW001CNJW",description:"Zawór magrozdz4/3 WZ6 bez cewki"},
// {title:"D1VW001CNJW",article:"K-VED1VW001CNJW",description:"n.v. => HK4132030302C1Q"},
// {title:"D1VW001CNJW",article:"K-VED1W001CNJW",description:"n.v. => HK4132030302C1Q"},
// {title:"D1VW003FNJW",article:"K-VED1VW003FNJW",description:"4/2-Wegeventil, 24VDC"},
// {title:"D1VW035CNJW",article:"K-VED1VW035CNJW",description:"Wegeventil D1VW035CNJW91"},
// {title:"D1VW006KNJW",article:"K-VED1VW006KNJW",description:"4/2-Wegeventil, NG6 24VDC"},
// {title:"D1VW101BNJW",article:"K-D1VW101BNJW",description:"4/2 Wegeventil"},
// {title:"D1VW011CNJW",article:"K-VED1VW011CNJW",description:"4/3-Wegeventil NG6 24 DC"},
// {title:"D1VW020DNJW",article:"K-VED1VW020DNJW",description:"n.v. --> siehe HK4137510902C1Q"},
// {title:"D1VW031CNJW",article:"K-VED1VW031CNJW",description:"Wegeventil NG6 24Volt"},
// {title:"D1VW004CNJW",article:"HK4132080302C1Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW004KNJW",article:"K-VED1VW004KNJW",description:"4/2-Wegeventil NG6 24 VDC"},
// {title:"D1VW021CNJW",article:"K-VED1VW021CNJW",description:"4/3-Wegeventil NG6 24VDC"},
// {title:"D1VW003CNJW",article:"K-VED1VW003CNJW",description:"Wegeventil D1VW003CNJW, 24VDC"},
// {title:"D1VW022CNJW",article:"K-VED1VW022CNJW",description:"4/3-Wegeventil NG6 24VDC"},
// {title:"D1VW208BNJW",article:"K-VED1VW208BNJW",description:"4/2-WV 350bar 80l/mim neg.Überdeckung"},
// {title:"D1VW026BNJW",article:"K-VED1VW026BNJW",description:"4/2-Wegeventil, NG6"},
// {title:"D1VW014CNJW",article:"K-VED1VW014CNJW",description:"4/3 Wegeventil D1VW014CNJW   NG6"},
// {title:"D1VW20HNJW",article:"K-VED1VW20HNJW",description:"4/2 wegeventil NG 6, 24 VDC"},
// {title:"D1VW004CNJW",article:"K-VED1VW004CNJW",description:"4/3-Wegeventil 24 VDC"},
// {title:"D1VW001CNJW",article:"K-VED1VW001CNJW",description:"4/3-Wegeventil NG6 24DC"},
// {title:"D1VW022ENJW",article:"K-VED1VW022ENJW",description:"4/3-Wegeventil NG6 24VDC"},
// {title:"D1VW002ENJW",article:"HK4131010601C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW015CNJW",article:"K-VED1VW015CNJW",description:"4/3-Wegeventil NG6 24VDC"},
// {title:"D1VW008CNJW",article:"K-VED1VW008CNJW",description:"4/3-Wegeventil Ng6 24VDC"},
// {title:"D1VW020BNJW",article:"K-VED1VW020BNJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW001FNJW",article:"K-VED1VW001FNJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW002KNJW",article:"K-VED1VW002KNJW",description:"4/3 Wegeventil NG6 24VDC"},
// {title:"D1VW4CNJW",article:"K-VED1VW4CNJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW9ENJW",article:"K-VED1VW9ENJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW020DNJW",article:"K-D1VW020DNJW",description:""},
// {title:"D1VW101DNJW",article:"K-D1VW101DNJW",description:"Filterelement"},
// {title:"D1VW002ENJW",article:"K-VED1VW002ENJW",description:"Valv.Dir.Ele.D1VW002ENJW"},
// {title:"D1VW061CNJW",article:"K-VED1VW061CNJW",description:"4/3 Wegeventil NG06 24VDC"},
// {title:"D1VW004ENJW",article:"K-4/2WEGEMAGNETVEN",description:"4/2 Wege-Magnetventil NG6"},
// {title:"D1VW002CNJW",article:"K-VED1VW002CNJW",description:"4/3 Wegeventil NG6 24VDC"},
// {title:"D1VW004FNJW",article:"K-VED1VW004FNJW",description:"4/3 Wegeventil NG6 24 VDC"},
// {title:"D1VW002ENJW",article:"K-VED1VW002ENJW",description:"4/2-Wegev. NG6 24VDC => HK4131010601C1Q"},
// {title:"D1VW004CNJW",article:"K-VED1VW004CNJW",description:"4/3-Wegeventil 24 VDC => HK4132080302C1Q"},
// {title:"D1VW004CNJW",article:"K-VED1VW004CNJW",description:"n.v. => HK4132080302C1Q"},
// {title:"D1VW020DNJW",article:"HK4137510902C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW001CNJW",article:"K-VED1W001CNJW",description:"4/3 Wege-Magnetventil"},
// {title:"D1VW008KNJW",article:"K-VED1VW008KNJW",description:"4/2-Wegeventil NG6 24VDC"},
// {title:"D1VW008CNJW",article:"K-VED1VW008CNJW",description:"4/3-Wegeventil NG6 24VDC"},
// {title:"D1VW020DNJW",article:"K-VED1VW020DNJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW002ENJW",article:"HK41310106011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW001ENJW",article:"HK4131030601C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW001ENJW",article:"HK41310306011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW009KNJW",article:"HK4131070601C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW009KNJW",article:"HK41310706011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW004ENJW",article:"HK4131080601C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW004ENJW",article:"HK41310806011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW030BNJW",article:"HK4131110101C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW030BNJW",article:"HK41311101011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW020BNJW",article:"HK4131510101C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW020BNJW",article:"HK41315101011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW020HNJW",article:"HK4131510201C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW020HNJW",article:"HK41315102011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW020DNJW",article:"K-D1VW020DNJW1",description:"Ventil"},
// {title:"D1VW020HNJW",article:"K-D1VW020HNJW",description:"Ventil"},
// {title:"D1VW001FNJW",article:"K-VED1VW001FNJW",description:"4/2-Wegeventil 24 VDC (K-VEDHE067124DC)"},
// {title:"D1VW001CNJW",article:"K-VED1VW001CNJW",description:"4/3-Wegeventil NG6, 24 Volt DC"},
// {title:"D1VW001CNJW",article:"HK4132030302C1Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW076KNJW",article:"K-VED1VW076KNJW",description:"4/2-Wegeventil NG6 24VDC"},
// {title:"D1VW078ENJW",article:"K-VED1VW078ENJW",description:"4/2-Wegeventil NG6 24VDC"},
// {title:"D1VW004CNJW",article:"K-VED1VW4CNJW75",description:"Wegeventil"},
// {title:"D1VW026HNJW",article:"K-VED1VW026HNJW",description:"4/2-Wegeventil, NG6"},
// {title:"D1VW004CNJW",article:"K-D1VW004CNJW",description:"4/3 Valve NG6 ABT"},
// {title:"D1VW004CNJW",article:"HK41320803021Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW001FNJW",article:"K-D1VW001FNJW",description:"4/2 magn. vožtuvas NG6 24VDC (Parker)"},
// {title:"D1VW006CNJW",article:"K-VED1VW006CNJW",description:"4/3 Wegeventil NG6 24VDC"},
// {title:"D1VW083BNJW",article:"K-VED1VW083BNJW",description:"4/2 Wegeventil  NG6 Sonderschieber 24VDC"},
// {title:"D1VW004ENJW",article:"K-VED1VW004ENJW",description:"4/2-Wegeventil NG6 24VDC"},
// {title:"D1VW001MNJW",article:"K-VED1VW001MNJW",description:"4/2 Wegeventil NG 6, 24 VDC"},
// {title:"D1VW020HNJW",article:"K-VED1VW020HNJW",description:"Wegeventil"},
// {title:"D1VW009CNJW",article:"K-VED1VW009CNJW",description:"4/3-Wegeventil NG6 24VDC"},
// {title:"D1VW104KNJW",article:"K-VED1VW104KNJW",description:"3/2-Wegeventil, Sonderschieber"},
// {title:"D1VW001MNJW",article:"K-VED1VW001MNJW",description:"4/2 wegeventil NG 6, 24 VDC"},
// {title:"D1VW20BNJW",article:"K-VED1VW20BNJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW002KNJW",article:"K-VED1VW002KNJW",description:"4/2 Wegeventil NG6 24VDC"},
// {title:"D1VW011BNJW",article:"K-VED1VW011BNJW",description:"4/2 Wegeventil"},
// {title:"D1VW011DNJW",article:"K-VED1VW011DNJW",description:"4/2 Wegeventil"},
// {title:"D1VW101BNJW",article:"K-VED1VW101BNJW",description:"4/2 Wegeventil"},
// {title:"D1VW101DNJW",article:"K-VED1VW101DNJW",description:"4/2 Wegeventil"},
// {title:"D1VW021KNJW",article:"K-D1VW021KNJW",description:"4/2 Wege Ventil NG 6 24 VDC"},
// {title:"D1VW208BNJW",article:"K-D1VW208BNJW",description:"4/2 Wege Ventil NG 6 24 VDC"},
// {title:"D1VW1CNJW",article:"K-VED1VW1CNJW",description:"4/3-Wegeventil"},
// {title:"D1VW105KNJW",article:"K-VED1VW105KNJW",description:"4/2 Wegeventil NG6 24VDC"},
// {title:"D1VW106CNJW",article:"K-VED1VW106CNJW",description:"4/3-Wegeventil D1VW106CNJW, 24VDC"},
// {title:"D1VW003KNJW",article:"K-VED1VW003KNJW",description:"4/2-Wegeventil NG6 24VDC"},
// {title:"D1VW002KNJW",article:"K-VED1VW002KNJW",description:"4/2 ventil NG6 24VDC"},
// {title:"D1VW004ENJW",article:"K-4/2WEGEMAGNETVEN",description:"n.v. => HK4131080601C1Q"},
// {title:"D1VW020BNJW",article:"K-HKVED1VW020BNJW",description:"n.v. => HK4131510101C1Q"},
// {title:"D1VW020DNJW",article:"K-VED1VW020DNJW",description:"n.v. => HK4137510902C1Q"},
// {title:"D1VW020HNJW",article:"K-D1VW020HNJW",description:"n.v. => HK4131510201C1Q"},
// {title:"D1VW020HNJW",article:"K-VED1VW020HNJW",description:"n.v. => HK4131510201C1Q"},
// {title:"D1VW020BNJW",article:"K-HKVED1VW020BNJW",description:"Wegeventil NG 6"},
// {title:"D1VW081FNJW",article:"K-VED1VW081FNJW",description:"4/2-Wegeventil NG6, 24VDC"},
// {title:"D1VW004CNJW",article:"K-D1VW004CNJW",description:"Wegeventil 24V= 210 bar 1,25 A"},
// {title:"D1VW208BNJW",article:"HK4131520101C1Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW208BNJW",article:"HK41315201011Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW002CNJW",article:"HK4132010302C1Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW002CNJW",article:"HK41320103021Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW001CNJW",article:"HK41320303021Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW009CNJW",article:"HK4132070302C1Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW009CNJW",article:"HK41320703021Q",description:"Zawór magrozdz4/3 WZ6 24VDC"},
// {title:"D1VW020DNJW",article:"HK41375109021Q",description:"Zawór magrozdz4/2 WZ6 24VDC"},
// {title:"D1VW002ENJW",article:"K-VED1VW002ENJW",description:"4/2-Wegeventil NG6 24VDC"},
// {title:"D1VW009ENJW",article:"K-VED1VW009ENJW",description:"4/2-Wegeventil 24 VDC"},
// {title:"D1VW008FNJW",article:"K-VED1VW008FNJW",description:"4/2 Wegeventil NG6"},
// {title:"D1VW055CNJW",article:"K-VED1VW055CNJW",description:"4/3-Wegeventil, Sonderschieber"},
// {title:"D1VW006KNJW",article:"K-VED1VW006KNJW",description:"4/3-Wegeventil, NG6"},
// {title:"D1VW026BNJW",article:"K-VED1VW026BNJW",description:"4/3-Wegeventil, NG6"}]

// const set1 = new Set();
// console.log(d.map(({title})=>spoolRexroth.some(el=> el.title === title) || console.log(title)))
// spoolRexroth.forEach(({title})=>set1.add(title));
// d.forEach(({title})=>{
//   if (set1[title]) console.log(title);
//   else set1.add(title)
// })