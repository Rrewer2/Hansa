<script setup>
import HKSHhor from "./HKSHhor.vue";

const { x, y, sl } = defineProps(["x", "y", "sl"]);
const k = 1.25;
</script>

<template>
  <HKSHhor :x="x + sl / 6" :y="y - sl / 2" :sl="sl * k" />
  <path :d="`M${x + 0.46 * sl} ${y - sl / 20} v${-sl / 8}`" stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + 0.46 * sl} ${y - sl / 20 - sl / 8} A0.5 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 6 - sl / 8}`"
    stroke="black" stroke-width="5" fill="none" />
  <path :d="`M${x + 0.46 * sl} ${y - sl / 20 - sl / 4} v${-sl / 8} h${-0.46 * sl + sl / 6 + sl / 20} v${-sl / 14}`"
    stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + (1 - 0.46) * sl} ${y - sl / 20} v${-sl / 8}`" stroke="black" stroke-width="2" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y - sl / 20 - sl / 8} A0.5 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - sl / 6 - sl / 8}`"
    stroke="black" stroke-width="5" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y - sl / 20 - sl / 4} v${-sl / 8} h${0.46 * sl - (sl * k) / 6 - (sl * k) / 20} v${-sl / 14}`"
    stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
