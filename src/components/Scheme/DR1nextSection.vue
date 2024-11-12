<script setup>
import Hline from './Hline.vue';
import Point from './Point.vue';

const { x, y, r, sl, sh } = defineProps(['x', 'y', 'r', 'sl', 'sh']);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <Hline v-for="p in [0, sh]" :x="x" :y="p + y" :L="sl + y" />
        <path :d="'M' + `${x} ${y}` + `v${sh - r}` + 'A1 1 0 0 1' + `${x} ${y + sh + r}` + `v${y}`" stroke="red"
            stroke-width="2" fill="none" />
        <Point :x="x" :y="y" />

        <path :d="'M' + `${x + sl} ${y + sh}` + `v${r + y}`" stroke="blue" stroke-width="2" />
        <Point :x="x + sl" :y="y + sh" />

        <path v-for="a in [0.45 * sl, 0.55 * sl]"
            :d="'M' + `${a + x} ${0}` + `v${y - r}` + 'A1 1 0 0 1' + `${a + x} ${y + r}` + `v${sh - 2 * r}` + 'A1 1 0 0 1' + `${a + x} ${y + sh + r}` + `v${y}`"
            stroke="black" stroke-width="1" fill="none" />
    </svg>
</template>

<style scoped></style>
