<script setup>
import Arrow from "./Arrow.vue";
import CheckValve from "./CheckValve.vue";
import Point from "./Point.vue";

const { x, y, r, sl, sh, data } = defineProps([
  "x",
  "y",
  "r",
  "sl",
  "sh",
  "data",
]);

const HKHR = {
  "011": { A: false, B: false, P: true, T: false },
  "012": { A: true, B: true, P: false, T: false },
  "013": { A: true, B: false, P: false, T: false },
  "014": { A: false, B: true, P: false, T: false },
  "016": { A: false, B: false, P: false, T: true },
};
</script>

<template>
  <template v-if="data.check">
    <path
      :d="`M${x} ${y} h${sl}`"
      stroke="black"
      stroke-width="1"
      stroke-dasharray="5 10"
    />
    <path
      v-for="a in [x, x + sl]"
      :d="`M${a} ${y} v${sh}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />

    <path
      v-if="!HKHR[data.check]?.A"
      :d="`M${x + 0.46 * sl} ${y} v${sh}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <path
      v-if="!HKHR[data.check]?.B"
      :d="`M${x + (1 - 0.46) * sl} ${y} v${sh}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <template v-if="HKHR[data.check]?.A">
      <path
        :d="`M${x + 0.46 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <path
        v-if="!HKHR[data.check]?.B"
        :d="`M${x + (1 - 0.46) * sl} ${y + sh / 2 + sh / 12} h${-sh / 2}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <Point
        v-if="!HKHR[data.check]?.B"
        :x="x + (1 - 0.46) * sl"
        :y="y + sh / 2 + sh / 12"
      />
      <path
        v-if="HKHR[data.check]?.B"
        :d="`M${x + 0.46 * sl} ${y + sh / 2 + sh / 4} v${-sh / 8} h${sh / 2}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <Point
        v-if="HKHR[data.check]?.B"
        :x="x + 0.46 * sl"
        :y="y + sh / 2 + sh / 4"
      />
      <CheckValve :x="x + 0.46 * sl - sh / 4" :y="y + sh / 2" :r="r" deg="0" />
    </template>
    <template v-if="HKHR[data.check]?.B">
      <path
        :d="`M${x + (1 - 0.46) * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <path
        v-if="!HKHR[data.check]?.A"
        :d="`M${x + 0.46 * sl} ${y + sh / 2 + sh / 12} `"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <path
        v-if="HKHR[data.check]?.A"
        :d="`M${x + (1 - 0.46) * sl} ${y + sh / 2 + sh / 4} v${-sh / 16} h${-sh / 2.5} v${-sh / 16}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <Point
        v-if="HKHR[data.check]?.A"
        :x="x + (1 - 0.46) * sl"
        :y="y + sh / 2 + sh / 4"
      />
      <CheckValve
        :x="x + (1 - 0.46) * sl + sh / 4"
        :y="y + sh / 2"
        :r="r"
        deg="0"
      />
    </template>
    <template v-if="HKHR[data.check]?.P">
      <CheckValve :x="x" :y="y + sh / 2" :r="r" deg="180" />
    </template>
    <template v-if="HKHR[data.check]?.T">
      <CheckValve :x="x + sl" :y="y + sh / 2" :r="r" deg="0" />
    </template>
  </template>
</template>

<style scoped></style>
