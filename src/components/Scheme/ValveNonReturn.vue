<script setup>
import CheckValve from "./CheckValve.vue";

const { x, y, r, sl, sh, data } = defineProps(["x", "y", "r", "sl", "sh", "data"]);

const NonReturn = {
  AB: { A: true, B: true, P: false, T: false },
  A: { A: true, B: false, P: false, T: false },
  B: { A: false, B: true, P: false, T: false },
};
</script>

<template>
  <template v-if="data.nonReturn">
    <path :d="`M${x + 0.25 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + 0.75 * sl} ${y} v${sh}`" stroke="black" stroke-width="2" fill="none" />
    <template v-if="NonReturn[data.nonReturn]?.A">
      <path
        v-if="!NonReturn[data.nonReturn]?.B"
        :d="`M${x + 0.75 * sl} ${y + sh / 2 + sh / 12} h${-sl / 2}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <path
        v-if="NonReturn[data.nonReturn]?.B"
        :d="`M${x + 0.25 * sl} ${y + sh / 2 + sh / 4} l${sl / 2.1}${-sh / 16} v${-sh / 16}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <CheckValve :x="x + 0.25 * sl" :y="y + sh / 2" :r="r" deg="0" />
    </template>
    <template v-if="NonReturn[data.nonReturn]?.B">
      <path
        v-if="!NonReturn[data.nonReturn]?.A"
        :d="`M${x + 0.25 * sl} ${y + sh / 2 + sh / 12} h${sl / 2}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <path
        v-if="NonReturn[data.nonReturn]?.A"
        :d="`M${x + 0.75 * sl} ${y + sh / 2 + sh / 4} l${-sl / 2.1}${-sh / 16} v${-sh / 16}`"
        stroke="black"
        stroke-width="2"
        stroke-dasharray="5 5"
        fill="none"
      />
      <CheckValve :x="x + 0.75 * sl" :y="y + sh / 2" :r="r" deg="0" />
    </template>
  </template>
</template>

<style scoped></style>
