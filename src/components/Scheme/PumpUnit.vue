<script setup>
import { reducedPower, round } from "../../services/functions";
import Kielich from "./Kielich.vue";
import Motor from "./Motor.vue";
import Pump from "./Pump.vue";

const { x, y, pumps, mount, R, text, dir } = defineProps(["x", "y", "pumps", "mount", "R", "text", "dir"]);
</script>

<template>
  <Motor v-bind="{ x, y, R, mount }" />
  <Pump v-bind="{ x, y, R, mount, pumps }" />
  <Kielich v-bind="{ x, y, R, mount }" />
  <text v-if="round(reducedPower(pumps))" :x="x" :y="y - R * 2" font-family="Arial" :font-size="R / 2" fill="black" text-anchor="middle">
    <tspan :x="x" :dy="0"> {{ text }} kW </tspan>
    <tspan :x="x" :dy="R / 2"> <slot></slot> min⁻¹ </tspan>
  </text>
  <path
    v-if="dir"
    :d="`M${x + R / 2} ${y - R} A1 0.35 1 1 0 ${x - R / 2} ${y - R}` + 'l10 -2 l-10 2 v-10'"
    stroke="black"
    stroke-width="1"
    fill="none"
  />
  <path
    v-else
    :d="`M${x - R / 2} ${y - R} A1 0.35 1 1 1 ${x + R / 2} ${y - R}` + 'l-10 -2 l10 2 v-10'"
    stroke="black"
    stroke-width="4"
    fill="none"
  />
</template>

<style scoped></style>
