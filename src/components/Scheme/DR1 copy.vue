<script setup>
const { x, y, type, arr } = defineProps(["x", "y", "type", "arr"]);
const x0 = 50;
const y0 = 0;
const lS = 150;
const hS = lS / 3;
const lS1 = type === 0 ? 0 : type === 1 ? lS * 0.75 : lS * 2;
const r = 10;
const j = 2 * hS;
const y1 = 8;
const width = 2;
</script>

<template>
  <defs>
    <symbol id="biezp">
      <path :d="'M' +
        `${x + x0} ${y + y0 + hS / 2} h${-hS / 2} v${hS} h${hS} v${-hS}z`
        " stroke="black" stroke-width="1" fill="white" />
      <path :d="'M' +
        `${x0 + x} ${y0 + y + hS / 6 + hS / 2} h${-hS / 5} v${hS / 1.5} v${-hS / 1.5}`
        " stroke="black" :stroke-dasharray="`${hS / 10}`" stroke-width="1" />
      <path :d="'M' +
        `${x0 + x - hS / 5} ${y0 + y + hS + hS / 5} h${-hS / 15} l${hS / 15} ${hS / 5} l${hS / 15} ${-hS / 5}z`
        " stroke="black" stroke-width=" 1" />
      <path :d="'M' +
        `${x0 + x} ${y0 + y + hS / 2} l${-hS / 2} ${-hS / 2} h${-hS / 8} v${hS} h${hS / 8}`
        " stroke="black" stroke-dasharray="1 2" stroke-width="1" fill="none" />
      <path :d="'M' +
        `${x + x0 + hS / 2} ${y + y0 + hS / 2 + hS / 5} l${hS / 15} ${hS / 2} l${hS / 15} ${-hS / 2} l${hS / 15}  ${hS / 2} l${hS / 15}  ${-hS / 2}`
        " stroke="black" stroke-width="0.5" fill="none" />
      <path :d="'M' +
        `${x + x0 + hS / 2 + hS / 9} ${y + y0 + hS + hS / 3} l${hS / 10} ${-0.75 * hS} l${-hS / 25} ${hS / 50} l${hS / 15} ${(-4 * hS) / 25} l${hS / 160} ${hS / 5.5} l${-hS / 35} ${-hS / 25}`
        " stroke="black" stroke-width="1" fill="black" />
    </symbol>
    <symbol id="start">
      <use xlink:href="#circle" :x="x0 + x - r" :y="y0 + y + y1 - r" />
      <path :d="'M' + `${x0 + x} ${y1} v${j + 5 + r - y1}`" stroke="black" stroke-width="2" />
      <use xlink:href="#circle" :x="x0 + x - r" :y="y0 + y + j + y1" />
      <path :d="'M' +
        `${x + x0} ${y + y0 + hS / 2 + y1 + hS / 6} h${-hS / 2} v${hS} h${hS * 2} v${-hS}z`
        " stroke="black" stroke-width="1" fill="white" />
      <path :d="'M' + `${x0 + x} ${y + y0 + hS / 2 + y1 + hS / 6} v${hS}`" stroke="black" stroke-width="2" />
      <path :d="'M' +
        `${x0 + x} ${y + y0 + hS / 2 + y1 + hS / 6} l${hS / 10} ${hS / 3} h${-hS / 5}z`
        " stroke="black" stroke-width="2" />
      <path :d="'M' +
        `${x0 + x} ${y + y0 + hS / 2 + y1 + hS / 6 + hS} l${hS / 10} ${-hS / 3} h${-hS / 5}z`
        " stroke="black" stroke-width="2" />
      <path :d="'M' + `${x0 + x + hS} ${y + y0 + hS / 2 + y1 + hS / 6} v${hS / 3}`" stroke="black" stroke-width="2" />
      <path :d="'M' +
        `${x0 + x + hS} ${y + y0 + hS / 2 + y1 + hS / 6 + hS / 3} h${-hS / 6} h${hS / 3}`
        " stroke="black" stroke-width="2" />
      <path :d="'M' +
        `${x0 + x + hS} ${y + y0 + hS / 2 + y1 + hS / 6 + (2 * hS) / 3} v${hS / 3}`
        " stroke="black" stroke-width="2" />
      <path :d="'M' +
        `${x0 + x + hS} ${y + y0 + hS / 2 + y1 + hS / 6 + (2 * hS) / 3} h${-hS / 6} h${hS / 3}`
        " stroke="black" stroke-width="2" />
    </symbol>
    <symbol id="h-line">
      <path :d="'M0 ' + width / 2 + `h${lS}`" stroke="black" :stroke-width="width" />
    </symbol>
    <symbol id="h-line-0">
      <path :d="'M0 ' + width / 2 + `h${lS1}`" stroke="black" :stroke-width="width" />
    </symbol>
    <symbol id="circle">
      <circle :cx="r" :cy="r" r="1" stroke="black" stroke-width="4" fill="black" />
    </symbol>
    <symbol id="0">
      <use v-for="p in [y1, j + y1 + r]" xlink:href="#h-line-0" :x="x0 + x" :y="y0 + p + y - width / 2" />
      <use xlink:href="#circle" :x="x0 + x - r + lS1 / 4" :y="y0 + y + y1 - r" />
      <path :d="'M' + `${x0 + x + lS1 / 4} ${0} v${j + 5 + r}`" stroke="black" stroke-width="2" />
      <use xlink:href="#circle" :x="x0 + x - r + lS1 / 4" :y="y0 + y + j + y1" />
      <use v-if="type" xlink:href="#biezp" :x="x + lS1 / 4" :y="y0 + y + y1 + hS / 6" />
      <use v-if="type === 2" xlink:href="#start" :x="x + (2 * lS1) / 3" :y="y0 + y" />
    </symbol>
    <symbol id="section">
      <use v-for="p in [y1, j + y1 + r]" xlink:href="#h-line" :x="x0 + x" :y="y0 + p + y - width / 2" />
      <path :d="'M' +
        `${x0 + x + 10} ${y0 + y + y1} v${j + r / 2}` +
        'A1 1 0 0 1' +
        `${x0 + x + 10} ${y0 + y + j + y1 + r * 1.5}` +
        'v5'
        " stroke="black" stroke-width="2" fill="none" />
      <use xlink:href="#circle" :x="x0 + x + 10 - r" :y="y0 + y + y1 - r" />

      <path :d="'M' + `${x0 + x + lS} ${y0 + y + j + y1 + r} v${r / 2 + 5}`" stroke="black" stroke-width="2" />
      <use xlink:href="#circle" :x="x0 + x + lS - r" :y="y0 + y + j + y1" />

      <path v-for="a in [0.45 * lS, 0.65 * lS]" :d="'M' +
        `${x0 + a + x} ${y0 + y} v${y1 - r / 2}` +
        'A1 1 0 0 1' +
        `${x0 + a + x} ${y0 + y + y1 + r / 2}` +
        'v' +
        j +
        'A1 1 0 0 1' +
        `${x0 + a + x} ${y0 + y + j + y1 + r * 1.5}` +
        'v5'
        " stroke="black" stroke-width="1" fill="none" />
    </symbol>
    <symbol id="valve">
      <path :d="'M' + `${x0 + x + 10} ${y0 + y} v${hS}`" stroke="black" stroke-width="2" fill="none" />
      <path :d="'M' + `${x0 + x + lS} ${y0 + y} v${hS}`" stroke="black" stroke-width="2" />
      <path v-if="n === 3" :d="'M' +
        `${x + x0} ${y + y0} v${hS} h${hS} v${-hS} v${hS} h${hS} v${-hS} v${hS} h${hS} v${-hS}z`
        " stroke="black" stroke-width="1" fill="white" />
      <path v-if="n === 2" :d="'M' +
        `${x + x0} ${y + y0} v${hS} h${hS} v${-hS} v${hS} h${hS} v${-hS}z`
        " stroke="black" stroke-width="1" fill="white" />
    </symbol>
  </defs>
  <use v-if="type" xlink:href="#0" :x="x0 + x" y="0" />
  <use v-for="(_, i) in arr.length" xlink:href="#section" :x="x0 + x + lS1 + i * lS" y="0" />
  <use v-for="(_, i) in N" xlink:href="#valve" :x="x0 + x + lS1 + i * lS" :y="2 * hS + 2 * r + y1" />
</template>

<style scoped></style>
