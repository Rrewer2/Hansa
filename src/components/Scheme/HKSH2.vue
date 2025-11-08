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
  <HKSHSimple v-if="data.form === '⇑' || data.form === '⇓'" :x="x - sh" :y="y" :sl="sl * 0.75" :sh="sh * 0.75" :deg="deg()" />
  <HKSHSimple v-else :x="x" :y="y - sh / 2" :sl="sl * 0.75" :sh="sh * 0.75" :deg="deg()" />
  <HKSHSimple v-if="data.form === '⇑' || data.form === '⇓'" :x="x + sh" :y="y" :sl="sl * 0.75" :sh="sh * 0.75" :deg="deg()" />
  <HKSHSimple v-else :x="x" :y="y + sh / 2" :sl="sl * 0.75" :sh="sh * 0.75" :deg="deg()" />
  <!-- <Point :x="x - 0.25 * sl" :y="y" /> -->
  <template v-if="data.form === '⇑'">
    <path
      :d="`M${x - 0.25 * sl} ${y + sh} v${-sl / 16} h${sl / 8} v${-sl / 10} h${-sl / 8} h${sl / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <path
      :d="`M${x + 0.25 * sl} ${y + sh} v${-sl / 16} h${-sl / 8} v${-sl / 2 + sl / 48} h${sl / 8} h${-sl / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <Point :x="x - 0.25 * sl + sl / 8" :y="y + sh - sl / 16 - sl / 10" />
    <Point :x="x + 0.25 * sl - sl / 8" :y="y + sh - sl / 16 - sl / 2 + sl / 48" />
  </template>
  <template v-else-if="data.form === '⇓'">
    <path
      :d="`M${x - 0.25 * sl} ${y + sh} v${-sl / 16} h${sl / 8} v${-sl / 2 + sl / 48} h${-sl / 8} h${sl / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <path
      :d="`M${x + 0.25 * sl} ${y + sh} v${-sl / 16} h${-sl / 8} v${-sl / 10} h${sl / 8} h${-sl / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <Point :x="x + 0.25 * sl - sl / 8" :y="y + sh - sl / 16 - sl / 10" />
    <Point :x="x - 0.25 * sl + sl / 8" :y="y + sh - sl / 16 - sl / 2 + sl / 48" />
  </template>
  <template v-else-if="data.form === '⇐'">
    <path
      :d="`M${x - 0.25 * sl} ${y + sh} h${-sh / 5} v${-sh} h${sh / 5 + sh / 5} v${-sh / 4} v${sh / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <path
      :d="`M${x + 0.25 * sl} ${y + sh} v${-sh} h${-sh / 5 - sh / 5} v${-sh / 4} v${sh / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
  </template>
  <template v-else>
    <path :d="`M${x - 0.25 * sl} ${y + sh} v${-sh} h${sh / 5} v${-sh / 4} v${sh / 2}`" stroke="black" stroke-width="2" fill="none" />
    <path
      :d="`M${x + 0.25 * sl} ${y + sh} h${sh / 5} v${-sh} h${-sh / 5 - sh / 5} v${-sh / 4} v${sh / 2}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
  </template>
</template>

<style scoped></style>
