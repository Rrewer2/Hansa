<script setup>
import { agregatTitle } from "../services/functions";
import { tankData } from "../services/data";
import { text } from "../services/text";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <h2 class="title">{{ text("powerUnit") }} {{ agregatTitle(project, meta, order) }}</h2>
  <section class="tal mt-20">

    <label>
      <span class="fs-sm px-5">{{ text("type") }}</span>
      <select v-model="meta.tank" :disabled="order.tank?.title" class="ml-10" id="tank">
        <option v-for="(_, t) in tankData" :value="t">
          {{ t }}
        </option>
      </select>
    </label>

    <label class="ml-10">
      <span class="fs-sm px-5 ml-10">{{ text("cooler") }}</span>
      <select v-model="meta.cooler" class="ml-10" id="cooler">
        <option v-for="(title, c) in ['Bez', 'Za filtrem', 'Przed fitrem']" :value="c">
          {{ title }}
        </option>
      </select>
    </label>
  </section>
</template>

<style scoped>
.title {
  position: sticky;
  z-index: 100;
  top: 5px;
}
</style>
