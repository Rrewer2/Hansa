<script setup>
import { dlaw, tlok, dno, ucho, wapr, naba, prets } from "../../services/data";
import { HKSHTitle, round } from "../../services/functions";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order"]);
const filteredDlaw = (D, d) => dlaw.filter(({ AL, S }) => +AL === D && +S === d);
const filteredTlok = (D) => tlok.filter(({ AL }) => +AL === D);
const filteredDno = (D) => dno.filter(({ AL }) => +AL === D);
const filteredWapr = (D) => wapr.filter(({ F }) => +F.match(/[\d.]+/)?.[0] < D && +F.match(/[\d.]+/)?.[0] > 0.75*D);
const filteredUcho = (D) => ucho.filter(({ d1 }) => +d1 > D && +d1 < D*1.2);
const filteredNaba = () => naba;
const MW = 10;
const pret = ({ HKSH: { d, L }, i, k }) => {
  const getOrder = (item) => {
    const a = order[`${item}${i + 1} ${k + 1}`];
    return a?.[`${item}${i + 1} ${k + 1}Data`] || 0;
  };
  return ["20MNV6", "CK45", "CK45IH", "42CRMO4IH", "42CRMO4UH"].map((el) => ({
    title: "K-" + d + "CR-" + el,
    length: L + +getOrder("dlaw").L + +getOrder("tlok").L + +getOrder("tlok").p + +getOrder("wapr").LF + MW,
  }));
};
const rura = ({ HKSH: { D, L }, i, k }) => {
  const getOrder = (item) => {
    const a = order[`${item}${i + 1} ${k + 1}`];
    return a?.[`${item}${i + 1} ${k + 1}Data`] || 0;
  };
  return prets.filter(({ DH8 }) => DH8 === D).map((el) => ({ ...el, length: L + +getOrder("dlaw").L1 + +getOrder("tlok").L + +getOrder("tlok").p + +getOrder("dno").S1, }));
};
</script>

<template>
  <div v-for="(unit, i) in project[0].unit">
    <div v-for="(HKSH, k) in unit.HKSH">
      <h2>{{ HKSHTitle(HKSH) }}</h2>
      /{{ i + 1 }}-{{ k + 1 }}
      <SmthSelector v-bind="{ meta, order }" :Name="`dlaw${i + 1} ${k + 1}`" index="" :logic="() => filteredDlaw(HKSH.D, HKSH.d)" />
      <SmthSelector v-bind="{ meta, order }" :Name="`tlok${i + 1} ${k + 1}`" index="" :logic="() => filteredTlok(HKSH.D)" />
      <SmthSelector v-bind="{ meta, order }" :Name="`dno${i + 1} ${k + 1}`" index="" :logic="() => filteredDno(HKSH.D)" />
      <SmthSelector v-bind="{ meta, order }" :Name="`wapr${i + 1} ${k + 1}`" index="" :logic="() => filteredWapr(HKSH.D)" />
      <SmthSelector v-bind="{ meta, order }" :Name="`ucho${i + 1} ${k + 1}`" index="" :logic="() => filteredUcho(HKSH.D)" />
      <SmthSelector v-bind="{ meta, order }" :Name="`naba${i + 1} ${k + 1}`" index="" :logic="() => filteredNaba()" />
      <SmthSelector v-bind="{ meta, order }" :Name="`pret${i + 1} ${k + 1}`" index="" :logic="() => pret({ HKSH, i, k })" />
      <SmthSelector v-bind="{ meta, order }" :Name="`rura${i + 1} ${k + 1}`" index="" :logic="() => rura({ HKSH, i, k })" />
    </div>
  </div>
</template>

<style scoped></style>
