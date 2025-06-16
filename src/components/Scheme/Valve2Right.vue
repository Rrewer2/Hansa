<script setup>
const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <path
    :d="`M${x} ${y + (2 * h) / 3} h${h / 2} v${h / 3} h${-h / 6} l${-h / 6} ${-h / 3} l${h / 6} ${h / 3} h${-h / 3}z`"
    stroke="black" stroke-width="1" fill="none" />
  <path
    :d="`M${x - 2 * h} ${y + h / 3} l${-h / 10} ${h / 4} l${-h / 10} ${-h / 4} l${-h / 10} ${h / 4} l${-h / 10} ${-h / 4} l${-h / 10} ${h / 4} l${-h / 10} ${-h / 4}`"
    stroke="black" stroke-width="0.5" fill="none" />
</template>

<style scoped></style>
