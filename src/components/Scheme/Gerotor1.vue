<script setup>
import Point from "./Point.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
const r = () => sh / 2;
const a = () => r() / 4;
</script>

<template>
  <path :d="`M${x - 0.25 * sl} ${y + sh} v${-sh} h${sl / 2}`" stroke="black" stroke-width="2" fill="none" />
  <circle :cx="x" :cy="y" :r="r()" stroke="black" stroke-width="3" fill="white" />
  <path :d="`M${x - r() + 3} ${y} v${a()} l${a()} ${-a()} l${-a()} ${-a()}z`" stroke="black" stroke-width="3" />
  <path :d="`M${x + r() - 3} ${y} v${a()} l${-a()} ${-a()} l${a()} ${-a()}z`" stroke="black" stroke-width="3" />
  <path :d="`M${x + 0.25 * sl} ${y + sh} v${-sh}`" stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
