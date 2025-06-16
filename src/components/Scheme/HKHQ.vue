<script setup>
import Arrow from "./Arrow.vue";
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

const HKHQ = {
  "012": { left: true, right: true, deg: 0 },
  "013": { left: true, right: false, deg: 0 },
  "014": { left: false, right: true, deg: 0 },
  "022": { left: true, right: true, deg: 180 },
  "023": { left: true, right: false, deg: 180 },
  "024": { left: false, right: true, deg: 180 },
};
</script>

<template>
  <template v-if="data.throttle">
    <path :d="`M${x} ${y} h${sl}`" stroke="black" stroke-width="1" stroke-dasharray="5 10" />
    <path v-for="a in [x, x + sl]" :d="`M${a} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />

    <path v-if="!HKHQ[data.throttle]?.left" :d="`M${x + 0.46 * sl} ${y} v${sh}`" stroke="black" stroke-width="2"
      fill="none" />
    <path v-if="!HKHQ[data.throttle]?.right" :d="`M${x + (1 - 0.46) * sl} ${y} v${sh}`" stroke="black" stroke-width="2"
      fill="none" />
    <template v-if="HKHQ[data.throttle]?.left">
      <path :d="`M${x + 0.46 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`" stroke="black"
        stroke-width="2" fill="none" />
      <CheckValve :x="x + 0.46 * sl - sh / 4" :y="y + sh / 2" :r="r" :deg="HKHQ[data.throttle]?.deg" />
      <Point :x="x + 0.46 * sl - sh / 4" :y="y + sh / 4" />
      <Point :x="x + 0.46 * sl - sh / 4" :y="y + (3 * sh) / 4" />
      <path :d="`M${x + 0.46 * sl - sh / 4} ${y + sh / 4} h${-sh / 2} v${sh / 2} h${sh / 2}`" stroke="black"
        stroke-width="2" fill="none" />
      <path
        :d="`M${x + 0.46 * sl - sh + sh / 8} ${y + sh / 3} A1 2 0 0 1 ${x + 0.46 * sl - sh + sh / 8} ${y + (2 * sh) / 3}`"
        stroke="black" stroke-width="2" fill="none" />
      <path
        :d="`M${x + 0.46 * sl - sh / 2 - sh / 4 + sh / 8} ${y + sh / 3} A1 2 0 1 0 ${x + 0.46 * sl - sh / 2 - sh / 4 + sh / 8} ${y + (2 * sh) / 3}`"
        stroke="black" stroke-width="2" fill="none" />
      <Arrow :x="x + 0.46 * sl - sh / 4 - sh / 2" :y="y + sh / 2" :l="sh / 2" deg="60" />
    </template>
    <template v-if="HKHQ[data.throttle]?.right">
      <path :d="`M${x + (1 - 0.46) * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`" stroke="black"
        stroke-width="2" fill="none" />
      <CheckValve :x="x + (1 - 0.46) * sl + sh / 4" :y="y + sh / 2" :r="r" :deg="HKHQ[data.throttle]?.deg" />
      <Point :x="x + (1 - 0.46) * sl + sh / 4" :y="y + sh / 4" />
      <Point :x="x + (1 - 0.46) * sl + sh / 4" :y="y + (3 * sh) / 4" />
      <path :d="`M${x + (1 - 0.46) * sl + sh / 4} ${y + sh / 4} h${sh / 2} v${sh / 2} h${-sh / 2}`" stroke="black"
        stroke-width="2" fill="none" />
      <path
        :d="`M${x + (1 - 0.46) * sl + sh / 2 + sh / 8} ${y + sh / 3} A1 2 0 0 1 ${x + (1 - 0.46) * sl + sh / 2 + sh / 8} ${y + (2 * sh) / 3}`"
        stroke="black" stroke-width="2" fill="none" />
      <path
        :d="`M${x + (1 - 0.46) * sl + sh / 2 + sh / 4 + sh / 8} ${y + sh / 3} A1 2 0 1 0 ${x + (1 - 0.46) * sl + sh / 2 + sh / 4 + sh / 8} ${y + (2 * sh) / 3}`"
        stroke="black" stroke-width="2" fill="none" />
      <Arrow :x="x + (1 - 0.46) * sl + sh / 4 + sh / 2" :y="y + sh / 2" :l="sh / 2" deg="60" />
    </template>
  </template>
</template>

<style scoped></style>
