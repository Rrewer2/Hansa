<script setup>
import { engineMountData, freqData } from "../services/data";
import { powerCounting, powerUnitCounting } from "../services/functions";
import { text } from "../services/text";
import ResultItem from "./ResultItem.vue";
const { project, k, btnDisabled, order } = defineProps(["project", "k", "btnDisabled", "order"]);

const { id, unit, ...rest } = project[k];
</script>

<template>
  <h2 class="text-left">
    <div class="flex-row">
      <button :disabled="btnDisabled" @click="$emit('delUnit', k)">✕</button>
      <h3 class="mr-50">Zespół pompujacy {{ powerUnitCounting(unit) }}</h3>
      <div v-for="(_, ind) in rest" class="flex-col ml-10">
        <span class="border border-bottom-no bgc-g fs-sm px-5">
          {{ text(ind) }}
        </span>
        <select v-if="ind === 'n'" v-model="project[k].n" :disabled="order[`motor${k}`]">
          <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
        </select>

        <select v-else v-model="project[k].engineMount" :disabled="order[`motor${k}`]">
          <option v-for="item in engineMountData" :value="item">{{ item }}</option>
        </select>
      </div>
      <ResultItem :data="powerCounting(unit)" />
    </div>
  </h2>
</template>

<style scoped></style>