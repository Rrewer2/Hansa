<script setup>
const { x, y, sl, sh } = defineProps(["x", "y", "sl", "sh"]);
const l = sh / 12;
const lhose = sh / 4;
</script>

<template>
  <path :d="`M${x + 0.46 * sl} ${y} v${-l}`" stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + 0.46 * sl} ${y - l} A0.5 1 0 1 0 ${x + 0.46 * sl} ${y - l - lhose}`" stroke="black" stroke-width="5" fill="none" />
  <path :d="`M${x + 0.46 * sl} ${y - l - lhose} v${-l} h${-0.46 * sl + sl / 4} v${-l}`" stroke="black" stroke-width="2" fill="none" />
  <path :d="`M${x + (1 - 0.46) * sl} ${y} v${-l}`" stroke="black" stroke-width="2" fill="none" />
  <path
    :d="`M${x + (1 - 0.46) * sl} ${y - l} A0.5 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - l - lhose}`"
    stroke="black"
    stroke-width="5"
    fill="none"
  />
  <path :d="`M${x + (1 - 0.46) * sl} ${y - l - lhose} v${-l} h${0.46 * sl - sl / 4} v${-l}`" stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
