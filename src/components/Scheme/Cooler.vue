<script setup>
const { x, y, a, join } = defineProps(["x", "y", "a", "In", "join"]);
</script>

<template>
  <path :d="`M${x} ${y} l${a * 1.25} ${-a * 1.25} l${-a * 1.25} ${-a * 1.25} l${-a * 1.25} ${a * 1.25}z`" stroke="black"
    stroke-width="1" fill="white" />
  <path :d="`M${x - a} ${y - a * 1.25} l${a / 2} ${-a / 6} v${a / 3}z`" fill="black" stroke-width="1" />
  <path :d="`M${x + a} ${y - a * 1.25} l${-a / 2} ${-a / 6} v${a / 3}z`" fill="black" stroke-width="1" />
  <path :d="`M${x - a} ${y - a * 1.25} h${a * 2}`" stroke="black" stroke-width="2" />

  <path :d="`M${x + 1.5 * a} ${y - a * 1.25 * 1.15} h${a / 2}`" stroke="black" stroke-width="1" />
  <path :d="`M${x + 1.5 * a} ${y - a * 1.25 * 0.85} h${a / 2}`" stroke="black" stroke-width="1" />
  <path
    :d="`M${x + a * 1.5} ${y - a * 1.25} l${a / 2} ${a} A1 1 1 1 1 ${x + a} ${y - a * (1.25 - 1)} l${a / 2} ${-a} l${a / 2} ${-a}  A1 1 0 0 0 ${x + a} ${y - a * (1.25 + 1)}z`"
    stroke="black" stroke-width="1" fill="white" />
  <circle :cx="x + 2.5 * a" :cy="y - a * 1.25" :r="a / 2" stroke="black" stroke-width="1" fill="white" />
  <text :x="x - a" :y="y - 2.5 * a" font-family="Arial" :font-size="30" text-anchor="middle">{{ join }}</text>
  <text :x="x - a" :y="y + 0.5 * a" font-family="Arial" :font-size="30" text-anchor="middle">{{ join }}</text>
</template>

<style scoped></style>
