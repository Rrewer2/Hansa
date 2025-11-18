<script setup>
import ShutOff from "./ShutOff.vue";

const { x, y, a, deg, fill } = defineProps(["x", "y", "a", "deg", "fill"]);
</script>

<template>
  <path
    :transform="`rotate(${deg ? deg - 90 : -90} ${x} ${y})`"
    :d="`M${x} ${y} v${-a} h${-a / 2} h${a}`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <ShutOff :x="x" :y="y" :a="a" :deg="deg" :fill="fill" />
</template>

<style scoped></style>
