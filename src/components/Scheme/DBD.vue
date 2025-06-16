<script setup>
import Safety from "./Safety.vue";

const { x, y, a, unit, line, xSame } = defineProps([
  "x",
  "y",
  "a",
  "unit",
  "line",
  "xSame",
]);
</script>

<template>
  <path v-if="!unit.same" :d="`M${x - line()} ${y} h${line()}`" stroke="red" stroke-width="3" fill="none" />
  <path v-else :d="`M${xSame + line()} ${y} h${line()}`" stroke="red" stroke-width="3" fill="none" />
  <path v-if="!unit.same" :d="`M${x} ${y} h${line()} v${a * 1.5}`" stroke="blue" stroke-width="3" fill="none" />
  <path v-else :d="`M${xSame + line()} ${y} h${-line()} v${a * 1.5}`" stroke="blue" stroke-width="3" fill="none" />
  <path v-if="!unit.same" :d="`M${x + line() - a / 4} ${y + a * 1.4} v${a / 4} h${a / 2} v${-a / 4}`" stroke="black"
    stroke-width="2" fill="none" />
  <Safety v-if="!unit.same" v-bind="{ x, y, a, direction: 'right' }" />
  <Safety v-else v-bind="{ x: xSame + line(), y, a, direction: 'left' }" />
  <text v-if="!unit.same && unit.DBD" :x="x" :y="y - a" font-family="Arial" :font-size="25" text-anchor="middle">
    {{ unit.DBD }} bar
  </text>
  <text v-else="unit.DBD" :x="xSame + line()" :y="y - a" font-family="Arial" :font-size="25" text-anchor="middle">
    {{ unit.DBD }} bar
  </text>
</template>

<style scoped></style>
