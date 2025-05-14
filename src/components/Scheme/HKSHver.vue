<script setup>
const { x, y, sl } = defineProps(["x", "y", "sl"]);
</script>

<template>
  <path
    :d="`M${x} ${y} v${-sl / 2} h${-sl / 20} h${sl / 20} v${sl / 2} h${-sl / 4} v${-sl / 2} h${sl / 20}`"
    stroke="black"
    stroke-width="2"
    fill="none"
  />
  <path
    :d="`M${x - sl / 8} ${y - sl / 8} h${-sl / 10} h${sl / 5} h${-sl / 10} v${-sl / 2}`"
    stroke="black"
    stroke-width="2"
    fill="none"
  />
</template>

<style scoped></style>
