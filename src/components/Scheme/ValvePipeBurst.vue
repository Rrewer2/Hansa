<script setup>
import CheckValve from "./CheckValve.vue";
import Arrow from "./Arrow.vue";
import Spring from "./Spring.vue";
import Throttle from "./Throttle.vue";

const { x, y, r, sl, sh, data } = defineProps(["x", "y", "r", "sl", "sh", "data"]);

const pipeBurst = {
  AB: { left: true, right: true },
  A: { left: true, right: false },
  B: { left: false, right: true },
};
</script>

<template>
  <template v-if="data.lineBreak">
    <path v-if="!pipeBurst[data.lineBreak]?.left" :d="`M${x + 0.25 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <path v-if="!pipeBurst[data.lineBreak]?.right" :d="`M${x + 0.75 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <template v-if="pipeBurst[data.lineBreak]?.left">
      <path
        :d="`M${x + 0.25 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <path
        :d="`M${x + 0.25 * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <Arrow :x="x + 0.25 * sl" :y="y + sh / 2" :l="sh / 2" deg="0" />
      <Arrow :x="x + 0.25 * sl" :y="y + sh / 2" :l="sh / 2" deg="180" />
      <path
        :d="`M${x + 0.25 * sl} ${y + sh / 4} h${-sh + sh / 4} v${sh / 2} h${sh / 2} h${-sh / 4} v${-sh / 2}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <CheckValve :x="x + 0.25 * sl - sh / 2" :y="y + sh / 2" :r="r" deg="0" />
      <Spring :x="x + 0.25 * sl - sh / 4 - r" :y="y - sh + r / 4" :h="r" :transform="`rotate(${90} ${x} ${y})`" />
      <Throttle :x="x + 0.25 * sl" :y="y + sh / 16" :sl="sl * 0.9" :sh="sh * 0.9" />
      <path
        :d="`M${x + 0.25 * sl} ${y + sh - sh / 8} h${sh / 2 - sh / 8} v${-sh / 4 - sh / 16} h${-sh / 8}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <path
        :d="`M${x + 0.25 * sl} ${y - sh / 4 + sh / 8} h${-sh + sh / 8} v${sh / 2 + sh / 8} h${sh / 8}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
    </template>
    <template v-if="pipeBurst[data.lineBreak]?.right">
      <path
        :d="`M${x + 0.75 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <path
        :d="`M${x + 0.75 * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <Arrow :x="x + 0.75 * sl" :y="y + sh / 2" :l="sh / 2" deg="0" />
      <Arrow :x="x + 0.75 * sl" :y="y + sh / 2" :l="sh / 2" deg="180" />
      <path
        :d="`M${x + 0.75 * sl} ${y + sh / 4} h${-sh + sh / 4} v${sh / 2} h${sh / 2} h${-sh / 4} v${-sh / 2}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <CheckValve :x="x + 0.75 * sl - sh / 2" :y="y + sh / 2" :r="r" deg="0" />
      <Spring :x="x + 0.25 * sl - sh / 4 - r" :y="y - sh + r / 4 - sl / 2" :h="r" :transform="`rotate(${90} ${x} ${y})`" />
      <Throttle :x="x + 0.75 * sl" :y="y + sh / 16" :sl="sl * 0.9" :sh="sh * 0.9" />
      <path
        :d="`M${x + 0.75 * sl} ${y + sh - sh / 8} h${sh / 2 - sh / 8} v${-sh / 4 - sh / 16} h${-sh / 8}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <path
        :d="`M${x + 0.75 * sl} ${y - sh / 4 + sh / 8} h${-sh + sh / 8} v${sh / 2 + sh / 8} h${sh / 8}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
    </template>
  </template>
</template>

<style scoped></style>
