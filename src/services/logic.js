import { initialValues, standartDiameters } from "./data";

export const initialObject = {
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
};
