<script setup>
import { computed } from "vue";
import { text } from "../services/text";
import CopyText from "./Selector/CopyText.vue";

const { project, order, HKSH } = defineProps(["project", "order", "HKSH"]);

const description = computed(() => {
  const arr = [];
  arr.push(text(`Siłownik dwustronnego działania:`));
  arr.push(text(`Średnica tłoka: ${HKSH.D} [mm]`));
  arr.push(text(`Średnica tłoczyska: ${HKSH.d} [mm]`));
  arr.push(text(`Skok: ${HKSH.L} [mm]`));
  arr.push(text(`Przyłącza olejowe: ${order?.naba0?.nabaData?.F || "-"}`));
  arr.push(text(`Mocowanie od strony tłoczyska: ${HKSH.mountB}`));
  arr.push(text(`Mocowanie od strony denka: ${HKSH.mountB}`));
  arr.push(text(`Ciśnienie robocze: 200 [bar]`));
  arr.push(text(`Tłumienie: bez tłumienia`));
  arr.push(text(`Olej hydrauliczny: HLP/HVLP zgodnie z DIN 51524; ISO-VG 22 do 68`));
  arr.push(text(`Kolor farby: czarny`));
  
  arr.push(text(`Specyfikacja systemu uszczelnień:`));
  arr.push(text(`(x) Standardowy: PU/NBR dla HLP (-25ºC do +80ºC)`));
  arr.push(text(`() Niskie tarcie: PTFE (-25ºC do +80ºC)`));
  arr.push(text(`() Odporny na temperaturę: VITON (-20ºC do +160ºC)`));
  
  arr.push(text(`Materiał tłoczyska:`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "CK45" ? "x" : ""}) Prosty: Ck45`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "CK45IH" ? "x" : ""}) Prosty hartowany: Ck45 IH`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "20MNV6" ? "x" : ""}) Standardowy: 20MnV6`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "CR2" ? "x" : ""}) Podwójny chrom: 20MnV6`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "AISI304" ? "x" : ""}) Stal nierdzewna: AISI 304`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "42CRMO4" ? "x" : ""}) Ulepszony: 42CrMo4 U`));
  arr.push(text(`(${order?.pret0?.pretData?.material === "42CRMO4UH" ? "x" : ""}) Ulepszony hartowany: 42CrMo4 UH`));
  
  arr.push(text(`Materiał cylindra:`));
  arr.push(text(`(${order?.rura0?.title?.includes("H8") ? "x" : ""}) Standardowy H8: St 52.3`));
  arr.push(text(`(${order?.rura0?.title?.includes("H9") ? "x" : ""}) Standardowy H9: St 52.3`));
  arr.push(text(`(${order?.rura0?.title?.includes("AISI") ? "x" : ""}) Stal nierdzewna H8: AISI 304`));
  
 return arr;
});
</script>

<template>
  <article>
    Copy text<CopyText :text="description.join('\n')" />
    <h5 v-for="(item, i) in description" :key="i">{{ item }}</h5>
  </article>
</template>

<style scoped>
h5 {
  text-align: left;
  font-size: 1rem;
}
</style>
