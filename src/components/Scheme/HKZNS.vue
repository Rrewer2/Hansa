<script setup>
import Arrow from "./Arrow.vue";
import CheckValve from "./CheckValve.vue";
import Point from "./Point.vue";
import Safety from "./Safety.vue";

const { x, y, r, sl, sh, data } = defineProps(["x", "y", "r", "sl", "sh", "data"]);

const HKZNS = {
  AB: { left: true, right: true, deg: 0 },
  A: { left: true, right: false, deg: 0 },
  B: { left: false, right: true, deg: 0 },
};
</script>

<template>
  <template v-if="data.counter">
    <path :d="`M${x} ${y} h${sl}`" stroke="black" stroke-width="1" stroke-dasharray="5 10" />
    <path v-for="a in [x, x + sl]" :d="`M${a} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />

    <path v-if="!HKZNS[data.counter]?.left" :d="`M${x + 0.46 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <path v-if="!HKZNS[data.counter]?.right" :d="`M${x + (1 - 0.46) * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <template v-if="HKZNS[data.counter]?.right && HKZNS[data.counter]?.left">
      <path :d="`M${x + 0.46 * sl} ${y + (sh * 3) / 4} l${sh / 2} ${-sh / 3}`" stroke="black" stroke-width="2" stroke-dasharray="5 5" />
      <path
        :d="`M${x + (1 - 0.46) * sl} ${y + (sh * 3) / 4} l${-sh / 2} ${-sh / 3}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
    </template>
    <template v-if="HKZNS[data.counter]?.left">
      <path
        :d="`M${x + 0.46 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <Point :x="x + 0.46 * sl - sh / 4" :y="y + sh / 4" />
      <Point :x="x + 0.46 * sl - sh / 4" :y="y + (3 * sh) / 4" />
      <path
        :d="`M${x + 0.46 * sl - sh / 4} ${y + sh / 4} h${-sl / 3 + sh / 4} v${sh / 2} h${sl / 3 - sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <path
        v-if="!HKZNS[data.counter]?.right"
        :d="`M${x + (1 - 0.46) * sl} ${y + sh / 2 + sh / 8} h${-sh / 2}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
      <CheckValve :x="x + 0.46 * sl - sl / 3" :y="y + sh / 2" :r="r" :deg="HKZNS[data.counter]?.deg" />
      <Safety :x="x + 0.46 * sl - sh / 4" :y="y + sh / 2" :a="sh / 3" direction="rightDown" />
    </template>
    <template v-if="HKZNS[data.counter]?.right">
      <path
        :d="`M${x + (1 - 0.46) * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <Point :x="x + (1 - 0.46) * sl + sh / 4" :y="y + sh / 4" />
      <Point :x="x + (1 - 0.46) * sl + sh / 4" :y="y + (3 * sh) / 4" />
      <path
        :d="`M${x + (1 - 0.46) * sl + sh / 4} ${y + sh / 4} h${sl / 3 - sh / 4} v${sh / 2} h${-sl / 3 + sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <path
        v-if="!HKZNS[data.counter]?.left"
        :d="`M${x + 0.46 * sl} ${y + sh / 2 + sh / 8} h${sh / 2}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
      />
      <CheckValve :x="x + (1 - 0.46) * sl + sl / 3" :y="y + sh / 2" :r="r" :deg="HKZNS[data.counter]?.deg" />
      <Safety :x="x + (1 - 0.46) * sl + sh / 4" :y="y + sh / 2" :a="sh / 3" direction="down" />
    </template>
  </template>
</template>

<style scoped></style>
