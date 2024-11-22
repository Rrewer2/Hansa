<script setup>
import Point from './Point.vue';
import Biezpiecz from './Biezpiecz.vue';
import Hline from './Hline.vue';
import DR2nextSection from './DR2nextSection.vue';
import Valve from './Valve.vue';

const { x, y, type, sl, sl1, sh } = defineProps(['x', 'y', 'type', 'N', 'sl', 'sl1', 'sh']);
const width = 2;
</script>

<template>
    <DR2nextSection :sl="sl" :sh="sh" :x="x + sl * 0.45" :y="y" :r="sl / 40" />
    <Point v-if="type" :x="x + sl1 / 6" :y="y" />
    <Point v-if="type" :x="x + sl1 / 6" :y="y + sh" />
    <path v-if="type" :d="`M${x + sl1 / 6} ${y} v${sh}`" stroke="black" stroke-width="2" fill="white" />

    <Biezpiecz v-if="type" :x="x + sl1 / 6" :y="y + sh / 2 - sl / 8" :a="sl / 5" />
    <Hline v-for="p in [0, sh]" :x="x + sl / 10" :y="p + y" :L="sl1" :width="width" />

    <Valve :x="x + sl * 0.45" :y="y + sh + sl / 40" :data="{ spool: 'GA' }" :sl="sl" />
</template>

<style scoped></style>
