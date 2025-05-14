<script setup>
const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <path
    :d="`M${x} ${y + h / 3} h${-h / 2} v${-h / 3} h${h / 24} l${h / 12} ${h / 12} l${h / 12} ${-h / 12} h${h / 24} l${h / 12} ${h / 12} l${h / 12} ${-h / 12}  h${h / 12}`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />

  <path
    :d="`M${x - h / 6} ${y - h / 12} v${-h / 6}`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />
  <path
    :d="`M${x - h / 3 - h / 24} ${y - h / 12} v${-h / 6}`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />

  <path
    :d="`M${x} ${y + (2 * h) / 3} h${-h / 2} v${h / 3} h${h / 6} l${h / 6} ${-h / 3} l${-h / 6} ${h / 3} h${h / 3}z`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />

  <path
    :d="`M${x + h * 2} ${y + (2 * h) / 3} h${h / 2} v${h / 3} h${-h / 6} l${-h / 6} ${-h / 3} l${h / 6} ${h / 3} h${-h / 3}z`"
    stroke="black"
    stroke-width="1"
    fill="none"
  />
</template>

<style scoped></style>
