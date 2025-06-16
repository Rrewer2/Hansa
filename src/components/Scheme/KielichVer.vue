<script setup>
const { x, y, R } = defineProps(["x", "y", "R"]);
</script>

<template>
  <path
    :d="`M${x} ${y + R} h${-R} v${R * 0.25} h${R * 0.25} l${R * 0.25} ${R * 0.75} h${R} l${R * 0.25} ${-R * 0.75} h${R * 0.25} v${-R * 0.25}z`"
    stroke="black" stroke-width="1" fill="white" />
  <path :d="`M${x} ${y + R} v${R * 0.4} h${-R * 0.25} h${R * 0.5}`" stroke="black" stroke-width="1" fill="none" />
  <path :d="`M${x} ${y + 2 * R} v${-R * 0.4} h${-R * 0.25} h${R * 0.5}`" stroke="black" stroke-width="1" fill="none" />
</template>

<style scoped></style>
