<script setup>
import { tankData } from "../../services/data";
import { agregatCounting, getStandartTank, round } from "../../services/functions";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, open } = defineProps([
  "project",
  "meta",
  "order",
  "open",
]);
const filteredTanks = () => getStandartTank(meta, agregatCounting(project)) ?? tankData[meta.tank];
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="tank" index="" :logic="filteredTanks">
    <InputItem data="type">
      <!-- <select v-model="meta.tank" :disabled="order.tank?.title" class="w-100" id="tank"> -->
      <select v-model="meta.tank" class="w-100" id="tank">
        <option v-for="(_, type) in tankData" :value="type">
          {{ type }}
        </option>
      </select>
    </InputItem>

    <ResultItem :data="{ tankMin: round(agregatCounting(project)) }" />
  </SmthSelector>
</template>

<style scoped></style>
