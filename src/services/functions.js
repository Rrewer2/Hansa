import { separator } from "./data";

export const dif = (D, d) => sqr(D) / (sqr(D) - sqr(d));

const isString = variable => typeof variable === "string";

export const round = (num, i = 2) =>
    isString(num) ? num : num >= 0 ? +num?.toFixed(i) ?? "-" : "-";

export const sqr = (a, b) => (b === undefined ? (Math.PI * a ** 2) / 4 : a * b);

export const titleFromArray = elem =>
    Array.isArray(elem) ? elem.join(separator) : elem;

export const getResults = elem =>
    Array.isArray(elem)
        ? elem.map(item => round(item())).join(separator)
        : round(elem());

export const parenthesis = smt => (smt ? `(${smt})` : "");
