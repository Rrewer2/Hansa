<script setup>
import Text from "./Text.vue";

const { x, y, a, join, isUnit = false } = defineProps(["x", "y", "a", "In", "join", "isUnit"]);
</script>

<template>
  <path
    :d="`M${x} ${y} l${a * 1.25} ${-a * 1.25} l${-a * 1.25} ${-a * 1.25} l${-a * 1.25} ${a * 1.25}z`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <path :d="`M${x - a} ${y - a * 1.25} l${a / 2} ${-a / 6} v${a / 3}z`" fill="black" stroke-width="1" />
  <path :d="`M${x + a} ${y - a * 1.25} l${-a / 2} ${-a / 6} v${a / 3}z`" fill="black" stroke-width="1" />
  <path :d="`M${x - a} ${y - a * 1.25} h${a * 2}`" stroke="black" stroke-width="2" />

  <path :d="`M${x + 1.5 * a} ${y - a * 1.25 * 1.15} h${a / 2}`" stroke="black" stroke-width="1" />
  <path :d="`M${x + 1.5 * a} ${y - a * 1.25 * 0.85} h${a / 2}`" stroke="black" stroke-width="1" />
  <path
    :d="`M${x + a * 1.5} ${y - a * 1.25} l${a / 2} ${a} A1 1 1 1 1 ${x + a} ${y - a * (1.25 - 1)} l${a / 2} ${-a} l${a / 2} ${-a}  A1 1 0 0 0 ${x + a} ${y - a * (1.25 + 1)}z`"
    stroke="black"
    stroke-width="1"
    fill="white"
  />
  <circle :cx="x + 2.5 * a" :cy="y - a * 1.25" :r="a / 2" stroke="black" stroke-width="1" fill="white" />
  <Text v-if="!isUnit" :x="x - a * 1.5" :y="y - 2.5 * a" :text="join" :fs="25" />
  <Text v-else :x="x + a * 3" :y="y + 0.5 * a" :text="join" :fs="25" />
  <Text :x="x - a * 1.5" :y="y + 0.5 * a" :text="join" :fs="25" />
  <Text :x="x + 2.5 * a" :y="y - a * 1.25 + a / 4 + 2" text="M" :fs="a * 0.75" />
</template>

<style scoped></style>
