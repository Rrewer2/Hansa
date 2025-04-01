const textData = {
  D: ['D', 'mm'],
  d: ['d', 'mm'],
  L: ['Skok', 'mm'],
  z: ['Iłość'],
  spool: ['Suwak'],
  mount: ['Mocowania'],
  form: ['Forma'],
  Q: ['Q', 'L/min'],
  p: ['ρ', 'bar'],
  n: ['ν', 'min⁻¹'],
  DR2type: ['Typ bloku'],
  P: ['Moc', 'kW'],
  I: ['Prąd', 'A'],
  VFU: ['VFU', 'cm³'],
  pipeP: ['Rura P'],
  pipeT: ['Rura T'],
  pipeS: ['Rura S'],
  VD: [ 'Nadtłokowa V', 'L'],
  Vd: [ 'Podtłokowa V', 'L'],
  tOut: [ 'Czas wysuw', 's'],
  tIn: [ 'Czas wsuw', 's'],
  tC: [ 'Czas cykl', 's'],
  FOut: [ 'Siła wysuw', 'kG'],
  FIn: [ 'Siła wsuw', 'kG'],
  vOut: [ 'Wysuw', 'mm/s'],
  vIn: [ 'Wsuw', 'mm/s'],
  wall: [ 'Ścianka', 'mm'],
  QBack: [ 'Powrót oleju', 'l/min'],
  tank: [ 'Pojemność zbiornika', 'L'],
  gears: ['Zębata'],
  piston: ['Wiełotłoczkowa']
};
export const text = (key) => textData[key].join(', ');