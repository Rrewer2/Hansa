<script setup>
import { reducedPower, round } from "../../services/functions";
import Kielich from "./Kielich.vue";
import Motor from "./Motor.vue";
import Pump from "./Pump.vue";

const { x, y, pumps, mount, R } = defineProps([
  "x",
  "y",
  "pumps",
  "mount",
  "R",
]);
</script>

<template>
  <Motor v-bind="{ x, y, R, mount }" />
  <Pump v-bind="{ x, y, R, mount, pumps }" />
  <Kielich v-bind="{ x, y, R, mount }" />
  <text v-if="round(reducedPower(pumps))" :x="x - R * 2.5" :y="y - R / 4" font-family="Arial" :font-size="R / 2"
    fill="black" text-anchor="middle">
    <tspan :x="x - R * 2.5" :dy="0">
      {{ round(reducedPower(pumps)) }} kW
    </tspan>
    <tspan :x="x - R * 2.5" :dy="R / 2">
      <slot></slot> min⁻¹
    </tspan>
  </text>
</template>

<style scoped></style>
