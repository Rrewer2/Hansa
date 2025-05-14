<script setup>
import Point from "./Point.vue";

const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <path
    :d="`M${x - 0.2 * h} ${y} v${h}`"
    stroke="black"
    stroke-width="3"
    fill="white"
  />
  <path
    :d="`M${x + 0.2 * h} ${y} v${h}`"
    stroke="black"
    stroke-width="3"
    fill="white"
  />
  <path
    :d="`M${x - 0.2 * h} ${y + h / 2} h${0.4 * h}`"
    stroke="black"
    stroke-width="3"
    fill="white"
  />
  <Point :x="x - 0.2 * h" :y="y + h / 2" />
  <Point :x="x + 0.2 * h" :y="y + h / 2" />
</template>

<style scoped></style>
