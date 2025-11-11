<script setup>
import GerotorSimple from "./GerotorSimple.vue";

const { x, y, sl, sh } = defineProps(["x", "y", "sl", "sh", "data"]);
const r = () => sh / 2;
</script>

<template>
  <path :d="`M${x - 0.25 * sl} ${y + sh} v${-sh} h${sl / 2}`" stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + 0.25 * sl} ${y + sh} v${-sh}`" stroke="black" stroke-width="2" fill="none" />
  <GerotorSimple v-bind="{ x, y, r, deg: 0 }" />
</template>

<style scoped></style>
