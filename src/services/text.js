const textData = {
  D: ['D', 'mm'],
  d: ['d', 'mm'],
  L: ['Skok', 'mm'],
  z: ['Iłość'],
  spool: ['Suwak'],
  mountA: ['Mocowanie rura'],
  mountB: ['Mocowanie pręt'],
  form: ['Forma'],
  Q: ['Q', 'L/min'],
  p: ['ρ', 'bar'],
  n: ['ν', 'min⁻¹'],
  mount: ['Montaż'],
  DR2type: ['Typ bloku'],
  P: ['Moc', 'kW'],
  I: ['Prąd', 'A'],
  VFU: ['VFU', 'cm³'],
  k: ['Ratio'],
  pipeP: ['Rura P'],
  pipeT: ['Rura T'],
  pipeS: ['Rura S'],
  VD: [ 'Nadtłokowa V', 'L'],
  Vd: [ 'Podtłokowa V', 'L'],
  tOut: [ 'Czas wysuw', 's'],
  tIn: [ 'Czas wsuw', 's'],
  tC: [ 'Czas cykl', 's'],
  FOut: [ 'F wysuw', 'kG'],
  FIn: [ 'F wsuw', 'kG'],
  vOut: [ 'Wysuw', 'mm/s'],
  vIn: [ 'Wsuw', 'mm/s'],
  wall: [ 'Ścianka', 'mm'],
  Qback: [ 'Powrót oleju', 'l/min'],
  Qmax: [ 'Powrót oleju max', 'l/min'],
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
  pumpType: ['Typ pompy']
};
export const text = (key) => textData[key] ? textData[key].join(', ') : key;