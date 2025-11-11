<script setup>
import GerotorSimple from "./GerotorSimple.vue";

const { x, y, sl, sh } = defineProps(["x", "y", "sl", "sh", "data"]);
const r = () => sh / 3;
</script>

<template>
  <path :d="`M${x - 0.25 * sl} ${y + sh} v${-sh * 1.75} h${sl / 2}`" stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + 0.25 * sl} ${y + sh} v${-sh * 1.75}`" stroke="black" stroke-width="2" fill="none" />
  <GerotorSimple v-bind="{ x: x - 0.25 * sl, y, r, deg: 90 }" />
  <GerotorSimple v-bind="{ x: x + 0.25 * sl, y, r, deg: 90 }" />
  <GerotorSimple v-bind="{ x, y: y + sh - sh * 1.75, r, deg: 0 }" />
</template>

<style scoped></style>
