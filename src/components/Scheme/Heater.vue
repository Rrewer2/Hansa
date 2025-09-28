<script setup>
const { x, y, u, H } = defineProps(["x", "y", "u", 'H']);
const ystart = y + H() - u;
</script>

<template>
  <path :d="`M${x + 2 * u} ${ystart} v${u} h${u} v${-u} h${H() / 2} v${-u} h${-H() / 2} v${-u} h${-u} v${u}z`"
    stroke="#000" stroke-width="2" fill="none" />
  <path
    :d="`M${x + u * 3} ${ystart - u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u} l${u / 2} ${u} l${u / 2} ${-u}`"
    stroke="#000" stroke-width="2" fill="none" />
  <text :x="x - 8 * u" :y="y + H() - u" font-family="Arial" :font-size="u * 2" fill="black" text-anchor="middle">
    <slot></slot>
  </text>
</template>

<style scoped></style>
