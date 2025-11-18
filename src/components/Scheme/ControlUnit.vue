<script setup>
import DBD from "./DBD.vue";
import DR2 from "./DR2.vue";
import HKHR from "./HKHR.vue";
import HKHQ from "./HKHQ.vue";
import HKHMP from "./HKHMP.vue";
import HKZNS from "./HKZNS.vue";
import Pipes from "./Pipes.vue";
import Valve from "./Valve.vue";
import ValveNonReturn from "./ValveNonReturn.vue";
import ValveFlowControl from "./ValveFlowControl.vue";
import ValveHoses from "./ValveHoses.vue";
import ValveCounterBalance from "./ValveCounterBalance.vue";
import HKSH from "./HKSH.vue";
import AkumSafety from "./AkumSafety.vue";

const { x, y, unit, R, xT, xM, yM, c, order, aboveBlock, belowBlock } = defineProps([
  "x",
  "y",
  "unit",
  "R",
  "xT",
  "xM",
  "yM",
  "c",
  "order",
  "aboveBlock",
  "belowBlock",
]);
const sectionLength = 350;
const getSL = (unit) => sectionLength - unit.HKSH.length * 12;
const getSL1 = (unit) => getSL(unit) * 0.5 * (!unit.DR2type ? 0.5 : unit.DR2type);
const getSh = (unit) => getSL(unit) * 0.35;
const xV = (unit, i) => x(c) + getSL1(unit) + (i + unit.start) * (getSL(unit) * 1.1);
const yV = () => y() + 300 + getSh(unit) + getSh(unit) / 10;
const gap = 2 * R() + 0.8 * R() + 2 * c * R() * 0.8;
const yValve = ({ throttle, check, directPress, counter }) => (!!throttle + !!check + !!directPress + !!counter) * getSh(unit);
const yHKHMP = ({ throttle, check, counter }) => (!!throttle + !!check + !!counter) * getSh(unit);
const yHKHQ = (data) => !!data.check * getSh(unit);
const yHKZNS = (data) => (!!data.check + !!data.throttle) * getSh(unit);
const yUp = () => y() + 300 - getSh(unit) / 8 - (3 * getSh(unit)) / 2;
const yVFC = () => yUp();
const yVCB = (data) => yUp() - getSh(unit) * !!data.flowControl;
const yVNR = (data) => yUp() - getSh(unit) * (!!data.flowControl + !!data.balance);
const xHKSH = (unit, i) => x(c) + getSL1(unit) + (i + unit.start) * (getSL(unit) * 1.1) + getSL(unit) / 2;
const yHKSH = ({ nonReturn, flowControl, balance }) => yUp() - getSh(unit) * (!!nonReturn + !!flowControl + !!balance);
</script>

<template>
  <Pipes v-if="!unit.same" v-bind="{ x, y: y(), unit, R: R(), xM, yM, c, getSL, getSL1, getSh, xT, aboveBlock, belowBlock }" />

  <DR2
    v-if="!unit.same"
    :x="x(c)"
    :y="y() + 300"
    :type="unit.DR2type"
    :N="unit.HKSH.length"
    :start="unit.start"
    :startValve="unit.startValve"
    v-bind="{ sl: getSL(unit), sl1: getSL1(unit), sh: getSh(unit) }"
    :text="unit.p"
  />
  <HKHR
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yV()"
    :r="getSL(unit) / 30"
  />
  <HKHQ
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yV() + yHKHQ(data)"
    :r="getSL(unit) / 30"
  />
  <HKHMP
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yV() + yHKHMP(data)"
    :r="getSL(unit) / 30"
  />
  <HKZNS
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yV() + yHKZNS(data)"
    :r="getSL(unit) / 30"
  />
  <Valve
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: () => getSL(unit), data }"
    :x="() => xV(unit, i)"
    :y="() => yV() + yValve(data)"
  />

  <ValveHoses
    v-if="!unit.same"
    v-for="(_, i) in unit.HKSH"
    :x="xV(unit, i)"
    :y="y() + 300 - getSh(unit) / 8"
    v-bind="{ sh: getSh(unit), sl: getSL(unit) }"
  />
  <ValveNonReturn
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yVNR(data)"
    :r="getSL(unit) / 30"
  />
  <ValveFlowControl
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yVFC()"
    :r="getSL(unit) / 30"
  />
  <ValveCounterBalance
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    v-bind="{ sl: getSL(unit), sh: getSh(unit), data }"
    :x="xV(unit, i)"
    :y="yVCB(data)"
    :r="getSL(unit) / 30"
  />
  <HKSH
    v-if="!unit.same"
    v-for="(data, i) in unit.HKSH"
    :x="xHKSH(unit, i)"
    :y="yHKSH(data)"
    v-bind="{ sh: getSh(unit), sl: getSL(unit), data }"
  />
  <AkumSafety
    v-if="unit.aku"
    :x="() => x(c) - getSh(unit) * 1.5 - getSL1(unit) * 2"
    :y="y() + 300 - getSh(unit)"
    :sl="() => getSL(unit)"
    :sh="() => getSh(unit)"
  />
  <DBD
    v-if="unit.DBD"
    :x="x(c) - getSh(unit)"
    :xSame="x(c - 1) - getSh(unit) / 2"
    :y="y() + R() * 8"
    :a="getSL(unit) / 6"
    :unit="unit"
    :line="() => getSh(unit) / 2"
  />
  <path
    v-if="unit.mount.startsWith('B3') && unit.same"
    :d="`M${x(c - 1)} ${y() + 300} h${-getSh(unit) * 1.5} v${R() * 6} h${getSh(unit) * 2} v${R() * 3.5} h${xM - x(c - 1) - getSh(unit) / 2 + gap} v${yM - R() * 9.5 - 300}`"
    stroke="red"
    stroke-width="3"
    fill="none"
  />
  <path
    v-if="!unit.mount.startsWith('B3') && unit.same"
    :d="`M${x(c - 1)} ${y() + 300} h${-getSh(unit) * 1.5} v${getSh(unit) * 5.5 - c * 15} h${xM - x(c - 1) + getSh(unit) * 1.5 + gap} v${yM - (getSh(unit) * 5.5 - c * 15) - 300 + gap}  h${-gap}`"
    stroke="red"
    stroke-width="15"
    fill="none"
  />
  <text
    v-for="x1 in [x(c) + getSh(unit) / 6, x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start)]"
    :x="x1"
    :y="y() + 300 - getSh(unit) / 8"
    font-family="Arial"
    :font-size="24"
    text-anchor="middle"
  >
    {{ order["block" + c]?.blockData?.threadP.split("″")[0].replace(" ", "") }}
  </text>
  <text
    v-for="x1 in [x(c) + getSh(unit) / 6, x(c) + getSL1(unit) + getSL(unit) * 1.1 * (unit.HKSH.length + unit.start)]"
    :x="x1"
    :y="y() + 300 + getSh(unit) + getSh(unit) / 4"
    font-family="Arial"
    :font-size="24"
    text-anchor="middle"
  >
    {{ order["block" + c]?.blockData?.threadT.split("″")[0].replace(" ", "") }}
  </text>
  <text
    v-for="(_, n) in unit.HKSH.length + unit.start"
    :x="x(c) + getSL1(unit) + getSL(unit) * 0.33 + getSL(unit) * 1.1 * n"
    :y="y() + 300 - getSh(unit) / 10"
    font-family="Arial"
    :font-size="24"
    text-anchor="middle"
  >
    {{ order["block" + c]?.blockData?.threadA.split("″")[0].replace(" ", "") }}
  </text>
  <text
    v-for="(_, n) in unit.HKSH.length + unit.start"
    :x="x(c) + getSL1(unit) + getSL(unit) * 0.67 + getSL(unit) * 1.1 * n"
    :y="y() + 300 - getSh(unit) / 10"
    font-family="Arial"
    :font-size="24"
    text-anchor="middle"
  >
    {{ order["block" + c]?.blockData?.threadB.split("″")[0].replace(" ", "") }}
  </text>
</template>

<style scoped></style>
