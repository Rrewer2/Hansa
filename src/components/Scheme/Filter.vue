<script setup>
import CheckValve from './CheckValve.vue';

const { x, y, a ,text } = defineProps(["x", "y", "a", "text"]);
</script>

<template>
  <path :d="`M${x} ${y} l${a} ${-a} l${-a} ${-a} l${-a} ${a}z`" stroke="black" stroke-width="2" fill="white" />
  <path :d="`M${x - a} ${y - a} h${2 * a}`" stroke="black" stroke-dasharray="15 10" stroke-width="1" />
  <path :d="`M${x} ${y - 2 * a} h${a + a / 2} v${a}`" stroke="black" stroke-dasharray="15 10" stroke-width="2"
    fill="none" />
  <circle :cx="x + a + a / 2" :cy="y - a" :r="a / 4" stroke="black" stroke-width="1" fill="white" />
  <path :d="`M${x + a + a / 2} ${y - a} l${-a / 8} ${-a / 8} l${a / 4} ${a / 4}`" stroke="black" stroke-width="2" />
  <path :d="`M${x + a + a / 2} ${y - a} l${-a / 8} ${a / 8} l${a / 4} ${-a / 4}`" stroke="black" stroke-width="2" />
  <path :d="`M${x} ${y} h${-a - a / 2} v${-2 * a} h${a + a / 2}`" stroke="black" stroke-width="2" fill="none" />
  <CheckValve :x="x - a - a / 2" :y="y - a" :r="a / 5" :deg="180" />
  <text :x="x + 1.5 * a" :y="y - a / 8" font-family="Arial" :font-size="30" text-anchor="middle">
    {{ text }}
  </text>
</template>

<style scoped></style>
