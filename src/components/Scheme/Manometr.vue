<script setup>
import Arrow from './Arrow.vue';
import Point from './Point.vue';
import ShutOff from './ShutOff.vue';

const { x, y, a, text } = defineProps(['x', 'y', 'a', 'text']);
</script>

<template>
    <Point :x="x" :y="y" />
    <path :d="`M${x} ${y} v${-a / 2 + -a * 1.5}`" stroke="black" stroke-width="2" />
    <ShutOff :x="x" :y="y - a" :a="a / 2" />
    <circle :cx="x" :cy="y - 3 * a" :r="a" fill="white" stroke="black" stroke-width="1" />
    <Arrow :x="x" :y="y - 3 * a" :l="a * 1.5" deg="-45" />
    <!-- <path :d="`M${x + a / 2} ${y - 3 * a + a / 2} l${-a} ${-a}`" stroke="black" stroke-width="2" />
    <path :d="`M${x - a / 2} ${y - 3 * a - a / 2} l${a / 3} ${a / 5} l${-a / 6} ${a / 7}z`" stroke="black"
        stroke-width="2" fill="black" /> -->
    <text v-if="text" :x="x - 6 * a" :y="y + 2 * a" font-family="Arial" :font-size="a / 1.25" fill="black"
        text-anchor="middle">
        <tspan :font-size="a">P</tspan>
        <tspan dy="0.3em" :font-size="a / 1.5">max</tspan>
        <tspan dy="-0.3em" :font-size="a"> = {{ text }} bar</tspan>
    </text>
</template>

<style scoped></style>
