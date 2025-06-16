<script setup>
import Arrow from "./Arrow.vue";
import Spring from "./Spring.vue";

const { x, y, a, direction } = defineProps(["x", "y", "a", "direction"]);
</script>

<template>
  <template v-if="direction === 'down'">
    <path :d="`M${x - a / 2} ${y - a / 2} h${a}v${a}h${-a}z`" stroke="black" stroke-width="1" fill="white" />
    <path :d="`M${x - a / 10} ${y + a / 6 - a / 2} h${-a / 5} v${a / 1.5} `" stroke="black"
      :stroke-dasharray="`${a / 10}` + 2" stroke-width="2" fill="none" />
    <path :d="`M${x - a / 10 - a / 5} ${y + 0.66 * a - a / 2} h${a / 10} l${-a / 10} ${a / 3} l${-a / 10} ${-a / 3}`"
      stroke="black" stroke-width=" 1" />
    <path :d="`M${x} ${y - a / 2} l${-a / 2} ${-a / 4} h${-a / 8} v${a - a / 4} h${a / 8}`" stroke="black"
      stroke-dasharray="5 5" stroke-width="1" fill="none" />
    <Spring :x="x + a / 2" :y="y" :h="a / 4" deg="180" />
    <!-- <path
      :d="`M${x + a / 2} ${y + a / 4} l${a / 10} ${-a / 2} l${a / 10} ${a / 2} l${a / 10} ${-a / 2} l${a / 10} ${a / 2}`"
      stroke="black" stroke-width="1" fill="none" /> -->
    <Arrow :x="x + a - a / 4" :y="y" :l="a * 1.5" deg="165" />
  </template>
  <template v-if="direction === 'right'">
    <path :d="`M${x - a / 2} ${y - a / 2} h${a}v${a}h${-a}z`" stroke="black" stroke-width="1" fill="white" />
    <path :d="`M${x + a / 6 - a / 2} ${y - a / 10} v${-a / 5} h${a / 1.5} `" stroke="black"
      :stroke-dasharray="`${a / 10}` + 2" stroke-width="2" fill="none" />
    <path :d="`M${x + 0.66 * a - a / 2} ${y - a / 10 - a / 5} v${a / 10} l${a / 3} ${-a / 10} l${-a / 3} ${-a / 10}`"
      stroke="black" stroke-width=" 1" />
    <path :d="`M${x - a / 2} ${y} l${-a / 4} ${-a / 2} v${-a / 8} h${a - a / 4} v${a / 8}`" stroke="black"
      stroke-dasharray="5 5" stroke-width="1" fill="none" />
    <Spring :x="x" :y="y + a / 2" :h="a / 4" deg="270" />
    <Arrow :x="x" :y="y + a - a / 4" :l="a * 1.5" deg="105" />
  </template>
  <template v-if="direction === 'left'">
    <path :d="`M${x - a / 2} ${y - a / 2} h${a}v${a}h${-a}z`" stroke="black" stroke-width="1" fill="white" />
    <path :d="`M${x - a / 6 + a / 2} ${y - a / 10} v${-a / 5} h${-a / 1.5} `" stroke="black"
      :stroke-dasharray="`${a / 10}` + 2" stroke-width="2" fill="none" />
    <path :d="`M${x - 0.66 * a + a / 2} ${y - a / 10 - a / 5} v${a / 10} l${-a / 3} ${-a / 10} l${a / 3} ${-a / 10}`"
      stroke="black" stroke-width=" 1" />
    <path :d="`M${x + a / 2} ${y} l${a / 4} ${-a / 2} v${-a / 8} h${-a + a / 4} v${a / 8}`" stroke="black"
      stroke-dasharray="5 5" stroke-width="1" fill="none" />
    <Spring :x="x" :y="y + a / 2" :h="a / 4" deg="270" />
    <Arrow :x="x" :y="y + a - a / 4" :l="a * 1.5" deg="-105" />
  </template>
</template>

<style scoped></style>
