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
        <path :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}v${h} h${h} v${-h}z`" stroke="black"
            stroke-width="1" fill="white" />
        <Valve3H v-if="data.suwak === 'H'" :x="x" :y="y" :h="h" />
        <Valve3G v-if="data.suwak === 'G'" :x="x" :y="y" :h="h" />
        <Valve3J v-if="data.suwak === 'J'" :x="x" :y="y" :h="h" />
        <Valve3E v-if="data.suwak === 'E'" :x="x" :y="y" :h="h" />
        <ValveB :x="x + h" :y="y" :h="h" />
        <ValveA :x="x - h" :y="y" :h="h" />
    </svg>
</template>

<style scoped></style>
