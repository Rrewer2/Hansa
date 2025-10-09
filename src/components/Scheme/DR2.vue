<script setup>
import DR2nextSection from "./DR2nextSection.vue";
import DR2firstSection from "./DR2firstSection.vue";
import DR2firstSection3 from "./DR2firstSection3.vue";

const { x, y, type, N, sl, sl1, sh, text, start, startValve } = defineProps([
  "x",
  "y",
  "type",
  "N",
  "sl",
  "sl1",
  "sh",
  "text",
  "start",
  "startValve"
]);
</script>

<template>
  <DR2firstSection3 v-if="start" v-bind="{ x, y, type, sl, sl1, sh, text, startValve }" />
  <DR2firstSection v-bind="{ x, y, type, sl, sl1, sh }" />
  <DR2nextSection v-for="(_, n) in N" :sl="sl" :sh="sh" :x="x + sl1 + sl * 1.1 * (n + start)" :y="y" :r="sl / 40" />
  <text :x="x + sh" :y="y - sh / 8" font-family="Arial" :font-size="30" text-anchor="middle">P</text>
  <text :x="x + sh" :y="y + sh + sh / 3" font-family="Arial" :font-size="30" text-anchor="middle">T</text>
  <text v-for="(_, n) in N + start" :x="x + sl1 + sl * 0.35 + sl * 1.1 * n" :y="y + sh / 5" font-family="Arial"
    :font-size="20" text-anchor="middle">A{{ n + 1 }}</text>
  <text v-for="(_, n) in N + start" :x="x + sl1 + sl * 0.65 + sl * 1.1 * n" :y="y + sh / 5" font-family="Arial"
    :font-size="20" text-anchor="middle">B{{ n + 1 }}</text>
  <text v-if="text && type" :x="x - sh / 3" :y="y + sh / 10 + sh / 2" font-family="Arial" :font-size="30"
    text-anchor="middle">
    {{ text }} bar
  </text>
</template>

<style scoped></style>
