<script setup>
const { x, y, h, deg } = defineProps(["x", "y", "h", "deg"]);
</script>

<template>
  <path :d="`M${x} ${y} l${-h / 3} ${h} l${-h / 3} ${-h * 2} l${-h / 3} ${h * 2} v${-h}`" stroke="black"
    stroke-width="1" fill="none" :transform="`rotate(${deg} ${x} ${y})`" />
</template>

<style scoped></style>
