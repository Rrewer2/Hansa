<script setup>
const { x, y, a } = defineProps(["x", "y", "a"]);
</script>

<template>
  <path :d="`M${x} ${y} l${a} ${-a} l${-a} ${-a} l${-a} ${a}z`" stroke="black" stroke-width="1" fill="white" />
  <path :d="`M${x - a} ${y - a} h${2 * a}`" stroke="black" stroke-dasharray="15 10" stroke-width="1" />
  <circle :cx="x + a + a / 4" :cy="y - a" :r="a / 4" stroke="black" stroke-width="1" fill="white" />
  <path :d="`M${x + a + a / 4} ${y - a} l${-a / 8} ${-a / 8} l${a / 4} ${a / 4}`" stroke="black" stroke-width="1" />
  <path :d="`M${x + a + a / 4} ${y - a} l${-a / 8} ${a / 8} l${a / 4} ${-a / 4}`" stroke="black" stroke-width="1" />
</template>

<style scoped></style>
