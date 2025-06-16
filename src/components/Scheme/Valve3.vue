<script setup>
import ValveX from "./ValveX.vue";
import ValveII from "./ValveII.vue";
import Valve3E from "./Valve3E.vue";
import Valve3G from "./Valve3G.vue";
import Valve3H from "./Valve3H.vue";
import Valve3J from "./Valve3J.vue";
import Valve3F from "./Valve3F.vue";
import Valve3L from "./Valve3L.vue";
import Valve3M from "./Valve3M.vue";
import Valve3P from "./Valve3P.vue";
import Valve3U from "./Valve3U.vue";
import Valve3W from "./Valve3W.vue";
import ValveLeft from "./ValveLeft.vue";
import ValveRight from "./ValveRight.vue";

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
  <path :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}v${h} h${h} v${-h}z`" stroke="black"
    stroke-width="1" fill="white" />
  <Valve3H v-if="spool === 'H'" :x="x" :y="y" :h="h" />
  <Valve3J v-if="spool === 'J'" :x="x" :y="y" :h="h" />
  <Valve3E v-if="spool === 'E'" :x="x" :y="y" :h="h" />
  <Valve3L v-if="spool === 'L'" :x="x" :y="y" :h="h" />
  <Valve3M v-if="spool === 'M'" :x="x" :y="y" :h="h" />
  <Valve3U v-if="spool === 'U'" :x="x" :y="y" :h="h" />
  <Valve3W v-if="spool === 'W'" :x="x" :y="y" :h="h" />

  <ValveX :x="x + position[spool] * h" :y="y" :h="h" />
  <ValveII :x="x - position[spool] * h" :y="y" :h="h" />
  <ValveLeft :x="x - h * 1.5" :y="y" :h="h" />
  <ValveRight :x="x + h * 1.5" :y="y" :h="h" />

  <Valve3F v-if="spool === 'F'" :x="x" :y="y" :h="h" />
  <Valve3P v-if="spool === 'P'" :x="x" :y="y" :h="h" />
  <Valve3G v-if="spool === 'G'" :x="x" :y="y" :h="h" />
</template>

<style scoped></style>
