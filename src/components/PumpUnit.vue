<script setup>
import Hydrocylinder from "./Hydrocylinder.vue";
import { buckling, pumpCounting, getVFU, round } from "../services/functions";
import ResultItem from "./ResultItem.vue";
import InputItem from "./InputItem.vue";
import { spoolTypes } from "../services/data";
import { text } from "../services/text";
import Section from "./Section.vue";

const { pumpData, btnDisabled, project, k, i, order, meta } = defineProps([
  "pumpData",
  "btnDisabled",
  "project",
  "k",
  "i",
  "order",
  "meta",
]);

const { id, HKSH, same, startValve, Gerotor, ...rest } = pumpData;
</script>

<template>
  <article>
    <div class="flex-row">
      <div>
        <button :disabled="btnDisabled" @click="$emit('delPump')" :title="text('btDelPump', meta)">✕</button>
      </div>
      <ResultItem :data="{ VFU: round(getVFU(pumpData.Q, project[k].n)) }" />

      <div v-for="(_, ind) in rest">
        <InputItem :data="ind">
          <input v-if="ind === 'Q'" type="number" min="0" v-model="pumpData[ind]" :disabled="order[`pump${i}-${k}`]?.title" :id="ind" />
          <input v-if="ind === 'p'" type="number" min="0" v-model="pumpData[ind]" :id="ind" />
          <input v-if="ind === 'DBD'" type="number" min="0" v-model="pumpData[ind]" :id="ind" />
          <select v-if="ind === 'DR2type'" v-model="pumpData.DR2type" class="w-100" :disabled="same" :id="ind">
            <option v-for="item in [0, 1, 2]" :value="item">
              {{ item }}
            </option>
          </select>
          <input v-if="ind === 'start'" type="checkbox" v-model="pumpData.start" :id="'start' + ind" />
          <select
            v-if="ind === 'start'"
            v-model="pumpData.startValve"
            :id="'startValve' + ind"
            class="w-75"
            :disabled="same || !pumpData.start"
          >
            <option v-for="spool in spoolTypes" :value="spool" :id="'start' + spool">
              {{ spool }}
            </option>
          </select>
        </InputItem>
      </div>

      <ResultItem :data="pumpCounting(pumpData)" />
    </div>

    <Section
      v-for="(_, j) in pumpData.HKSH"
      :key="pumpData.HKSH[j].id"
      :HKSH="pumpData.HKSH[j]"
      :pumpData="{ ...pumpData, same }"
      :class="buckling({ ...pumpData, HKSH: HKSH[j] })"
      class="my-2 border"
    >
      <button
        @click="() => (pumpData.HKSH = pumpData.HKSH.filter(({ id }) => id !== pumpData.HKSH[j].id))"
        class="el"
        :title="text('btDelSection', meta)"
      >
        ✕
      </button>
    </Section>
    <div class="flex-row flex-left pl-25">
      <button @click="$emit('addCyl')" class="btn-add my-2" :title="text('btnSection', meta)">+ {{ text("section") }}</button>
      <button @click="$emit('addGer')" class="btn-add my-2">+ {{ text("gerotor") }}</button>
    </div>
  </article>
</template>

<style scoped></style>
