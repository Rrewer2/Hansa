<script setup>
import CheckValve from "./CheckValve.vue";
import Throttle from "./Throttle.vue";

const { x, y, r, sl, sh, data } = defineProps(["x", "y", "r", "sl", "sh", "data"]);

const HKHQ = {
  "⨘AB": { left: true, right: true, check: false },
  "⨘A": { left: true, right: false, check: false },
  "⨘B": { left: false, right: true, check: false },
  "⇑AB": { left: true, right: true, check: true, deg: 180 },
  "⇑A": { left: true, right: false, check: true, deg: 180 },
  "⇑B": { left: false, right: true, check: true, deg: 180 },
  "⇓AB": { left: true, right: true, check: true, deg: 0 },
  "⇓A": { left: true, right: false, check: true, deg: 0 },
  "⇓B": { left: false, right: true, check: true, deg: 0 },
};
</script>

<template>
  <template v-if="data.flowControl">
    <path
      v-if="!HKHQ[data.flowControl]?.left || !HKHQ[data.flowControl]?.check"
      :d="`M${x + 0.25 * sl} ${y} v${sh}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <path
      v-if="!HKHQ[data.flowControl]?.right || !HKHQ[data.flowControl]?.check"
      :d="`M${x + 0.75 * sl} ${y} v${sh}`"
      stroke="black"
      stroke-width="2"
      fill="none"
    />
    <template v-if="HKHQ[data.flowControl]?.left">
      <path
        v-if="HKHQ[data.flowControl]?.check"
        :d="`M${x + 0.25 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <CheckValve
        v-if="HKHQ[data.flowControl]?.check"
        :x="x + 0.25 * sl - sh / 4"
        :y="y + sh / 2"
        :r="r"
        :deg="HKHQ[data.flowControl]?.deg"
      />
      <path
        v-if="HKHQ[data.flowControl]?.check"
        :d="`M${x + 0.25 * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <Throttle :x="x + 0.25 * sl + (sh / 4) * HKHQ[data.flowControl]?.check" :y="y + sh / 2" :sl="sl" :sh="sh" />
    </template>
    <template v-if="HKHQ[data.flowControl]?.right">
      <path
        v-if="HKHQ[data.flowControl]?.check"
        :d="`M${x + 0.75 * sl} ${y} v${sh / 4} h${-sh / 4} v${sh / 2} h${sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <CheckValve
        v-if="HKHQ[data.flowControl]?.check"
        :x="x + 0.75 * sl - sh / 4"
        :y="y + sh / 2"
        :r="r"
        :deg="HKHQ[data.flowControl]?.deg"
      />
      <path
        v-if="HKHQ[data.flowControl]?.check"
        :d="`M${x + 0.75 * sl} ${y} v${sh / 4} h${sh / 4} v${sh / 2} h${-sh / 4} v${sh / 4}`"
        stroke="black"
        stroke-width="2"
        fill="none"
      />
      <Throttle :x="x + 0.75 * sl + (sh / 4) * HKHQ[data.flowControl]?.check" :y="y + sh / 2" :sl="sl" :sh="sh" />
    </template>
  </template>
</template>

<style scoped></style>
