<script setup>
const { x, y, R, mount } = defineProps(["x", "y", "R", "mount"]);
</script>

<template>
  <circle :cx="x" :cy="y" :r="R" stroke="black" stroke-width="2px" fill="white" />
  <text :x="x" :y="y + R / 2 + 2" font-family="Arial" :font-size="R * 1.5" fill="black" text-anchor="middle">M</text>
  <path v-if="mount.startsWith('B3')"
    :d="`M${-R + x} ${R * 1.25 + y} h${R * 0.25} l${R * 0.25} ${-R * 0.25} h${R} l${R * 0.25} ${R * 0.25} h${R * 0.25}`"
    fill="none" stroke="black" stroke-width="4" />
</template>

<style scoped></style>
