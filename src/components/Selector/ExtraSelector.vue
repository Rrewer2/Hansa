<script setup>
import { extra } from "../../services/data";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps(["project", "meta", "order"]);

const keys = Object.keys(extra);
// console.log('keys :>> ', keys);
// const filteredFilter = () => order['pump' + 0]?.pumpData?.out?.startsWith('Bore') ? HKRTR : filterData.filter(({ title, q, type, filterGrade, plug }) => q >= 3 * Qmax(project));
// const ventilationFilter = () => order['pump' + 0]?.pumpData?.out?.startsWith('Bore') ? [] : ventilation.filter(({ title, q, filterGrade, thread }) => q >= 10 * Qmax(project));
</script>

<template>
  <SmthSelector v-for="(item, i) in extra" v-bind="{ meta, order }" :Name="i" index="" :logic="() => item" />
  <!-- <SmthSelector v-if="Qmax(project)" v-bind="{ meta, order }" Name="ventilation" index=""
    :logic="ventilationFilter" /> -->
</template>

<style scoped></style>
