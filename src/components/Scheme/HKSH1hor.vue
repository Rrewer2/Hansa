<script setup>
import HKSHhor from "./HKSHhor.vue";

const { x, y, sl } = defineProps(["x", "y", "sl"]);
const k = 1.25;
</script>

<template>
  <HKSHhor :x="x + sl / 6" :y="y - sl / 2" :sl="sl * k" />
  <path
    :d="`M${x + 0.46 * sl} ${y} A0.7 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 12} v${-sl / 4} h${-0.46 * sl + sl / 6 + sl / 20} v${-sl / 6}`"
    stroke="black" stroke-width="1" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y} A0.7 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - sl / 12} v${-sl / 4} h${0.46 * sl - (sl * k) / 6 - (sl * k) / 20} v${-sl / 6}`"
    stroke="black" stroke-width="1" fill="none" />
</template>

<style scoped></style>
