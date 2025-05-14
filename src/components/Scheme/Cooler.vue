<script setup>
const { x, y, a } = defineProps(["x", "y", "a"]);
</script>

<template>
  <path
    :d="`M${x} ${y} l${a} ${-a} l${-a} ${-a} l${-a} ${a}z`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <path
    :d="`M${x - a} ${y - a} l${a / 2} ${-a / 6} v${a / 3}z`"
    fill="black"
    stroke-width="1"
  />
  <path
    :d="`M${x + a} ${y - a} l${-a / 2} ${-a / 6} v${a / 3}z`"
    fill="black"
    stroke-width="1"
  />
  <path :d="`M${x - a} ${y - a} h${a * 2}`" stroke="black" stroke-width="2" />

  <path
    :d="`M${x + 1.5 * a} ${y - a * 1.15} h${a / 2}`"
    stroke="black"
    stroke-width="1"
  />
  <path
    :d="`M${x + 1.5 * a} ${y - a * 0.85} h${a / 2}`"
    stroke="black"
    stroke-width="1"
  />
  <path
    :d="`M${x + a * 1.5} ${y - a} l${a / 2} ${a} A1 1 1 1 1 ${x + a} ${y} l${a / 2} ${-a} l${a / 2} ${-a}  A1 1 0 0 0 ${x + a} ${y - 2 * a}z`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <circle
    :cx="x + 2.5 * a"
    :cy="y - a"
    :r="a / 2"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
</template>

<style scoped></style>
