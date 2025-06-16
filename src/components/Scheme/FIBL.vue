<script setup>
const { x, y, a } = defineProps(["x", "y", "a"]);
</script>

<template>
  <path :d="`M${x} ${y} l${a} ${-a} l${-a} ${-a} l${-a} ${a}z`" stroke="black" stroke-width="1" fill="white" />
  <path :d="`M${x} ${y} v${a}`" stroke="black" stroke-width="1" fill="none" />
  <path :d="`M${x - a} ${y - a} h${2 * a}`" stroke="black" stroke-dasharray="15 10" stroke-width="1" />
  <path :d="`M${x - a / 4} ${y - 2.25 * a} v${a / 2}`" stroke="black" stroke-width="2" />
  <path :d="`M${x + a / 4} ${y - 2.25 * a} v${a / 2}`" stroke="black" stroke-width="2" />
  <path :d="`M${x - a / 2} ${y - 2 * a - a / 10} A ${a / 2} ${a / 2} 0 0 1 ${x + a / 2} ${y - 2 * a - a / 10}`"
    fill="none" stroke="black" stroke-width="2" />
</template>

<style scoped></style>
