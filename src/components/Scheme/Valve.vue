<script setup>
import Valve2 from './Valve2.vue';
import Valve3 from './Valve3.vue';

const { x, y, suwak, sl } = defineProps(['x', 'y', 'suwak', 'sl']);
const h = () => sl / 5;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path :d="`M${x} ${y} v${h() + 10} h${0.46 * sl} v-10`" stroke="black" stroke-width="2" fill="none" />
        <path :d="`M${x + sl} ${y} v${h() + 10} h${-0.46 * sl} v-10`" stroke="black" stroke-width="2" fill="none" />
        <Valve3 v-if="suwak.length === 1 && ['A', 'B', 'C', 'D', 'Y'].every(el => el !== suwak)" :x="x + sl / 2" :y="y"
            :h="h()" :suwak="suwak" />
        <Valve2 v-else :x="x + sl / 2" :y="y" :h="h()" :suwak="suwak" />
        <text :x="x + sl / 2" :y="y + h() * 2" font-family="Arial" :font-size="20" fill="black" text-anchor="middle">
            {{ suwak }}
        </text>
    </svg>
</template>

<style scoped></style>
