<script setup>
const { x, y, a } = defineProps(["x", "y", "a"]);
</script>

<template>
  <circle
    :cx="x"
    :cy="y - 3 * a"
    :r="a"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <circle
    :cx="x"
    :cy="y - a"
    :r="a"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <path
    :d="'M' + `${x} ${y - a}` + `h-${a} h${a * 2}`"
    stroke="black"
    stroke-width="1"
  />
  <path :d="'M' + `${x} ${y}` + 'v100'" stroke="black" stroke-width="1" />
  <circle
    :cx="x"
    :cy="y - 2.5 * a"
    :r="a / 4"
    stroke="black"
    stroke-width="1"
    fill="black"
  />
  <circle
    :cx="x"
    :cy="(-a * 11) / 3 + y"
    r="2.5"
    stroke="black"
    stroke-width="1"
    fill="black"
  />
  <path
    :d="'M' + `${x} ${(-a * 11) / 3 + y}` + `v${a}`"
    stroke="black"
    stroke-width="6"
  />
  <path
    :d="
      'M' +
      `${x} ${y - a * 1.1}` +
      'h-5 A1 1 0 0 1' +
      `${x - 5} ${y - a * 1.1 - 8}` +
      'h5 v-8 v8 h5 A1 1 0 0 1 ' +
      `${x + 5} ${y - a * 1.1}z`
    "
    stroke="black"
    stroke-width="0.5"
    fill="none"
  />
</template>

<style scoped></style>
