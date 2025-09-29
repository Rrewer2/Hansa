<script setup>
import HKSHhor from "./HKSHhor.vue";

const { x, y, sl } = defineProps(["x", "y", "sl"]);
const k = 0.75;
</script>

<template>
  <HKSHhor :x="x + sl / 4" :y="y - sl / 4" :sl="sl * k" />
  <HKSHhor :x="x + sl / 4" :y="y - (sl * 3) / 4" :sl="sl * k" />
  <path :d="`M${x + 0.46 * sl} ${y - sl / 20} v${-sl / 8} h${-sl / 8}`" stroke="black" stroke-width="2" fill="none" />
  <path
    :d="`M${x + 0.46 * sl - sl / 8} ${y - sl / 20 - sl / 8} A1 0.5 0 1 1 ${x + 0.46 * sl - sl / 8 - sl / 8} ${y - sl / 20 - sl / 8}`"
    stroke="black" stroke-width="5" fill="none" />
  <path
    :d="`M${x + 0.46 * sl - sl / 8 - sl / 8} ${y - sl / 20 - sl / 8} h${-sl / 20} v${-sl * 3 / 8 - sl / 24} h${sl / 8} v${-sl / 6} v${sl / 6} v${sl / 6}`"
    stroke="black" stroke-width="2" fill="none" />

  <path :d="`M${x + (1 - 0.46) * sl} ${y - sl / 20} v${-sl / 8} h${sl / 8}`" stroke="black" stroke-width="2"
    fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl + sl / 8} ${y - sl / 20 - sl / 8} A1 0.5 0 1 0 ${x + (1 - 0.46) * sl + sl / 8 + sl / 8} ${y - sl / 20 - sl / 8}`"
    stroke="black" stroke-width="5" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl + sl / 8 + sl / 8} ${y - sl / 20 - sl / 8} h${sl / 12} v${-sl * 3 / 8 - sl / 24} h${-sl / 6 - sl / 8} v${-sl / 6} v${sl / 6} v${sl / 6}`"
    stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
