const textData = {
  D: ['D', 'mm'],
  d: ['d', 'mm'],
  L: ['Skok', 'mm'],
  z: ['Iłość'],
  spool: ['Suwak'],
  mountA: ['Mocowanie rury'],
  mountB: ['Mocowanie pręta'],
  form: ['Forma'],
  Q: ['Wydajność', 'L/min'],
  p: ['Ciśnienie', 'bar'],
  n: ['Obroty', 'min⁻¹'],
  mount: ['Montaż'],
  DR2type: ['Typ bloku'],
  P: ['Moc', 'kW'],
  I: ['Prąd', 'A'],
  VFU: ['VFU', 'cm³'],
  k: ['Ratio'],
  pipeP: ['Rura P'],
  pipeT: ['Rura T'],
  pipeS: ['Rura S'],
  VD: [ 'Nadtłokowa', 'L'],
  Vd: [ 'Podtłokowa', 'L'],
  tOut: [ 'Czas wysuw', 'sec'],
  tIn: [ 'Czas wsuw', 'sec'],
  tC: [ 'Czas cykl', 'sec'],
  FOut: [ 'F wysuw', 'kG'],
  FIn: [ 'F wsuw', 'kG'],
  vOut: [ 'Wysuw', 'mm/sec'],
  vIn: [ 'Wsuw', 'mm/sec'],
  wall: [ 'Ścianka', 'mm'],
  Qback: [ 'Powrót oleju', 'L/min'],
  Qmax: [ 'Powrót oleju max', 'L/min'],
  // tank: [ 'Pojemność zbiornika', 'L'],
  gears: ['Zębata'],
  piston: ['Wiełotłoczkowa'],
  title: ['Nazwa'],
  meta: ['Opis'],
  power: ['Moc', 'kW'],
  Pv: ["Moc strat", "kW"],
  P01: ['Wydajność chłodzenia', "kW/K"],
  performance: ['Wydajność chłodzenia', "kW/K", "min÷max"],
  flow: ["Przepływ", "min÷max"],
  η: [ "Sprawność pompy", "%"],
  vBT: ["Optymalna T oleju", "°C"],
  vZ: ["T otoczenia", "°C"],
  Size: ['Pojemność zbiornika', 'L'],
  CoolingCapacity: ['Wydajność chłodzenia', "kW/K"],
  type: ['Typ zbiornika'],
  tankMin : ['Minimalna pojemność', 'L'],
  pumpType: ['Typ pompy'],
  throttle: ['HKHQ'],
  check: ['HKHR'],
  directPress: ['HKHMP'],
};
export const text = (key) => textData[key] ? textData[key].join(', ') : key;