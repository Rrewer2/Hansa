<script setup>
import Arrow from "./Arrow.vue";

const { x, y, sl, sh } = defineProps(["x", "y", "sl", "sh"]);
</script>

<template>
  <path :d="`M${x - sl / 24} ${y - sh / 6} A1 2 0 0 1 ${x - sl / 24} ${y + sh / 6}`" stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + sl / 24} ${y - sh / 6} A1 2 0 1 0 ${x + sl / 24} ${y + sh / 6}`" stroke="black" stroke-width="2" fill="none" />
  <Arrow :x="x" :y="y" :l="sh / 2" deg="60" />
</template>

<style scoped></style>
