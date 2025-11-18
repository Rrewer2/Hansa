<script setup>
const { x, y, a, deg, fill } = defineProps(["x", "y", "a", "deg", "fill"]);
</script>

<template>
  <path
    :d="`M${x} ${y} l${0.5 * a} ${a} h${-a} l${0.5 * a} ${-a}`"
    stroke="black"
    stroke-width="2"
    :fill="fill ? 'white' : 'black'"
    :transform="`rotate(${deg ? deg : 0} ${x} ${y})`"
  />
  <path
    :d="`M${x} ${y} l${0.5 * a} ${-a} h${-a} l${0.5 * a} ${a}`"
    stroke="black"
    stroke-width="2"
    :fill="fill ? 'white' : 'black'"
    :transform="`rotate(${deg ? deg : 0} ${x} ${y})`"
  />
</template>

<style scoped></style>
