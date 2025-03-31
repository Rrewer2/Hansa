<script setup>
import { engineMountData } from "../services/data";
import { powerUnitCounting } from "../services/functions";
const { project, k, unit, btnDisabled } = defineProps(["project", "k", "unit", "btnDisabled"]);
</script>

<template>
  <h2 class="text-left">
    <button :disabled="btnDisabled" @click="$emit('delUnit', k)">✕</button>
    Zespół pompujacy {{ powerUnitCounting(unit) }}
    <select v-model="project[k].engineMount">
      <option v-for="item in engineMountData" :value="item">{{ item }}</option>
    </select>
  </h2>
</template>

<style scoped></style>