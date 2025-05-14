<script setup>
import Point from "./Point.vue";

const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <path
    :d="`M${x - 0.2 * h} ${y} v${h / 2} h${0.4 * h} v${h / 2}`"
    stroke="black"
    stroke-width="3"
    fill="white"
  />
  <path
    :d="`M${x + 0.2 * h} ${y} v${h / 4} h${-h / 8} h${h / 4}`"
    stroke="black"
    stroke-width="3"
    fill="white"
  />
  <path
    :d="`M${x - 0.2 * h} ${y + h} v${-h / 4} h${-h / 8} h${h / 4}`"
    stroke="black"
    stroke-width="3"
    fill="white"
  />
</template>

<style scoped></style>
