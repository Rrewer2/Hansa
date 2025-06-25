<script setup>
import Spring from "./Spring.vue";

const { x, y, r, deg } = defineProps(["x", "y", "r", "deg"]);
</script>

<template>
  <path :d="`M${x - 1.75 * r} ${y + 0.25 * r} l${1.75 * r} ${1.75 * r} l${1.75 * r} ${-1.75 * r}`" stroke="black"
    stroke-width="1.5" fill="white" :transform="`rotate(${deg} ${x} ${y})`" />
  <circle :cx="x" :cy="y" :r="1.25 * r" stroke="black" stroke-width="1.5" fill="white" />
  <Spring :x="x" :y="y - 1.25 * r" :h="r" :transform="`rotate(${deg} ${x} ${y})`" />
  <!-- <Spring v-else :x="x" :y="y - 1.25 * r" :h="r" :deg="+deg + 90" /> -->
</template>

<style scoped></style>
