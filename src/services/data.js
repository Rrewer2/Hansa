export const initialValues = { i: 1, D: 100, d: 60, L: 300, Q: 12, P: 200, aF: 40, bF: 80, DF: 20, η: 70, vBT: 45, vz: 20, z: 4,};

export const g = 9.80665;

export const separator = " | ";

export const standartDiameters = [ 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 63, 60, 56, 55, 50, 45, 40, 36, 35, 32, 30, 28, 25, 22, 20, 16
 ];
export const bucklingSafety = 5;

export const tankData = { RA: [ 3, 6, 12, 20, 30, 44, 70, 130, // { // Size: 3, // CoolingCapacity: 0.16, // }, // { // Size: 6, // CoolingCapacity: 0.36, // }, // { // Size: 12, // CoolingCapacity: 0.6, // }, // { // Size: 20, // CoolingCapacity: 0.72, // }, // { // Size: 30, // CoolingCapacity: 0.92, // }, // { // Size: 44, // CoolingCapacity: 1.04, // }, // { // Size: 70, // CoolingCapacity: 1.16, // }, // { // Size: 130, // CoolingCapacity: 2.1, // }, 
 ], BSK: [40, 63, 100, 160, 200, 250, 300, 400], SBT: [6, 12, 25, 40, 70, 100, 160, 250], BEK: [12, 20, 35, 50, 60, 75, 100, 150, 225, 300
],
};

export const motorData = [ 0.37, 0.55, 0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132, 160, 200];

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

export const freqData = [ 750, 1500, 1800, 3000 ];
export const engineMountData = ['B35', 'B5', 'B34'];

export const pumpData = { HK2P4102EOOA: { CC: '4,2', LITRY: '6,0', dIn: '30', in: 'WDA112', dOut: '30', out: 'WDS112', pmax:185 },
 HK2P4302EOOA: { CC: '6', LITRY: '8,6', dIn: '30', in: 'WDA112', dOut: '30', out: 'WDS112', pmax:185 },
 HK2P4502EOOA: { CC: '8,4', LITRY: '12,0', dIn: '30', in: 'WDA112', dOut: '30', out: 'WDS112', pmax:185  },
 HK2P4702EOOA: { CC: '10,8', LITRY: '15,4', dIn: '30', in: 'WDA112', dOut: '30', out: 'WDS112', pmax:185  },
 HK2P4902EPOA: { CC: '14,4', LITRY: '20,6', dIn: '40', in: 'WDA234', dOut: '30', out: 'WDS112', pmax:185  },
 HK2P5102EPOA: { CC: '16,8', LITRY: '24,0', dIn: '40', in: 'WDA234', dOut: '30', out: 'WDS112', pmax:185  },
 HK2P5302EPOA: { CC: '19,2', LITRY: '27,5', dIn: '40', in: 'WDA234', dOut: '30', out: 'WDS112', pmax:185 },
 HK2P5502EPOA: { CC: '22,8', LITRY: '32,6', dIn: '40', in: 'WDA234', dOut: '30', out: 'WDS112', pmax:185 },
 HK2P5702EQPA: { CC: '26,2', LITRY: '37,5', dIn: '40', in: 'WDA234', dOut: '40', out: 'WDS234', pmax:185  },
 HK2P6102EQPA: { CC: '30', LITRY: '42,9', dIn: '40', in: 'WDA234', dOut: '40', out: 'WDS234', pmax:185  },
 HK2P5902EQPA: { CC: '34,2', LITRY: '48,9', dIn: '40', in: 'WDA234', dOut: '40', out: 'WDS234', pmax:185  },
 HK2P6302EQPA: { CC: '39,6', LITRY: '56,6', dIn: '40', in: 'WDA234', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P7002ABAA: { CC: '21,1', LITRY: '30,2', dIn: '51', in: 'WDA334', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P7202ABAA: { CC: '26,06', LITRY: '37,3', dIn: '51', in: 'WDA334', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P7402ABAA: { CC: '32,27', LITRY: '46,1', dIn: '51', in: 'WDA334', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P7802ABAA: { CC: '38,47', LITRY: '55,0', dIn: '51', in: 'WDA334', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P7902ABAA: { CC: '43,44', LITRY: '62,1', dIn: '51', in: 'WDA334', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P8102ABAA: { CC: '50,88', LITRY: '72,8', dIn: '51', in: 'WDA334', dOut: '40', out: 'WDS234', pmax:185  },
 HKX3P8302ACBA: { CC: '60,81', LITRY: '87,0', dIn: '62', in: '-', dOut: '51', out: 'WDS3100', pmax:185 },
 
 HKKP2004D082E2L: { CC: '4,95', LITRY: '7,1', dIn: '30', in: 'F1', dOut: '30', out: 'F1', pmax:320 },
 HKKP2006D082E2L: { CC: '6,61', LITRY: '9,5', dIn: '30', in: 'F1', dOut: '30', out: 'F1', pmax:320},
 HKKP2008D082E2L: { CC: '8,26', LITRY: '11,8', dIn: '30', in: 'F1', dOut: '30', out: 'F1', pmax:320},
 HKKP2011D082E2L: { CC: '11,23', LITRY: '16,1', dIn: '30', in: 'F1', dOut: '30', out: 'F1', pmax:320},
 HKKP2014D082E2L: { CC: '14,53', LITRY: '20,8', dIn: '40', in: 'F2', dOut: '30', out: 'F1', pmax:320},
 HKKP2016D082E2L: { CC: '16,85', LITRY: '24,1', dIn: '40', in: 'F2', dOut: '30', out: 'F1', pmax:320},
 HKKP2020D082E2L: { CC: '21,14', LITRY: '30,2', dIn: '40', in: 'F2', dOut: '30', out: 'F1', pmax:320},
 HKKP2025D082E2L: { CC: '26,42', LITRY: '37,8', dIn: '40', in: 'F2', dOut: '30', out: 'F1', pmax:320},
 HKKP2031D082E2L: { CC: '33,03', LITRY: '47,2', dIn: '40', in: 'F2', dOut: '30', out: 'F1', pmax:320 }
 };