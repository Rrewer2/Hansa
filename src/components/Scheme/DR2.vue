<script setup>
import DR2nextSection from "./DR2nextSection.vue";
import DR2firstSection from "./DR2firstSection.vue";
import DR2firstSection3 from "./DR2firstSection3.vue";

const { x, y, type, N, sl, sl1, sh, text } = defineProps([
  "x",
  "y",
  "type",
  "N",
  "sl",
  "sl1",
  "sh",
  "text",
]);
</script>

<template>
  <DR2firstSection3 v-if="type === 3" v-bind="{ x, y, type, sl, sl1, sh, text }" />
  <DR2firstSection v-else v-bind="{ x, y, type, sl, sl1, sh, text }" />
  <DR2nextSection v-for="(_, n) in N" :sl="sl" :sh="sh" :x="x + sl1 + sl * 1.1 * n" :y="y" :r="sl / 40" />
  <text :x="x + sl1 + sh / 5" :y="y + sh / 4" font-family="Arial" :font-size="30" text-anchor="middle">P</text>
  <text :x="x + sl1 + sh / 5" :y="y + sh - sh / 10" font-family="Arial" :font-size="30" text-anchor="middle">T</text>
  <text v-for="(_, n) in N" :x="x + sl1 + sl * 0.35 + sl * 1.1 * n" :y="y - sh / 10" font-family="Arial" :font-size="20"
    text-anchor="middle">A{{ n + 1 }}</text>
  <text v-for="(_, n) in N" :x="x + sl1 + sl * 0.65 + sl * 1.1 * n" :y="y - sh / 10" font-family="Arial" :font-size="20"
    text-anchor="middle">B{{ n + 1 }}</text>
  <text v-if="text && type" :x="x - sh / 3" :y="y + sh / 10 + sh / 2" font-family="Arial" :font-size="30"
    text-anchor="middle">{{ text }}
    bar
    <!-- <tspan :font-size="a">P</tspan>
        <tspan dy="0.3em" :font-size="a / 1.5">max</tspan> -->
    <!-- <tspan dy="-0.3em" :font-size="a">{{ text }} bar</tspan> -->
  </text>
</template>

<style scoped></style>
