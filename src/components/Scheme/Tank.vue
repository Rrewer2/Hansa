<script setup>
import ShutOff from "./ShutOff.vue";

const { x, y, L, H, pumps } = defineProps(["x", "y", "L", "H", "pumps"]);
// const H = () => H - 100 - y;
const h = 0;
const hZlew = 30;
const u = 30;
const s = 8;
</script>

<template>
  <path
    :d="`M${x} ${y + 1} v${h} h${L} v${-h}z`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <path
    :d="`M${x} ${y + h + s} h${u} l${u} ${H()} v${hZlew} h${L - 4 * u} v${-hZlew} l${u} ${-H()} h${u}`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <path
    :d="`M${x + 2.5 * u} ${y + h + s + H() + hZlew} v${H() / 5} h${u} l${u / 2} ${-H() / 5}`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <path
    :d="`M${x + L - 2.5 * u} ${y + h + s + H() + hZlew} v${H() / 5} h${-u} l${-u / 2} ${-H() / 5}`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <path
    :d="`M${x + L - 3.5 * u} ${y + h + s + H() / 4} v${H() / 2} h${u} v${-H() / 2}z`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <path
    :d="`M${x + L - 3.5 * u + s} ${y + h + s + H() / 4 + s} v${H() / 2 - 2 * s} h${u - 2 * s} v${-H() / 2 + 2 * s}z`"
    stroke="#000"
    stroke-width="2"
    fill="none"
  />
  <ShutOff
    :x="x + L - 2 * u"
    :y="y + h + s + H() + hZlew / 2"
    :a="2 * s"
    deg="90"
  />
  <text
    :x="x + L - 400"
    :y="y + H() - u"
    font-family="Arial"
    :font-size="u"
    fill="black"
    text-anchor="middle"
    >L-HV 46</text
  >
  <text
    :x="x + L - 400"
    :y="y + H()"
    font-family="Arial"
    :font-size="u"
    fill="black"
    text-anchor="middle"
  >
    <slot></slot>
  </text>
</template>

<style scoped></style>
