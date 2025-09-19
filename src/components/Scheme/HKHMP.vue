<script setup>
import Arrow from "./Arrow.vue";
import Safety from "./Safety.vue";
import CheckValve from "./CheckValve.vue";
import Point from "./Point.vue";

const { x, y, r, sl, sh, data } = defineProps([
  "x",
  "y",
  "r",
  "sl",
  "sh",
  "data",
]);

const HKHMP = {
  "011": { A: false, B: false, P: true },
  "012": { A: true, B: true, P: false },
  "013": { A: true, B: false, P: false },
  "014": { A: false, B: true, P: false },
  "015": { A: false, B: false, P: false, AB: true },
};
</script>

<template>
  <template v-if="data.directPress">
    <path :d="`M${x} ${y} h${sl}`" stroke="black" stroke-width="1" stroke-dasharray="5 10" />
    <path v-for="a in [x, x + sl]" :d="`M${a} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />

    <path :d="`M${x + 0.46 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + (1 - 0.46) * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <text :x="x + sh * 1.9" :y="y + sh * 0.9" font-family="Arial" :font-size="r * 1.7" fill="black"
      text-anchor="middle">
      {{ data.directPressValue }} bar
    </text>

    <template v-if="data.directPress === '011'">
      <Point :x="x" :y="y + sh / 2" />
      <Point :x="x + sl" :y="y + sh / 2" />
      <path :d="`M${x} ${y + sh / 2} h${sl}`" stroke="black" stroke-width="2" fill="none" />
      <path :d="`M${x + (1 - 0.46) * sl + sl / 4} ${y + sh / 2 + sh / 4} v${sh / 8} h${sh / 3} v${-sh / 2 + sh / 8}`"
        stroke="black" stroke-width="2" fill="none" />
      <Point :x="x + (1 - 0.46) * sl + sl / 4 + sh / 3" :y="y + sh / 2" />
      <Safety :x="x + (1 - 0.46) * sl + sl / 4" :y="y + sh / 2" :a="sh / 3" direction="right" />
    </template>

    <template v-if="data.directPress === '012'">
      <Point :x="x + 0.46 * sl" :y="y + sh / 2" />
      <Point :x="x + sl" :y="y + sh / 8" />
      <path :d="`M${x + 0.46 * sl} ${y + sh / 2} h${-sh} v${-sh / 2 + sh / 8} h${sh + (1 - 0.46) * sl}`" stroke="black"
        stroke-width="2" fill="none" />
      <path :d="`M${x + sh / 2 + sh / 4} ${y + sh / 2 + sh / 4} v${sh / 8} h${-sh / 3} v${-sh / 2 + sh / 8}`"
        stroke="black" stroke-width="2" fill="none" />
      <Point :x="x + sh / 2 + sh / 4 - sh / 3" :y="y + sh / 2" />
      <Safety :x="x + sh / 2 + sh / 4" :y="y + sh / 2" :a="sh / 3" direction="left" />
    </template>

    <template v-if="data.directPress === '013'">
      <Point :x="x + 0.46 * sl" :y="y + sh / 2" />
      <Point :x="x + sl" :y="y + sh / 2" />
      <path :d="`M${x + 0.46 * sl} ${y + sh / 2} h${(1 - 0.46) * sl}`" stroke="black" stroke-width="2" fill="none" />
      <path :d="`M${x + (1 - 0.46) * sl + sl / 4} ${y + sh / 2 + sh / 4} v${sh / 8} h${sh / 3} v${-sh / 2 + sh / 8}`"
        stroke="black" stroke-width="2" fill="none" />
      <Point :x="x + (1 - 0.46) * sl + sl / 4 + sh / 3" :y="y + sh / 2" />
      <Safety :x="x + (1 - 0.46) * sl + sl / 4" :y="y + sh / 2" :a="sh / 3" direction="right" />
    </template>

    <template v-if="data.directPress === '014' || data.directPress === '012'">
      <Point :x="x + (1 - 0.46) * sl" :y="y + sh / 2" />
      <Point :x="x + sl" :y="y + sh / 2" />
      <path :d="`M${x + (1 - 0.46) * sl} ${y + sh / 2} h${0.46 * sl}`" stroke="black" stroke-width="2" fill="none" />
      <path :d="`M${x + (1 - 0.46) * sl + sl / 4} ${y + sh / 2 + sh / 4} v${sh / 8} h${sh / 3} v${-sh / 2 + sh / 8}`"
        stroke="black" stroke-width="2" fill="none" />
      <Point :x="x + (1 - 0.46) * sl + sl / 4 + sh / 3" :y="y + sh / 2" />
      <Safety :x="x + (1 - 0.46) * sl + sl / 4" :y="y + sh / 2" :a="sh / 3" direction="right" />
    </template>

    <template v-if="data.directPress === '015'">
      <Point :x="x + 0.46 * sl" :y="y + sh / 2" />
      <Point :x="x + (1 - 0.46) * sl" :y="y + sh / 12" />
      <path :d="`M${x + 0.46 * sl} ${y + sh / 2} h${-sh} v${-sh / 2 + sh / 12} h${sh + (1 - 0.46) * sl - 0.46 * sl}`"
        stroke="black" stroke-width="2" fill="none" />
      <path :d="`M${x + sh / 2 + sh / 4} ${y + sh / 2 + sh / 4} v${sh / 8} h${-sh / 3} v${-sh / 2 + sh / 8}`"
        stroke="black" stroke-width="2" fill="none" />
      <Point :x="x + sh / 2 + sh / 4 - sh / 3" :y="y + sh / 2" />
      <Safety :x="x + sh / 2 + sh / 4" :y="y + sh / 2" :a="sh / 3" direction="left" />

      <Point :x="x + (1 - 0.46) * sl" :y="y + sh / 2" />
      <Point :x="x + 0.46 * sl" :y="y + sh / 4" />
      <path
        :d="`M${x + (1 - 0.46) * sl} ${y + sh / 2} h${0.46 * sl - sh / 4 + sh / 16} v${-sh / 4} h${-(1 - 0.46) * sl + sh / 4 - sh / 16}`"
        stroke="black" stroke-width="2" fill="none" />
      <path :d="`M${x + (1 - 0.46) * sl + sl / 4} ${y + sh / 2 + sh / 4} v${sh / 8} h${sh / 3} v${-sh / 2 + sh / 8}`"
        stroke="black" stroke-width="2" fill="none" />
      <Point :x="x + (1 - 0.46) * sl + sl / 4 + sh / 3" :y="y + sh / 2" />
      <Safety :x="x + (1 - 0.46) * sl + sl / 4" :y="y + sh / 2" :a="sh / 3" direction="right" />
    </template>
  </template>
</template>

<style scoped></style>
