<script setup>
const { x, y, h, deg } = defineProps(["x", "y", "h", "deg"]);
</script>

<template>
  <path :d="`M${x} ${y} l${h} ${-h / 3} l${-h * 2} ${-h / 3} l${h * 2} ${-h / 3} h${-h}`"
    :transform="`rotate(${deg} ${x} ${y})`" stroke="black" stroke-width="1" fill="none" />
</template>

<style scoped></style>
