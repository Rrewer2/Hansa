<script setup>
import HKSHver from "./HKSHver.vue";

const { x, y, sl } = defineProps(["x", "y", "sl"]);
const k = 1;
</script>

<template>
  <HKSHver :x="x + sl / 3" :y="y - sl / 3" :sl="sl * k" />
  <HKSHver :x="x + (sl * 7) / 8" :y="y - sl / 3" :sl="sl * k" />
  <path
    :d="`M${x + 0.46 * sl} ${y} A0.7 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 12} v${-sl / 12} h${-sl / 24} v${-sl / 6 - sl / 24} h${-sl / 12} h${sl / 6} h${(sl * k) / 8}`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y} A0.7 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - sl / 12} v${-sl / 12} h${sl / 24} v${-sl / 6} A0.7 1 0 0 1 ${x + sl / 2 + sl / 12} ${y - sl / 2.5} v${-sl / 2.5}  h${sl / 24}  h${-sl / 6} h${(-sl * k) / 8}`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />
</template>

<style scoped></style>
