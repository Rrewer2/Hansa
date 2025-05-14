<script setup>
import { agregatTitle } from "../services/functions";
import { tankData } from "../services/data";
import { text } from "../services/text";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <section class="tal">
    <h2>Agregat {{ agregatTitle(project, meta, order) }}</h2>

    <label>
      <span class="fs-sm px-5">{{ text("type") }}</span>
      <select
        v-model="meta.tank"
        :disabled="order.tank?.title"
        class="ml-10"
        id="tank"
      >
        <option v-for="(_, t) in tankData" :value="t">
          {{ t }}
        </option>
      </select>
    </label>

    <label class="ml-10">
      <span class="fs-sm px-5 ml-10">Chłodnica</span>
      <select v-model="meta.cooler" class="ml-10" id="cooler">
        <option v-for="(_, c) in [0, 1, 2]" :value="c">
          {{ c }}
        </option>
      </select>
    </label>
  </section>
</template>

<style scoped></style>
