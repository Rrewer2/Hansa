<script setup>
import { agregatTitle } from "../services/functions";
import { tankData } from "../services/data";
import { text } from "../services/text";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <section class="">
    <h2>Agregat {{ agregatTitle(project, meta, order) }}</h2>
    <div class="flex-row flex-left">
      <div class="inline w-100">
        <h3 class="border border-bottom-no bgc-g fs-sm px-5">{{ text('tank') }}</h3>
        <select v-model="meta.tank" :disabled="order.tank?.title">
          <option v-for="(_, t) in tankData" :value="t">
            {{ t }}
          </option>
        </select>
      </div>

      <div class="inline w-100">
        <h3 class="border border-bottom-no bgc-g fs-sm px-5">Cooler</h3>
        <select v-model="meta.cooler">
          <option v-for="(_, c) in [0, 1, 2]" :value="c">
            {{ c }}
          </option>
        </select>
      </div>
    </div>
  </section>
</template>

<style scoped></style>