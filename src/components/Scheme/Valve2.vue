<script setup>
import ValveX from './ValveX.vue';
import ValveII from './ValveII.vue';
import Valve3E from './Valve3E.vue';
import Valve3G from './Valve3G.vue';
import Valve3H from './Valve3H.vue';
import Valve3J from './Valve3J.vue';
import Valve2Left from './Valve2Left.vue';
import Valve2Right from './Valve2Right.vue';

const { x, y, spool, h } = defineProps(['x', 'y', 'spool', 'h']);
const position = {
    E: -1, J: -1, H: -1, L: -1, M: -1, U: -1, W: -1,
    G: 1, F: 1, P: 1,
};
</script>

<template>
    <path v-if="spool[1] === 'A' || spool === 'D'" :d="`M${x} ${y}h${-1.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`"
        stroke="black" stroke-width="1" fill="white" />
    <path v-if="spool[1] === 'B'" :d="`M${x} ${y}h${-0.5 * h} v${h} h${h} v${-h} v${h} h${h} v${-h}z`" stroke="black"
        stroke-width="1" fill="white" />
    <Valve3H v-if="spool[0] === 'H'" :x="x" :y="y" :h="h" />
    <Valve3G v-if="spool[0] === 'G'" :x="x" :y="y" :h="h" />
    <Valve3J v-if="spool[0] === 'J'" :x="x" :y="y" :h="h" />
    <Valve3E v-if="spool[0] === 'E'" :x="x" :y="y" :h="h" />
    <ValveX v-if="spool[1] === 'A' && position[spool[0]] < 0" :x="x - h" :y="y" :h="h" />
    <ValveX v-if="spool[1] === 'B' && position[spool[0]] > 0" :x="x + h" :y="y" :h="h" />
    <ValveII v-if="spool[1] === 'B' && position[spool[0]] < 0" :x="x + h" :y="y" :h="h" />
    <ValveII v-if="spool[1] === 'A' && position[spool[0]] > 0" :x="x - h" :y="y" :h="h" />

    <ValveX v-if="spool === 'D'" :x="x - h" :y="y" :h="h" />
    <ValveII v-if="spool === 'D'" :x="x" :y="y" :h="h" />

    <Valve2Left v-if="spool[1] === 'A' || spool === 'D'" :x="x - h * 1.5" :y="y" :h="h" />
    <Valve2Right v-if="spool[1] === 'B'" :x="x + h * 1.5" :y="y" :h="h" />
</template>

<style scoped></style>
