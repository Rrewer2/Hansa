<script setup>
import Point from "./Point.vue";
import Safety from "./Safety.vue";
import Hline from "./Hline.vue";
import DR2nextSection from "./DR2nextSection.vue";
import Valve from "./Valve.vue";
import Manometr from "./Manometr.vue";

const { x, y, type, sl, sl1, sh, text, startValve } = defineProps([
  "x",
  "y",
  "type",
  "N",
  "sl",
  "sl1",
  "sh",
  "text",
  "startValve",
]);
const width = 2;
</script>

<template>
  <DR2nextSection :sl="sl" :sh="sh" :x="x + sl1" :y="y" :r="sl / 40" />
  <Valve :x="() => x + sl1" :y="() => y + sh + sh / 10" :data="{ spool: startValve }" :sl="() => sl" />
  <path v-for="a in [0.46 * sl, (1 - 0.46) * sl]" :d="`M${a + x + sl1} ${y - sh / 8} v${-10} h${-5} h${10}`"
    stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
