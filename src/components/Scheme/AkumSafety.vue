<script setup>
import Point from "./Point.vue";
import Safety from "./Safety.vue";
import Start from "./Start.vue";
import Hline from "./Hline.vue";
import Manometr from "./Manometr.vue";
import ShutOffWithHand from "./ShutOffWithHand.vue";
import Akum from "./Akum.vue";

const { x, y, sl, sh } = defineProps(["x", "y", "sl", "sh"]);
const width = 2;
const x1 = () => x() + sl() / 3;
const x2 = () => x() + (sl() * 2) / 3;
const x3 = () => x() + sl();
</script>

<template>
  <path :d="`M${x1()} ${y} v${sh()}`" stroke="black" stroke-width="2" />
  <path :d="`M${x2()} ${y} v${sh()}`" stroke="black" stroke-width="2" />
  <path :d="`M${x3()} ${y} v${sh()}`" stroke="black" stroke-width="2" />

  <Safety :x="x1()" :y="y + sh() / 2" :a="sl() / 5" direction="down" />

  <Point :x="x1()" :y="y" />
  <Point :x="x1()" :y="y + sh()" />
  <Point :x="x2()" :y="y" />
  <!-- <Point :x="x2" :y="y + sh()" /> -->
  <!-- <Point :x="x3" :y="y" />
  <Point :x="x3" :y="y + sh()" /> -->
  <!-- <path  " :d="`M${x + sl1 * 0.6} ${y} v${sh}`" stroke="black" stroke-width="2" /> -->

  <!-- <Start :x="x + sl() * 0.6" :y="y + sh() / 2 - sl() / 8" :a="sl() / 5" /> -->
  <Hline :x="x1()" :y="y" :L="(sl() * 2) / 3" :width="width" />
  <Hline :x="x1()" :y="y + sh()" :L="sl() / 3" :width="width" />
  <Manometr :x="x2()" :y="y + sh() / 2" :a="sl() / 10" />
  <ShutOffWithHand :x="x2()" :y="y + sh() / 2" :a="sh() / 6" :deg="0" />
  <ShutOffWithHand :x="x3()" :y="y + sh() / 2" :a="sh() / 6" :deg="0" :fill="true" />
  <Akum :x="x1()" :y="y - sh()" :r="sh() / 1.5" />
  <path :d="`M${x1()} ${y + sh()} v${sh() / 2}`" stroke="blue" stroke-width="3" fill="none" />
  <path :d="`M${x1() - sh() / 6} ${y + sh() * 1.4} v${sh() / 6} h${sh() / 3} v${-sh() / 6}`" stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
