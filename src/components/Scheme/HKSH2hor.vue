<script setup>
import HKSHhor from "./HKSHhor.vue";

const { x, y, sl } = defineProps(["x", "y", "sl"]);
const k = 0.75;
</script>

<template>
  <HKSHhor :x="x + sl / 4" :y="y - sl / 4" :sl="sl * k" />
  <HKSHhor :x="x + sl / 4" :y="y - (sl * 3) / 4" :sl="sl * k" />
  <path
    :d="`M${x + 0.46 * sl} ${y} A0.7 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 12} v${-sl / 12} h${-sl / 3} v${(-sl * 5) / 12} h${sl / 6} v${-sl / 6} v${sl / 6} v${(sl * k) / 5}`"
    stroke="black" stroke-width="1" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y} A0.7 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - sl / 12} v${-sl / 12} h${sl / 3} h${sl / 20} v${(-sl * 5) / 12} h${-sl / 3} v${-sl / 6} v${sl / 6} v${(sl * k) / 5}`"
    stroke="black" stroke-width="1" fill="none" />

  <!-- <path
        :d="`M${x + 0.46 * sl} ${y} A0.7 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 12} v${-sl / 8} h${-sl * 5 / 16} v${-sl / 8} h${-sl / 16} v${-sl / 4} h${sl * 0.5} v${sl / 20}`"
        stroke="black" stroke-width="2" fill="none" />

    <path :d="`M${x + sl / 3} ${y - sl * 11 / 24} v${-sl / 10} v${sl / 5} v${-sl / 10} h${sl / 2}`" stroke="black"
        stroke-width="2" fill="none" /> -->
</template>

<style scoped></style>
