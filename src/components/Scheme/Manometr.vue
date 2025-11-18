<script setup>
import Arrow from "./Arrow.vue";
import Point from "./Point.vue";
import ShutOffWithHand from "./ShutOffWithHand.vue";

const { x, y, a } = defineProps(["x", "y", "a"]);
</script>

<template>
  <!-- <Point :x="x" :y="y" /> -->
  <path :d="`M${x} ${y} v${-a / 2 + -a * 3.5}`" stroke="black" stroke-width="2" />
  <ShutOffWithHand :x="x" :y="y - 3 * a" :a="a / 2" />
  <circle :cx="x" :cy="y - 5 * a" :r="a" fill="white" stroke="black" stroke-width="1" />
  <Arrow :x="x" :y="y - 5 * a" :l="a * 1.5" deg="-45" />
</template>

<style scoped></style>
