<script setup>
import HKSHver from "./HKSHver.vue";

const { x, y, sl } = defineProps(["x", "y", "sl"]);
const k = 1.25;
</script>

<template>
  <HKSHver :x="x + sl / 2" :y="y - sl / 4" :sl="sl * k" />
  <path
    :d="`M${x + 0.46 * sl} ${y - sl / 12} A0.7 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 6} v${-sl / 18} h${sl / 6} v${-sl / 8} h${-sl / 6 + (0.5 - 0.46) * sl}`"
    stroke="black" stroke-width="1" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y - sl / 12} A0.7 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - sl / 6} v${-sl / 36} h${sl / 6} v${-sl / 1.6} h${-sl / 6 - (0.5 - 0.46) * sl}`"
    stroke="black" stroke-width="1" fill="none" />
</template>

<style scoped></style>
