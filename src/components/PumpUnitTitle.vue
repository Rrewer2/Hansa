<script setup>
import { engineMountData, freqData } from "../services/data";
import { powerCounting, unitTitle } from "../services/functions";
import { text } from "../services/text";
import InputItem from "./InputItem.vue";
import ResultItem from "./ResultItem.vue";
const { project, k, btnDisabled, order } = defineProps(["project", "k", "btnDisabled", "order"]);

const { id, unit, ...rest } = project[k];
</script>

<template>
  <div class="text-left my-2">
    <div class="flex-row">
      <button :disabled="btnDisabled" @click="$emit('delUnit', k)">✕</button>
      <h2 class="mr-50">Zespół pompujacy {{ unitTitle(unit) }}</h2>
      <div v-for="(_, ind) in rest" class="flex-col ml-10">

        <InputItem :title="text(ind).split(', ')[0]" :unit="text(ind).split(', ')[1]">
          <select v-if="ind === 'n'" v-model="project[k].n" :disabled="order[`motor${k}`]">
            <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
          </select>

          <select v-else v-model="project[k].mount" :disabled="order[`motor${k}`]" class="w-75">
            <option v-for="item in engineMountData" :value="item">{{ item }}</option>
          </select>
        </InputItem>
      </div>
      <ResultItem :data="powerCounting(unit)" />
    </div>
  </div>
</template>

<style scoped></style>