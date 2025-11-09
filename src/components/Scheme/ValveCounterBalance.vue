<script setup>
import CheckValve from "./CheckValve.vue";
import Safety from "./Safety.vue";
import Throttle from "./Throttle.vue";

const { x, y, r, sl, sh, data } = defineProps(["x", "y", "r", "sl", "sh", "data"]);

const counterBalance = {
  AB: { left: true, right: true },
  A: { left: true, right: false },
  B: { left: false, right: true },
};
</script>

<template>
  <template v-if="data.balance">
    <path v-if="!counterBalance[data.balance]?.left" :d="`M${x + 0.25 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <path v-if="!counterBalance[data.balance]?.right" :d="`M${x + 0.75 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <template v-if="counterBalance[data.balance]?.right && counterBalance[data.balance]?.left">
      <path
        :d="`M${x + 0.25 * sl + sh / 4} ${y + (sh * 3) / 4} l${sh} ${-sh / 4}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
      <path
        :d="`M${x + 0.75 * sl - sh / 4} ${y + (sh * 3) / 4} l${-sh} ${-sh / 4}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
    </template>
    <template v-if="counterBalance[data.balance]?.left">
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
      <path
        v-if="!counterBalance[data.balance]?.right"
        :d="`M${x + 0.75 * sl} ${y + sh / 2 + sh / 8} h${-sl / 2 + sh / 4}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
      <CheckValve :x="x + 0.25 * sl - sh / 4" :y="y + sh / 2" :r="r" deg="0" />
      <Safety :x="x + 0.25 * sl + sh / 4" :y="y + sh / 2" :a="sh / 3" direction="rightDown" />
    </template>
    <template v-if="counterBalance[data.balance]?.right">
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
      <path
        v-if="!counterBalance[data.balance]?.left"
        :d="`M${x + 0.25 * sl} ${y + sh / 2 + sh / 8} h${sl / 2 - sh / 4}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
      <CheckValve :x="x + 0.75 * sl + sh / 4" :y="y + sh / 2" :r="r" deg="0" />
      <Safety :x="x + 0.75 * sl - sh / 4" :y="y + sh / 2" :a="sh / 3" direction="down" />
    </template>
  </template>
</template>

<style scoped></style>
