<script setup>
const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <path
    :d="`M${x - 0.2 * h} ${y} v${h / 2} h${0.4 * h} v${-h / 2} v${h}`"
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
  <path
    :d="`M${x - 0.2 * h + h / 8} ${y + h / 3} A0.5 1 0 0 1 ${x - 0.2 * h + h / 8} ${y + 0.1 * h}`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <path
    :d="`M${x + 0.2 * h + h / 8} ${y + h / 3} A0.5 1 0 0 1 ${x + 0.2 * h + h / 8} ${y + 0.1 * h}`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <path
    :d="`M${x - 0.2 * h - h / 8} ${y + h / 3} A0.5 1 0 0 0 ${x - 0.2 * h - h / 8} ${y + 0.1 * h}`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <path
    :d="`M${x + 0.2 * h - h / 8} ${y + h / 3} A0.5 1 0 0 0 ${x + 0.2 * h - h / 8} ${y + 0.1 * h}`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
</template>

<style scoped></style>
