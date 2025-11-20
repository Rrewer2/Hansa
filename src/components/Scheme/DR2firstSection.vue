<script setup>
import Point from "./Point.vue";
import Safety from "./Safety.vue";
import Start from "./Start.vue";
import Hline from "./Hline.vue";
import Manometr from "./Manometr.vue";

const { x, y, type, sl, sl1, sh } = defineProps(["x", "y", "type", "N", "sl", "sl1", "sh"]);
const width = 2;
</script>

<template>
  <Point v-if="type" :x="x + sl / 4" :y="y" />
  <Point v-if="type" :x="x + sl / 4" :y="y + sh" />
  <path v-if="type" :d="`M${x + sl / 4} ${y} v${sh}`" stroke="black" stroke-width="2" />

  <Safety v-if="type" :x="x + sl / 4" :y="y + sh / 2" :a="sl / 5" direction="down" />

  <Point v-if="type === 2" :x="x + sl1 * 0.6" :y="y" />
  <Point v-if="type === 2" :x="x + sl1 * 0.6" :y="y + sh" />
  <path v-if="type === 2" :d="`M${x + sl1 * 0.6} ${y} v${sh}`" stroke="black" stroke-width="2" />

  <Start v-if="type === 2" :x="x + sl1 * 0.6" :y="y + sh / 2 - sl / 8" :a="sl / 5" />
  <Hline v-for="p in [0, sh]" :x="x" :y="p + y" :L="sl1" :width="width" />
  <Manometr :x="x + sl / 4" :y="y" :a="sl / 12" />
</template>

<style scoped></style>
