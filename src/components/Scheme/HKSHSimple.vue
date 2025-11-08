<script setup>
const { x, y, sl, sh, deg } = defineProps(["x", "y", "sl", "sh", "deg"]);
const L = sl / 1.9;
const H = sh / 1.5;
const h = H / 10;
</script>

<template>
  <path
    :transform="`rotate(${deg} ${x} ${y})`"
    :d="`M${x - L / 2} ${y + H / 2} h${L} v${-h} v${h} h${-L} v${-H} h${L} v${h}`"
    stroke="black"
    stroke-width="3"
    fill="none"
  />
  <path
    :transform="`rotate(${deg} ${x} ${y})`"
    :d="`M${x - L / 2 + h * 5} ${y} v${-(H - h * 2) / 2} v${H - h * 2} v${-(H - h * 2) / 2} h${L}`"
    stroke="black"
    stroke-width="3"
    fill="none"
  />
</template>

<style scoped></style>
