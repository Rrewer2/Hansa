<script setup>
import { ref } from "vue";
import { HKAS, akuData, akuSafetyData } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredAku = () => {
  return akuData.filter(({ title, pmax, qg, thread, connection }) => pmax > project[0]?.unit[0]?.p * 1.3);
};
const filteredSafetyAku = () => {
  //TODO: 300 barolitrow max!
  return akuSafetyData.filter(
    ({ title, pmax, threadP, threadT, threadM, threadS }) =>
      pmax > project[0]?.unit[0]?.p * 1.3 && (!order["aku" + 0]?.akuData?.pmax || pmax >= order["aku" + 0]?.akuData?.pmax),
  );
};
const after = () => {
  order["HKAS"] =
    HKAS.find(
      ({ threadS, threadP }) =>
        threadP === order["aku" + 0]?.akuData?.threadP && threadS === order["akuSafety" + 0]?.akuSafetyData?.threadS,
    ) ?? {};
};
</script>

<template>
  <SmthSelector v-if="project[0]?.unit[0]?.aku" v-bind="{ meta, order }" Name="aku" :index="0" :logic="filteredAku" :after="after" />
  <SmthSelector
    v-if="project[0]?.unit[0]?.aku"
    v-bind="{ meta, order }"
    Name="akuSafety"
    :index="0"
    :logic="filteredSafetyAku"
    :after="after"
  />
</template>
<style scoped></style>
