<script setup>
import { gauge } from "../../services/data";
import { Qmax } from "../../services/functions";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order } = defineProps([ "project", "meta", "order"]);

const filteredGauge = () => gauge.filter(({ pmax }) => pmax > project[0]?.unit[0]?.p * 1.3 && pmax < project[0]?.unit[0]?.p * 3);
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="gauge" index="" :logic="filteredGauge" />
</template>

<style scoped></style>
