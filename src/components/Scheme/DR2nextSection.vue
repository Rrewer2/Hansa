<script setup>
import Hline from "./Hline.vue";
import Point from "./Point.vue";

const { x, y, r, sl, sh } = defineProps(["x", "y", "r", "sl", "sh"]);
</script>

<template>
  <Hline v-for="p in [0, sh]" :x="x" :y="p + y" :L="sl * 1.1" />
  <path :d="`M${x} ${y} v${sh - r}A1 1 0 0 1 ${x} ${y + sh + r} v${sh / 8}`" stroke="black" stroke-width="2"
    fill="none" />
  <Point :x="x" :y="y" />

  <path :d="`M${x + sl} ${y + sh} v${r + sh / 8}`" stroke="black" stroke-width="2" />
  <Point :x="x + sl" :y="y + sh" />

  <path v-for="a in [0.46 * sl, (1 - 0.46) * sl]"
    :d="`M${a + x} ${y - 2 * r} v${r} A1 1 0 0 1 ${a + x} ${y + r} v${sh - 2 * r} A1 1 0 0 1 ${a + x} ${y + sh + r} v${sh / 8}`"
    stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
