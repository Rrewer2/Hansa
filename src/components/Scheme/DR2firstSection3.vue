<script setup>
import Point from "./Point.vue";
import Safety from "./Safety.vue";
import Hline from "./Hline.vue";
import DR2nextSection from "./DR2nextSection.vue";
import Valve from "./Valve.vue";
import Manometr from "./Manometr.vue";

const { x, y, type, sl, sl1, sh, text } = defineProps([
  "x",
  "y",
  "type",
  "N",
  "sl",
  "sl1",
  "sh",
  "text",
]);
const width = 2;
</script>

<template>
  <DR2nextSection :sl="sl" :sh="sh" :x="x + sl * 0.45" :y="y" :r="sl / 40" />
  <Point v-if="type" :x="x + sl1 / 6" :y="y" />
  <Point v-if="type" :x="x + sl1 / 6" :y="y + sh" />
  <path v-if="type" :d="`M${x + sl1 / 6} ${y} v${sh + sh / 8}`" stroke="black" stroke-width="2" fill="white" />

  <Safety v-if="type" :x="x + sl1 / 6" :y="y + sh / 2 - sl / 8" :a="sl / 5" />
  <Hline v-for="p in [0, sh]" :x="x" :y="p + y" :L="sl1" :width="width" />

  <Valve :x="x + sl * 0.45" :y="y + sh + sl / 40 + sl / 24" :data="{ spool: 'GA' }" :sl="sl" />
  <path v-for="a in [0.46 * sl, (1 - 0.46) * sl]" :d="`M${a + x + sl * 0.45} ${y - sh / 8} v${-10} h${-5} h${10}`"
    stroke="black" stroke-width="2" fill="none" />
  <Manometr :x="x + sl1 / 6" :y="y" :a="sl / 8" :text="text" />
</template>

<style scoped></style>
