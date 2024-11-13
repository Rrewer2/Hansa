<script setup>
import HKSHver from './HKSHver.vue';

const { x, y, sl } = defineProps(['x', 'y', 'sl']);
const k = 1.25;
</script>

<template>
    <HKSHver :x="x + sl / 2" :y="y - sl / 4" :sl="sl * k" />
    <path
        :d="`M${x + 0.46 * sl} ${y} A0.7 1 0 1 0 ${x + 0.46 * sl} ${y - sl / 12} v${-sl / 12} h${sl / 6} v${-sl / 8} h${-sl / 6 + (0.5 - 0.46) * sl}`"
        stroke="black" stroke-width="1" fill="none" />
    <path
        :d="`M${x + (1 - 0.46) * sl} ${y} A0.7 1 0 1 0 ${x + (1 - 0.46) * sl} ${y - sl / 12} v${-sl / 24} h${sl / 6} v${-sl / 1.4} h${-sl / 6 - (0.5 - 0.46) * sl}`"
        stroke="black" stroke-width="1" fill="none" />
</template>

<style scoped></style>
