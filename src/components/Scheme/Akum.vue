<script setup>
const { x, y, r } = defineProps(["x", "y", "r"]);
</script>

<template>
  <path
    :d="`M${x - r / 2} ${y + r / 2} A0.5 0.5 0 1 0 ${x + r / 2} ${y + r / 2} v${-r} A0.5 0.5 0 1 0 ${x - r / 2} ${y - r / 2}z`"
    stroke="black"
    stroke-width="2"
    fill="white"
  />
  <path :d="`M${x - r / 2} ${y - r / 8} A0.5 0.35 0 1 0 ${x + r / 2} ${y - r / 8}`" stroke="black" stroke-width="1.5" fill="white" />
  <path :d="`M${x - r / 5} ${y} l${r / 5} ${r / 5} l${r / 5} ${-r / 5}z`" stroke="black" stroke-width="1.5" fill="white" />
  <path :d="`M${x} ${y + r} v${r}`" stroke="black" stroke-width="1.5" fill="white" />
</template>

<style scoped></style>
