<script setup>
import Point from './Point.vue';
import Biezpiecz from './Biezpiecz.vue';
import Start from './Start.vue';
import Hline from './Hline.vue';


const { x, y, type, sl, sl1, sh } = defineProps(['x', 'y', 'type', 'N', 'sl', 'sl1', 'sh']);
const width = 2;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <Point v-if="type" :x="x + sl1 / 5" :y="y + sl / 10" />
        <Point v-if="type" :x="x + sl1 / 5" :y="y + sl / 10 + sh" />
        <path v-if="type" :d="`M${x + sl1 / 5} ${y + sl / 10} v${sh}`" stroke="black" stroke-width="2" fill="white" />

        <Biezpiecz v-if="type" :x="x + sl1 / 5" :y="y + sl / 10 + sl / 5" :a="sl / 4" />

        <Point v-if="type === 2" :x="x + sl1 * 0.6" :y="y + sl / 10" />
        <Point v-if="type === 2" :x="x + sl1 * 0.6" :y="y + sl / 10 + sh" />
        <path v-if="type === 2" :d="`M${x + sl1 * 0.6} ${y + sl / 10} v${sh}`" stroke="black" stroke-width="2"
            fill="white" />

        <Start v-if="type === 2" :x="x + sl1 * 0.6" :y="y + sl / 10 + sl / 5" :a="sl / 4" />
        <Hline v-for="p in [0, type ? 2 * sl / 3 : 0.5 * sl / 3]" :x="x + sl / 10" :y="p + y + sl / 10" :L="sl1"
            :width="width" />
    </svg>
</template>

<style scoped></style>
