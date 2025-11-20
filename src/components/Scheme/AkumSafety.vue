<script setup>
import Point from "./Point.vue";
import Safety from "./Safety.vue";
import Hline from "./Hline.vue";
import Manometr from "./Manometr.vue";
import ShutOffWithHand from "./ShutOffWithHand.vue";
import Akum from "./Akum.vue";
import Text from "./Text.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
const width = 2;
const x1 = () => x() + sl() / 3;
const x2 = () => x() + (sl() * 4) / 6;
const x3 = () => x() + (sl() * 5) / 6;
</script>

<template>
  <path :d="`M${x3()} ${y + sh()} h${sh() * 0.5}`" stroke="red" stroke-width="3" />

  <path
    :d="`M${x1() - sh() / 2} ${y - sh() / 4} v${sh() * 1.5} h${sh() * 2.25} v${-sh() * 1.5} h${-sh() * 2.25}`"
    stroke="black"
    stroke-width="1"
    stroke-dasharray="10 20"
    fill="none"
  />

  <path :d="`M${x1()} ${y} v${sh()}`" stroke="black" stroke-width="2" />
  <path :d="`M${x2()} ${y} v${sh()}`" stroke="black" stroke-width="2" />
  <path :d="`M${x3()} ${y} v${sh()}`" stroke="black" stroke-width="2" />

  <Safety :x="x1()" :y="y + sh() / 2" :a="sl() / 5" direction="down" />
  <Text :x="x1() - sh()" :y="y + sh() / 2" :text="data?.pmax" afterText="bar" />
  <Text :x="x3() - sh() / 20" :y="y + sh() + sh() / 5" fs="18" :text="data?.threadP" />
  <Text :x="x1() + sh() * 0.4" :y="y + sh() + sh() / 5" fs="18" :text="data?.threadT" />
  <Text :x="x2() + sh() / 2.5" :y="y - sh() / 20" fs="18" :text="data?.threadM" />
  <Text :x="x1() + sh() / 3" :y="y - sh() / 20" fs="18" :text="data?.threadS" />

  <Point :x="x1()" :y="y" />
  <Point :x="x1()" :y="y + sh()" />
  <Point :x="x2()" :y="y" />

  <Hline :x="x1()" :y="y" :L="x3() - x1()" :width="width" />
  <Hline :x="x1()" :y="y + sh()" :L="sl() / 3" :width="width" />
  <Manometr :x="x2()" :y="y + sh() / 4" :a="sl() / 12" />
  <ShutOffWithHand :x="x2()" :y="y + sh() / 2" :a="sh() / 6" :deg="0" />
  <ShutOffWithHand :x="x3()" :y="y + sh() / 2" :a="sh() / 6" :deg="0" :fill="true" />
  <Akum :x="x1()" :y="y - sh() * 1.25" :r="sh() / 1.5" />
  <Text :x="x1()" :y="y - sh() * 2" :text="data?.qg" afterText="L" />

  <path :d="`M${x1()} ${y + sh()} v${sh() / 2}`" stroke="blue" stroke-width="3" fill="none" />
  <path :d="`M${x1() - sh() / 6} ${y + sh() * 1.4} v${sh() / 6} h${sh() / 3} v${-sh() / 6}`" stroke="black" stroke-width="2" fill="none" />
</template>

<style scoped></style>
