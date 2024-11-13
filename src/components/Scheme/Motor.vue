<script setup>
import { Power } from '../../services/functions';

const { x, y, angle, data } = defineProps(['x', 'y', 'angle', 'data']);
const x0 = 0;
const y0 = 0;
const R = 40;
const isLapa = true;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <circle :cx="x + x0" :cy="y + y0" :r="R" stroke="black" stroke-width="2px" fill="white" />
        <text :x="x + x0" :y="y + y0 + R / 2 + 2" font-family="Arial" :font-size="R * 1.5" fill="black"
            text-anchor="middle">M</text>
        <path v-if="isLapa" :d="'M' + `${x0 - 5 - R + x} ${y0 + R + 10 + y}` + `h15 l10 -10 h${R} l10 10 h15`"
            fill="none" stroke="black" stroke-width="2" />
        <text :x="x" :y="y - R * 1.5" font-family="Arial" :font-size="20" fill="black" text-anchor="middle">{{
            Power(data.Q, data.p)
            }} kW / {{ data.n }} min⁻¹</text>
    </svg>
</template>

<style scoped></style>
