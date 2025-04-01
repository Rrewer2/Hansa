<script setup>
import { agregatTitle } from "../services/functions";
import { tankData } from "../services/data";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <section class="">
    <h1>Agregat {{ agregatTitle(project, meta.tank, order) }}</h1>
    <div class="flex-row flex-left">
      <label>Typ zbiornika:
        <select v-model="meta.tank">
          <option v-for="(_, t) in tankData" :value="t">
            {{ t }}
          </option>
        </select>
      </label>
      <label>Cooler:
        <select v-model="meta.cooler">
          <option v-for="(_, c) in [0, 1, 2]" :value="c">
            {{ c }}
          </option>
        </select>
      </label>
    </div>
  </section>
</template>

<style scoped></style>