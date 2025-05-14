<script setup>
import ValveArrow from "./ValveArrow.vue";

const { x, y, h } = defineProps(["x", "y", "h"]);
</script>

<template>
  <ValveArrow :x="x" :y="y + h / 2" :l="h * 1.1" deg="25" />
  <ValveArrow :x="x" :y="y + h / 2" :l="h * 1.1" deg="155" />
</template>

<style scoped></style>
