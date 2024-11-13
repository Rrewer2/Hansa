<script setup>
import ValveX from './ValveX.vue';
import ValveII from './ValveII.vue';
import Valve3E from './Valve3E.vue';
import Valve3G from './Valve3G.vue';
import Valve3H from './Valve3H.vue';
import Valve3J from './Valve3J.vue';

const { x, y, data, h } = defineProps(['x', 'y', 'data', 'h']);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path v-if="data.suwak[1] === 'A' || data.suwak === 'D'"
            :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`" stroke="black" stroke-width="1"
            fill="white" />
        <path v-if="data.suwak[1] === 'B'" :d="`M${x} ${y}h${-0.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`"
            stroke="black" stroke-width="1" fill="white" />
        <Valve3H v-if="data.suwak[0] === 'H'" :x="x" :y="y" :h="h" />
        <Valve3G v-if="data.suwak[0] === 'G'" :x="x" :y="y" :h="h" />
        <Valve3J v-if="data.suwak[0] === 'J'" :x="x" :y="y" :h="h" />
        <Valve3E v-if="data.suwak[0] === 'E'" :x="x" :y="y" :h="h" />
        <ValveX v-if="data.suwak[1] === 'A' || data.suwak === 'D'" :x="x - h" :y="y" :h="h" />
        <ValveII v-if="data.suwak[1] === 'B'" :x="x + h" :y="y" :h="h" />
        <ValveII v-if="data.suwak === 'D'" :x="x" :y="y" :h="h" />
    </svg>
</template>

<style scoped></style>
