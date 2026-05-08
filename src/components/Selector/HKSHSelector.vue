<script setup>
import { dlaw, tlok, dno, ucho, wapr, naba, prets } from "../../services/data";
import { HKSHTitle, round } from "../../services/functions";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";
import OrderHKSH from "../OrderHKSH.vue";
import DescriptionHKSH from "../DescriptionHKSH.vue";

const { HKSH, i, meta, orderHKSH } = defineProps(["HKSH", "i", "meta", "orderHKSH"]);
const filteredDlaw = (D, d) => dlaw.filter(({ AL, S }) => +AL === D && +S === d);
const filteredTlok = (D) => tlok.filter(({ AL }) => +AL === D);
const filteredDno = (D) => dno.filter(({ AL }) => +AL === D);
const filteredWapr = (d) => wapr.filter(({ F }) => +F.match(/[\d.]+/)?.[0] < d && +F.match(/[\d.]+/)?.[0] >= 0.75 * d);
const filteredUcho = (D) => ucho.filter(({ d1 }) => +d1 > D && +d1 < D * 1.2);
const filteredNaba = () => naba;
const MW = 10;
const getOrder = (item) => orderHKSH[i]?.[item]?.[`${item}Data`] || 0;
const pret = ({ HKSH: { d, L }, i }) => {
  return ["20MNV6", "CK45", "CK45IH", "42CRMO4IH", "42CRMO4UH"].map((el) => ({
    title: "K-" + d + "CR-" + el,
    length: L + +getOrder("dlaw").L + +getOrder("tlok").L + +getOrder("tlok").p + +getOrder("wapr").LF + MW,
  }));
};
const rura = ({ HKSH: { D, L }, i }) => {
  return prets
    .filter(({ DH8 }) => DH8 === D)
    .map((el) => ({ ...el, length: L + +getOrder("dlaw").L1 + +getOrder("tlok").L + +getOrder("tlok").p + +getOrder("dno").S1 }));
};
</script>

<template>
  <h2>{{ HKSHTitle(HKSH) }}</h2>
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`dlaw`" :index="i" :logic="() => filteredDlaw(HKSH.D, HKSH.d)" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`tlok`" :index="i" :logic="() => filteredTlok(HKSH.D)" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`dno`" :index="i" :logic="() => filteredDno(HKSH.D)" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`wapr`" :index="i" :logic="() => filteredWapr(HKSH.d)" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`ucho`" :index="i" :logic="() => filteredUcho(HKSH.D)" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`naba`" :index="i" :logic="() => filteredNaba()" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`pret`" :index="i" :logic="() => pret({ HKSH, i, k })" />
  <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`rura`" :index="i" :logic="() => rura({ HKSH, i, k })" />
  <div class="right mx-auto">
    <OrderHKSH v-bind="{ orderHKSH, i }" />
    <DescriptionHKSH v-bind="{ order: orderHKSH[i], project }" />
  </div>
</template>

<style scoped></style>
