<script setup>
import Valve2 from './Valve2.vue';
import Valve3 from './Valve3.vue';

const { x, y, data, sl } = defineProps(['x', 'y', 'data', 'sl']);
const h = () => sl / 4;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path :d="`M${x} ${y} v${h() + 10} h${0.45 * sl} v-10`" stroke="red" stroke-width="2" fill="none" />
        <path :d="`M${x + sl} ${y} v${h() + 10} h${-0.45 * sl} v-10`" stroke="blue" stroke-width="2" fill="none" />
        <Valve3 v-if="data.n === 3" :x="x + sl / 2" :y="y" :h="h()" :data="data" />
        <Valve2 v-if="data.n === 2" :x="x + sl / 2" :y="y" :h="h()" :data="data" />
    </svg>
</template>

<style scoped></style>
