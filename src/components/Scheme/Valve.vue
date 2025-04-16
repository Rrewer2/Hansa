<script setup>
import Valve2 from './Valve2.vue';
import Valve3 from './Valve3.vue';

const { x, y, data, sl } = defineProps(['x', 'y', 'data', 'sl']);
const h = () => sl / 5;
</script>

<template>
    <path :d="`M${x} ${y - 8} h${sl}`" stroke="black" stroke-width="1" stroke-dasharray="5 10" />
    <path :d="`M${x} ${y} v${h() + 10} h${0.46 * sl} v-10`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + sl} ${y} v${h() + 10} h${-0.46 * sl} v-10`" stroke="black" stroke-width="2" fill="none" />

    <path :d="`M${x + sl / 2 - (0.5 - 0.46) * sl} ${y} v${-h() / 12}`" stroke="black" stroke-width="2" fill="none" />
    <path :d="`M${x + sl / 2 + (0.5 - 0.46) * sl} ${y} v${-h() / 12}`" stroke="black" stroke-width="2" fill="none" />

    <Valve3 v-if="data.spool.length === 1 && ['A', 'B', 'C', 'D', 'Y'].every(el => el !== data.spool)" :x="x + sl / 2"
        :y="y" :h="h()" :spool="data.spool" />
    <Valve2 v-else :x="x + sl / 2" :y="y" :h="h()" :spool="data.spool" />
    <text :x="x + sl / 2" :y="y + h() * 2" font-family="Arial" :font-size="20" fill="black" text-anchor="middle">
        {{ data.spool }}
    </text>
</template>

<style scoped></style>
