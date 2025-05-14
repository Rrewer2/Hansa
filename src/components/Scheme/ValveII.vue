<script setup>
import ValveArrow from "./ValveArrow.vue";

const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <ValveArrow :x="x - 0.2 * h" :y="y + h / 2" :l="h" deg="0" />
  <ValveArrow :x="x + 0.2 * h" :y="y + h / 2" :l="h" deg="180" />
</template>

<style scoped></style>
