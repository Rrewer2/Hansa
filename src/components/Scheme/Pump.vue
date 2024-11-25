<script setup>
const { x, y, R, data, ver } = defineProps(['x', 'y', 'R', 'data', 'ver']);
</script>

<template>
    <path v-if="ver" :d="`M${x} ${y} h${-2 * R} h${3 * R} h${0}`" stroke="black" stroke-width="2" />
    <circle :cx="x" :cy="y" :r="R" stroke="black" stroke-width="2px" fill="white" />
    <path v-if="ver" :d="`M${x + 0.9 * R} ${y} l${-R / 3} ${-R / 5} v${R / 2.5}z`" stroke="black" stroke-width="2" />
    <path v-else :d="`M${x} ${y - 0.9 * R} l${R / 5} ${R / 3} h${-R / 2.5}z`" stroke="black" stroke-width="2" />
    <text v-if="ver" :x="x + 2 * R" :y="y - 0.5 * R" font-family="Arial" :font-size="20" fill="black"
        text-anchor="middle">
        {{ data.Q }} l/min
    </text>
    <text v-else :x="x - 1 * R" :y="y - 1.5 * R" font-family="Arial" :font-size="20" fill="black" text-anchor="middle">
        {{ data.Q }} l/min
    </text>
</template>

<style scoped></style>
