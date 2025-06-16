<script setup>
import ValveX from "./ValveX.vue";
import ValveII from "./ValveII.vue";
import Valve3E from "./Valve3E.vue";
import Valve3G from "./Valve3G.vue";
import Valve3H from "./Valve3H.vue";
import Valve3J from "./Valve3J.vue";
import Valve2Left from "./Valve2Left.vue";
import Valve2Right from "./Valve2Right.vue";
import Valve2A from "./Valve2A.vue";
import Valve2B from "./Valve2B.vue";
import Valve2D1Left from "./Valve2D1Left.vue";
import Valve2D1Right from "./Valve2D1Right.vue";
import Valve2Y1Left from "./Valve2Y1Left.vue";
import Valve2Y1Right from "./Valve2Y1Right.vue";
import ValveFix from "./ValveFix.vue";

const { x, y, spool, h } = defineProps(["x", "y", "spool", "h"]);
const position = {
  E: -1,
  J: -1,
  H: -1,
  L: -1,
  M: -1,
  U: -1,
  W: -1,
  G: 1,
  F: 1,
  P: 1,
};
</script>

<template>
  <path v-if="
    spool[1] === 'A' || ['A', 'C', 'D', 'D^', 'D1'].some((el) => el === spool)
  " :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`" stroke="black" stroke-width="1"
    fill="white" />
  <path v-if="spool[1] === 'B' || ['B', 'Y', 'Y1'].some((el) => el === spool)"
    :d="`M${x} ${y}h${-0.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`" stroke="black" stroke-width="1" fill="white" />
  <Valve3H v-if="spool[0] === 'H'" :x="x" :y="y" :h="h" />
  <Valve3G v-if="spool[0] === 'G'" :x="x" :y="y" :h="h" />
  <Valve3J v-if="spool[0] === 'J'" :x="x" :y="y" :h="h" />
  <Valve3E v-if="spool[0] === 'E'" :x="x" :y="y" :h="h" />
  <ValveX v-if="spool[1] === 'A' && position[spool[0]] < 0" :x="x - h" :y="y" :h="h" />
  <ValveX v-if="spool[1] === 'B' && position[spool[0]] > 0" :x="x + h" :y="y" :h="h" />
  <ValveII v-if="spool[1] === 'B' && position[spool[0]] < 0" :x="x + h" :y="y" :h="h" />
  <ValveII v-if="spool[1] === 'A' && position[spool[0]] > 0" :x="x - h" :y="y" :h="h" />

  <ValveX v-if="spool === 'D' || spool === 'D^' || spool === 'C'" :x="x - h" :y="y" :h="h" />
  <ValveII v-if="spool === 'D' || spool === 'D^' || spool === 'C'" :x="x" :y="y" :h="h" />
  <ValveX v-if="spool === 'Y'" :x="x" :y="y" :h="h" />
  <ValveII v-if="spool === 'Y'" :x="x + h" :y="y" :h="h" />
  <Valve2A v-if="spool === 'A'" :x="x" :y="y" :h="h" />
  <Valve2A v-if="spool === 'B'" :x="x + h" :y="y" :h="h" />
  <Valve2B v-if="spool === 'B'" :x="x" :y="y" :h="h" />
  <Valve2B v-if="spool === 'A'" :x="x - h" :y="y" :h="h" />

  <Valve2D1Left v-if="spool === 'D1'" :x="x - h" :y="y" :h="h" />
  <Valve2D1Right v-if="spool === 'D1'" :x="x" :y="y" :h="h" />
  <Valve2Y1Left v-if="spool === 'Y1'" :x="x" :y="y" :h="h" />
  <Valve2Y1Right v-if="spool === 'Y1'" :x="x + h" :y="y" :h="h" />

  <Valve2Left v-if="spool[1] === 'A' || ['A', 'C', 'D', 'D1'].some((el) => el === spool)" :x="x - h * 1.5" :y="y"
    :h="h" />
  <Valve2Right v-if="spool[1] === 'B' || ['B', 'Y', 'Y1'].some((el) => el === spool)" :x="x + h * 1.5" :y="y" :h="h" />
  <ValveFix v-if="spool.at(-1) === '^'" :x="x - h * 1.5" :y="y" :h="h" />
</template>

<style scoped></style>
