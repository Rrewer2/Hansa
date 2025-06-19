import { messages } from "../locales";
import { inject } from "vue";

export const text = (key, meta) => {
  const lang = meta
    ? meta.lang
    : inject("meta", { value: { lang: "en" } }).value.lang;
  const word = messages[lang][key];
  if (word) return word.join(", ");
  return key;
};
