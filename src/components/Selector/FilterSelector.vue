<script setup>
import { filterData, ventilation, HKRTR, xvrnw, pipesData } from "../../services/data";
import { Qmax, pumpCounting } from "../../services/functions";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps([ "project", "meta", "order"]);

const filteredFilter = () => order['pump' + 0]?.pumpData?.out?.startsWith('Bore') ? HKRTR : filterData.filter(({ title, q, type, filterGrade, hole }) => 
  q >= Qmax(project) && ((!order.lid?.lidData?.hole && !hole) || (order.lid?.lidData?.hole && order.lid?.lidData?.hole === hole)));
const ventilationFilter = () => order['pump' + 0]?.pumpData?.out?.startsWith('Bore') ? [] : ventilation.filter(({ title, q, filterGrade, thread }) => q >= 10 * Qmax(project));
const getXvrT = () => {
  const Qback = project[0].unit.reduce((acc, unit) => acc + pumpCounting(unit).Qback, 0);
  const pipeT = () => Object.entries(pipesData).filter(el => el[0] !== 'L12-1.5').find(([_, { Q }]) => Q > Qback);
  const getXvrP = (thread, pipe) => xvrnw.find(x => thread === x.thread && pipe === x.pipe);
  const xvrFilterT = getXvrP(order['filter']?.filterData?.join, pipeT()[0]);
  order[`xvrFilterT`] = xvrFilterT ? { title: xvrFilterT.title, xvrFilterTData: xvrFilterT} : {};
};

</script>

<template>
  <SmthSelector v-if="Qmax(project)" v-bind="{ project, meta, order }" Name="filter" index="" :logic="filteredFilter"
    :after="getXvrT" />
  <SmthSelector v-if="Qmax(project)" v-bind="{ project, meta, order }" Name="ventilation" index=""
    :logic="ventilationFilter" />
</template>

<style scoped></style>
