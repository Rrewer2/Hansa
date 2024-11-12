<script setup>
import ValveA from './ValveA.vue';
import ValveB from './ValveB.vue';
import Valve3E from './Valve3E.vue';
import Valve3G from './Valve3G.vue';
import Valve3H from './Valve3H.vue';
import Valve3J from './Valve3J.vue';

const { x, y, data, h } = defineProps(['x', 'y', 'data', 'h']);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path v-if="data.suwak.startsWith('A') || data.suwak.includes('D')"
            :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`" stroke="black" stroke-width="1"
            fill="white" />
        <path v-if="data.suwak.endsWith('B')" :d="`M${x} ${y}h${-0.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`"
            stroke="black" stroke-width="1" fill="white" />
        <Valve3H v-if="data.suwak.includes('H')" :x="x" :y="y" :h="h" />
        <Valve3G v-if="data.suwak.includes('G')" :x="x" :y="y" :h="h" />
        <Valve3J v-if="data.suwak.includes('J')" :x="x" :y="y" :h="h" />
        <Valve3E v-if="data.suwak.includes('E')" :x="x" :y="y" :h="h" />
        <ValveA v-if="data.suwak.startsWith('A') || data.suwak.includes('D')" :x="x - h" :y="y" :h="h" />
        <ValveB v-if="data.suwak.endsWith('B')" :x="x + h" :y="y" :h="h" />
        <ValveB v-if="data.suwak.includes('D')" :x="x" :y="y" :h="h" />
    </svg>
</template>

<style scoped></style>
