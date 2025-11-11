<script setup>
import Point from "./Point.vue";

const { x, y, r, deg } = defineProps(["x", "y", "r", "deg"]);
const a = () => r() / 4;
</script>

<template>
  <circle :cx="x" :cy="y" :r="r()" stroke="black" stroke-width="3" fill="white" />
  <path
    :transform="`rotate(${deg} ${x} ${y})`"
    :d="`M${x - r() + 3} ${y} v${a()} l${a()} ${-a()} l${-a()} ${-a()}z`"
    stroke="black"
    stroke-width="3"
  />
  <path
    :transform="`rotate(${deg} ${x} ${y})`"
    :d="`M${x + r() - 3} ${y} v${a()} l${-a()} ${-a()} l${a()} ${-a()}z`"
    stroke="black"
    stroke-width="3"
  />
</template>

<style scoped></style>
