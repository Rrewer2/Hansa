<script setup>
import { filterData, ventilation, HKRTR } from "../../services/data";
import { Qmax } from "../../services/functions";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps([ "project", "meta", "order"]);

const filteredFilter = () => order['pump' + 0]?.pumpData?.out?.startsWith('Bore') ? HKRTR : filterData.filter(({ title, q, type, filterGrade, plug }) => q >= 5 * Qmax(project));
const ventilationFilter = () => order['pump' + 0]?.pumpData?.out?.startsWith('Bore') ? [] : ventilation.filter(({ title, q, filterGrade, thread }) => q >= 10 * Qmax(project));
</script>

<template>
  <SmthSelector v-if="Qmax(project)" v-bind="{ project, meta, order }" Name="filter" index="" :logic="filteredFilter" />
  <SmthSelector v-if="Qmax(project)" v-bind="{ project, meta, order }" Name="ventilation" index=""
    :logic="ventilationFilter" />
</template>

<style scoped></style>
