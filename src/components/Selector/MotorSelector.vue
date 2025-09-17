<script setup>
import { ref } from "vue";
import {
  engineMountData,
  enginesData,
  freqData,
  motorData,
  motorSizes,
} from "../../services/data";
import {
  getMaxPower,
  reducedPower,
  round,
  setPressure,
} from "../../services/functions";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
const motorSize = ref("");
const filteredMotors = () =>
  enginesData.filter(
    ({ power, mount }) =>
      power * 1.25 >= reducedPower(powerUNIT.unit) &&
      power * 0.75 <= reducedPower(powerUNIT.unit) &&
      mount === powerUNIT.mount,
  );
const motorsByPower = () =>
  enginesData.filter(
    ({ power, mount }) =>
      power === project[i].P && (!powerUNIT.mount || mount === powerUNIT.mount),
  );
const motorsBySize = () =>
  enginesData.filter(
    ({ size, mount }) =>
      size === motorSize.value &&
      (!powerUNIT.mount || mount === powerUNIT.mount),
  );
const motors = () =>
project[i].P ? motorsByPower() : motorSize.value ? motorsBySize() : filteredMotors();
const filteredMotorData = () => {
  if (order[`pump${i}`]?.title) {
    return motorData.filter(el => el <= getMaxPower({ VFU: order[`pump${i}`]?.pumpData.CC, n: powerUNIT.n, p: order[`pump${i}`]?.pumpData.pmax }))
  }
  return motorData;
};
</script>

<template>
  <SmthSelector v-bind="{ project, meta, order }" Name="motor" :index="i" :logic="motors">
    <InputItem data="n">
      <select v-model="powerUNIT.n" id="motor-n">
        <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
      </select>
    </InputItem>

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

    <ResultItem :data="{ P: round(reducedPower(powerUNIT.unit)) }" />

    <InputItem data="P">
      <select v-model="project[i].P" @change="() => setPressure(powerUNIT.unit, project[i].P)" id="P">
        <option v-for="item in filteredMotorData()" :value="item">{{ item }}</option>
      </select>
    </InputItem>
  </SmthSelector>
</template>

<style scoped></style>
