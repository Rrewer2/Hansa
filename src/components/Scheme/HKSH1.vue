<script setup>
import HKSHSimple from "./HKSHSimple.vue";
import Point from "./Point.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
const deg = () => {
  switch (data.form) {
    case "⇑":
      return 270;
    case "⇐":
      return 180;
    case "⇓":
      return 90;
    default:
      return 0;
  }
};
</script>

<template>
  <HKSHSimple :x="x" :y="y" :sl="sl" :sh="sh" :deg="deg()" />
  <!-- <Point :x="x - 0.25 * sl" :y="y" /> -->
  <template v-if="data.form === '⇑'">
    <path :d="`M${x - 0.25 * sl} ${y + sh} v${-sl / 10} h${sl / 8}`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + 0.25 * sl} ${y + sh} v${-sl / 10 - sl / 2} h${-sl / 8}`" stroke="black" stroke-width="2" fill="none" />
  </template>
  <template v-else-if="data.form === '⇓'">
    <path :d="`M${x - 0.25 * sl} ${y + sh} v${-sl / 10 - sl / 2} h${sl / 8}`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + 0.25 * sl} ${y + sh} v${-sl / 10} h${-sl / 8}`" stroke="black" stroke-width="2" fill="none" />
  </template>
  <template v-else>
    <path :d="`M${x - 0.25 * sl} ${y + sh} v${(-2 * sh) / 3}`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + 0.25 * sl} ${y + sh} v${(-2 * sh) / 3}`" stroke="black" stroke-width="2" fill="none" />
  </template>
</template>

<style scoped></style>
