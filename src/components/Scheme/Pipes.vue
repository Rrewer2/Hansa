<script setup>
const { x, y, unit, R, xM, yM, c, getSL, getSL1, getSh, xT } = defineProps([
  "x",
  "y",
  "unit",
  "R",
  "xM",
  "yM",
  "c",
  "getSL",
  "getSL1",
  "getSh",
  "xT",
]);
const gap = 2 * R + 0.8 * R + 2 * c * R * 0.8;
</script>

<template>
  <path v-if="unit.mount.startsWith('B3')"
    :d="`M${x(c)} ${y + 300} h${-getSh(unit) * 1.5} v${R * 10.5 - c * 10} h${xM - x(c) + getSh(unit) * 1.5 + gap} v${yM - (R * 10.5 - c * 10) - 300}`"
    stroke="red" stroke-width="3" fill="none" />
  <path v-else
    :d="`M${x(c)} ${y + 300} h${-getSh(unit) * 1.5} v${R * 10.5 - c * 10} h${xM - x(c) + getSh(unit) * 1.5 + gap} v${yM - (R * 10.5 - c * 10) - 300 + gap}  h${-gap}`"
    stroke="red" stroke-width="3" fill="none" />
  <path
    :d="`M${x(c) + getSL1(unit) + getSL(unit) * 1.1 * unit.HKSH.length} ${y + 300 + getSh(unit)} h${getSh(unit) / 4} v${R * 8} h${xT - (x(c) + getSL1(unit) + getSL(unit) * 1.1 * unit.HKSH.length) - getSh(unit) / 4} v${R * 8}`"
    stroke="blue" stroke-width="5" fill="none" />
</template>

<style scoped></style>
