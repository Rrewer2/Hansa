<script setup>
const { x, y, a = 30 } = defineProps(["x", "y", "a"]);
</script>

<template>
  <path :d="'M' +
    `${x + a / 10} ${y - a / 2 - a / 9} l${0.75 * a} ${-a / 10} l${-a / 50} ${-a / 25} l${(3 * a) / 25} ${a / 50} l${-a / 10} ${(3 * a) / 50} v${-a / 25}`
    " stroke="black" stroke-width="1" fill="black" />
</template>

<style scoped></style>
