<script setup>
import ValveArrow from "./ValveArrow.vue";

const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <path
    :d="`M${x - 0.2 * h} ${y} v${h / 3} h${-h / 8} h${h / 4}`"
    stroke="black"
    stroke-width="3"
    fill="none"
  />
  <ValveArrow :x="x" :y="y + h / 2" :l="h * 1.1" deg="25" />
</template>

<style scoped></style>
