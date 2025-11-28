<script setup>
import Cooler from "./Cooler.vue";

const { x, y, a, join } = defineProps(["x", "y", "a", "In", "join"]);
</script>

<template>
  <path :d="`M${x} ${y + 4 * a} v${-a * 8} h${a * 4} v${a * 8}`" stroke="blue" stroke-width="3" fill="none" />
  <path :d="`M${x + 4 * a} ${y - a} h${-a}`" stroke="black" stroke-width="1" fill="white" />
  <path :d="`M${x + 4 * a} ${y - 1.5 * a} h${-a}`" stroke="black" stroke-width="1" fill="white" />
  <Cooler v-bind="{ x, y, a, join, isUnit: true }" />
  <circle :cx="x + 4 * a" :cy="y - a * 1.25" :r="a / 2" stroke="black" stroke-width="2px" fill="white" />
  <path :d="`M${x + 4 * a} ${y - a * 1.25 - (0.9 * a) / 2} l${a / 2 / 5} ${a / 2 / 3} h${-a / 2 / 2.5}z`" stroke="black" stroke-width="2" />
</template>

<style scoped></style>
