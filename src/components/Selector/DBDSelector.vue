<script setup>
import { ref } from "vue";
import { DBDData, GEHData, GEHSUNData } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredDBD = () => {
  return DBDData.filter(({ title, pmax, thread, qmax }) => pmax > project[0]?.unit[0]?.DBD && qmax > project[0]?.unit[0]?.Q);
};
const filteredGEH = () => {
  return [...GEHData, ...GEHSUNData].filter(
    ({ title, thread, threadA, pmax }) =>
      pmax > project[0]?.unit[0]?.DBD &&
      (!order["DBD" + 0]?.DBDData?.pmax || pmax >= order["DBD" + 0]?.DBDData?.pmax) &&
      (!order["DBD" + 0]?.DBDData?.thread || thread === order["DBD" + 0]?.DBDData?.thread),
  );
};
const after = async () => {
  // const availableQuantity = await import("../../services/SAP.json");
  // console.log(availableQuantity.default.filter(({ description }) => description.startsWith("Obudowa zaworu")));
  // order["HKAS"] =
  //   HKAS.find(
  //     ({ threadS, threadP }) =>
  //       threadP === order["aku" + 0]?.akuData?.threadP && threadS === order["akuSafety" + 0]?.akuSafetyData?.threadS,
  //   ) ?? {};
};
</script>

<template>
  <SmthSelector v-if="project[0]?.unit[0]?.DBD" v-bind="{ meta, order }" Name="DBD" :index="0" :logic="filteredDBD" :after="after" />
  <SmthSelector v-if="project[0]?.unit[0]?.DBD" v-bind="{ meta, order }" Name="GEH" :index="0" :logic="filteredGEH" :after="after" />
</template>
<style scoped></style>
