<script setup>
import { ref } from "vue";
import { gasketPump, dampingRail, engineMountData, motorSizes } from "../../services/data";
import InputItem from "../InputItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const motorSize = ref("");

const filteredVibro = () => {
  if (powerUNIT.mount === "B14" || powerUNIT.mount === "B5" || order[`motor${i}`]?.motorData?.mount === "B14" || order[`motor${i}`]?.motorData?.mount === "B5") {
    return gasketPump.filter(({ size }) => size === order[`motor${i}`]?.motorData?.size || size === motorSize.value);
  }
  return dampingRail.filter(({ size }) => size === order[`motor${i}`]?.motorData?.size || size === motorSize.value);
};
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="vibro" index="" :logic="filteredVibro">
    <InputItem data="mount">
      <select v-model="powerUNIT.mount" id="mount">
        <option v-for="item in engineMountData" :value="item">
          {{ item }}
        </option>
      </select>
    </InputItem>

    <InputItem data="size">
      <select v-model="motorSize" id="motorSize">
        <option v-for="item in motorSizes" :value="item">
          {{ item }}
        </option>
      </select>
    </InputItem>
  </SmthSelector>
</template>

<style scoped></style>
