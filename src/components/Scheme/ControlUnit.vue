<script setup>
import DBD from "./DBD.vue";
import DR2 from "./DR2.vue";
import HKHMP from "./HKHMP.vue";
import HKHQ from "./HKHQ.vue";
import HKHR from "./HKHR.vue";
import HKSH from "./HKSH.vue";
import Pipes from "./Pipes.vue";
import Valve from "./Valve.vue";

const { x, y, unit, R, xT, xM, yM, c } = defineProps([
  "x",
  "y",
  "unit",
  "R",
  "xT",
  "xM",
  "yM",
  "c",
]);
const sectionLength = 320;
const getSL = (unit) => sectionLength - unit.HKSH.length * 12;
const getSL1 = (unit) =>
  getSL(unit) * 0.5 * (!unit.DR2type ? 0.5 : unit.DR2type);
const getSh = (unit) => getSL(unit) * 0.35;
const xV = (unit, i) => x(c) + getSL1(unit) + i * (getSL(unit) * 1.1);
const yV = y + 300 + getSh(unit) + getSh(unit) / 10;
const gap = 2 * R + 0.8 * R + 2 * c * R * 0.8;
const yValve = (data) => {
  if (data.throttle && data.check && data.directPress) return 3 * getSh(unit);
  if (
    (data.throttle && data.check) ||
    (data.throttle && data.directPress) ||
    (data.check && data.directPress)
  )
    return 2 * getSh(unit);
  if (data.throttle || data.check || data.directPress) return getSh(unit);
  return 0;
};
const yHKHMP = (data) => {
  if (data.throttle && data.check) return 2 * getSh(unit);
  if (data.throttle || data.check) return getSh(unit);
  return 0;
};
const yHKHQ = (data) => (data.check ? getSh(unit) : 0);
</script>

<template>
  <Pipes v-if="!unit.same" v-bind="{ x, y, unit, R, xM, yM, c, getSL, getSL1, getSh, xT }" />
  <HKSH v-if="!unit.same" v-for="(data, i) in unit.HKSH" :x="xV(unit, i)" :y="y - 5 + unit.HKSH.length * 10"
    v-bind="{ sl: getSL(unit), data }" />
  <DR2 v-if="!unit.same" :x="x(c)" :y="y + 300" :type="unit.DR2type" :N="unit.HKSH.length"
    v-bind="{ sl: getSL(unit), sl1: getSL1(unit), sh: getSh(unit) }" :text="unit.p" />
  <HKHR v-if="!unit.same" v-for="(data, i) in unit.HKSH" v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)" :y="yV" :r="getSL(unit) / 30" />
  <HKHQ v-if="!unit.same" v-for="(data, i) in unit.HKSH" v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)" :y="yV + yHKHQ(data)" :r="getSL(unit) / 30" />
  <HKHMP v-if="!unit.same" v-for="(data, i) in unit.HKSH" v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)" :y="yV + yHKHMP(data)" :r="getSL(unit) / 30" />
  <Valve v-if="!unit.same" v-for="(data, i) in unit.HKSH" v-bind="{ sl: getSL(unit), data }" :x="xV(unit, i)"
    :y="yV + yValve(data)" />

  <DBD v-if="unit.DBD" :x="x(c) - getSh(unit)" :xSame="x(c - 1) - getSh(unit) / 2" :y="y + 300 + R * 8"
    :a="getSL(unit) / 6" :unit="unit" :line="() => getSh(unit) / 2" />
  <path v-if="unit.mount.startsWith('B3') && unit.same"
    :d="`M${x(c - 1)} ${y + 300} h${-getSh(unit) * 1.5} v${R * 6} h${getSh(unit) * 2} v${R * 3.5} h${xM - x(c - 1) - getSh(unit) / 2 + gap} v${yM - R * 9.5 - 300}`"
    stroke="red" stroke-width="3" fill="none" />
  <path v-if="!unit.mount.startsWith('B3') && unit.same"
    :d="`M${x(c - 1)} ${y + 300} h${-getSh(unit) * 1.5} v${getSh(unit) * 5.5 - c * 15} h${xM - x(c - 1) + getSh(unit) * 1.5 + gap} v${yM - (getSh(unit) * 5.5 - c * 15) - 300 + gap}  h${-gap}`"
    stroke="red" stroke-width="15" fill="none" />
</template>

<style scoped></style>
