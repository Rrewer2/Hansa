<script setup>
import { engineMountData, freqData, motorData } from "../services/data";
import { powerCounting, setPressure, unitTitle } from "../services/functions";
import InputItem from "./InputItem.vue";
import ResultItem from "./ResultItem.vue";
import { text } from "../services/text";

const { project, k, btnDisabled, order } = defineProps([
  "project",
  "k",
  "btnDisabled",
  "order",
]);
const { id, unit, ...rest } = project[k];
</script>

<template>
  <div class="text-left my-2">
    <div class="flex-row">
      <button :disabled="btnDisabled" @click="$emit('delUnit', k)">✕</button>
      <h2 class="mr-100">{{ text("pumpUnit") }} {{ unitTitle(unit) }}</h2>
      <div v-for="(_, ind) in rest" class="flex-col ml-10">
        <InputItem :data="ind">
          <select v-if="ind === 'n'" v-model="project[k].n" :disabled="order[`motor${k}`]?.title" :id="ind">
            <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
          </select>

          <select v-if="ind === 'mount'" v-model="project[k].mount" :disabled="order[`motor${k}`]?.title" :id="ind"
            class="w-75">
            <option v-for="item in engineMountData" :value="item">
              {{ item }}
            </option>
          </select>
          <select v-if="ind === 'P'" v-model="project[k].P" @change="() => setPressure(unit, P)"
            :disabled="order[`motor${k}`]?.title" :id="ind">
            <option v-for="item in motorData" :value="item">{{ item }}</option>
          </select>
        </InputItem>
      </div>
      <ResultItem :data="powerCounting(unit)" />
    </div>
  </div>
</template>

<style scoped></style>
