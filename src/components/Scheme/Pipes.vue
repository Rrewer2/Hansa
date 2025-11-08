<script setup>
import { pumpCounting } from "../../services/functions";

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
  <path
    v-if="unit.mount.startsWith('B3')"
    :d="`M${x(c)} ${y + 300} h${-getSh(unit) * 1.5} v${R * 10.5 - c * 10} h${xM - x(c) + getSh(unit) * 1.5 + gap} v${yM - (R * 10.5 - c * 10) - 600}`"
    stroke="red"
    stroke-width="3"
    fill="none"
  />
  <path
    v-else
    :d="`M${x(c)} ${y + 300} h${-getSh(unit) * 1.5} v${R * 10.5 - c * 10} h${xM - x(c) + getSh(unit) * 1.5 + gap} v${yM - (R * 10.5 - c * 10) - 600 + gap}  h${-gap}`"
    stroke="red"
    stroke-width="3"
    fill="none"
  />
  <text :x="x(c) - 100" :y="y + 300 - 20" font-family="Arial" :font-size="R * 0.5" fill="black" text-anchor="middle">
    {{ pumpCounting(unit).pipeP }}
  </text>
  <path
    :d="`M${x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start)} 
    ${y + 300 + getSh(unit)}
    h${getSh(unit) * 1.5} 
    v${xT - (x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start)) - getSh(unit) * 1.5 < 0 ? R * 10.5 - c * 10 - getSh(unit) : 0} 
    h${xT - (x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start)) - getSh(unit) * 1.5} 
    v${xT - (x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start)) - getSh(unit) * 1.5 < 0 ? R * 7 : R * 16}`"
    stroke="blue"
    stroke-width="5"
    fill="none"
  />
  <text
    :x="x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start) + 100"
    :y="y + 300 - 20 + getSh(unit)"
    font-family="Arial"
    :font-size="R * 0.5"
    fill="black"
    text-anchor="middle"
  >
    {{ pumpCounting(unit).pipeT }}
  </text>
</template>

<style scoped></style>
