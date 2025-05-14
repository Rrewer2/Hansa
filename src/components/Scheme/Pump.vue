<script setup>
import { round } from "../../services/functions";
import Point from "./Point.vue";

const { x, y, R, mount, pumps } = defineProps([
  "x",
  "y",
  "R",
  "mount",
  "pumps",
]);

const r = () => R * 0.8;
const xP = (i, pumps) => x + 2 * R + r() * (1 + 2 * i);
</script>
<template>
  <template v-for="(pump, i) in pumps">
    <path
      :transform="`rotate(${mount.startsWith('B3') ? 0 : 90} ${x} ${y})`"
      :d="`M${xP(i, pumps)} ${y} v${r() * 2.5}z`"
      stroke="black"
      stroke-width="2"
    />
    <circle
      :transform="`rotate(${mount.startsWith('B3') ? 0 : 90} ${x} ${y})`"
      :cx="xP(i, pumps)"
      :cy="y"
      :r="r()"
      stroke="black"
      stroke-width="2px"
      fill="white"
    />
    <path
      :transform="`rotate(${mount.startsWith('B3') ? 0 : 90} ${x} ${y})`"
      :d="`M${xP(i, pumps)} ${y - 0.9 * r()} l${r() / 5} ${r() / 3} h${-r() / 2.5}z`"
      stroke="black"
      stroke-width="2"
    />
    <text
      v-if="mount.startsWith('B3')"
      :transform="`rotate(-90 ${xP(i, pumps)} ${y})`"
      :x="xP(i, pumps) + 2 * R"
      :y="y - R / 5"
      font-family="Arial"
      :font-size="R / 2"
      text-anchor="middle"
    >
      {{ round(pump.Q) }} L/min
    </text>
    <text
      v-else
      :x="x + R * 2"
      :y="y + 3.3 * R + i * 2 * R * 0.8"
      font-family="Arial"
      :font-size="R / 2"
      text-anchor="middle"
    >
      {{ round(pump.Q) }} L/min
    </text>
  </template>
</template>

<style scoped></style>
