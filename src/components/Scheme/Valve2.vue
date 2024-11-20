<script setup>
import ValveX from './ValveX.vue';
import ValveII from './ValveII.vue';
import Valve3E from './Valve3E.vue';
import Valve3G from './Valve3G.vue';
import Valve3H from './Valve3H.vue';
import Valve3J from './Valve3J.vue';
import Valve2Left from './Valve2Left.vue';
import Valve2Right from './Valve2Right.vue';

const { x, y, suwak, h } = defineProps(['x', 'y', 'suwak', 'h']);
const position = {
    E: -1, J: -1, H: -1, L: -1, M: -1, U: -1, W: -1,
    G: 1, F: 1, P: 1,
};
</script>

<template>
    <path v-if="suwak[1] === 'A' || suwak === 'D'" :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`"
        stroke="black" stroke-width="1" fill="white" />
    <path v-if="suwak[1] === 'B'" :d="`M${x} ${y}h${-0.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`" stroke="black"
        stroke-width="1" fill="white" />
    <Valve3H v-if="suwak[0] === 'H'" :x="x" :y="y" :h="h" />
    <Valve3G v-if="suwak[0] === 'G'" :x="x" :y="y" :h="h" />
    <Valve3J v-if="suwak[0] === 'J'" :x="x" :y="y" :h="h" />
    <Valve3E v-if="suwak[0] === 'E'" :x="x" :y="y" :h="h" />
    <ValveX v-if="suwak[1] === 'A' && position[suwak[0]] < 0" :x="x - h" :y="y" :h="h" />
    <ValveX v-if="suwak[1] === 'B' && position[suwak[0]] > 0" :x="x + h" :y="y" :h="h" />
    <ValveII v-if="suwak[1] === 'B' && position[suwak[0]] < 0" :x="x + h" :y="y" :h="h" />
    <ValveII v-if="suwak[1] === 'A' && position[suwak[0]] > 0" :x="x - h" :y="y" :h="h" />

    <ValveX v-if="suwak === 'D'" :x="x - h" :y="y" :h="h" />
    <ValveII v-if="suwak === 'D'" :x="x" :y="y" :h="h" />

    <Valve2Left v-if="suwak[1] === 'A' || suwak === 'D'" :x="x - h * 1.5" :y="y" :h="h" />
    <Valve2Right v-if="suwak[1] === 'B'" :x="x + h * 1.5" :y="y" :h="h" />
</template>

<style scoped></style>
