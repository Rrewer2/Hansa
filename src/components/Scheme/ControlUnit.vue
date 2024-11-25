<script setup>
import DR2 from './DR2.vue';
import HKSH from './HKSH.vue';
import Valve from './Valve.vue';

const { x, y, sl, unit, sl1, sh, R, length } = defineProps(['x', 'y', 'sl', 'unit', 'sl1', 'sh', 'R', 'length']);
const s = () => x + 3 * R - (R / (6 - length));
</script>

<template>
    <HKSH v-for="el, i in unit.HKSH" :x="x + sl1 + i * (sl * 1.1)" :y="y + 0" :sl="sl" :data="el" />
    <DR2 :x="x" :y="y + 300 + sl / 10" :type="unit.DR2type" :N="unit.HKSH.length" :sl="sl" :sl1="sl1" :sh="sh" />
    <Valve v-for="el, i in unit.HKSH" :x="x + sl1 + i * (sl * 1.1)" :y="y + 300 + sh + sl / 8" :data="el" :sl="sl" />
    <path
        :d="`M${x + sl / 10} ${y + 300 + sl / 10}  h${-sh / 5} v${sh * 3} h${sh / 5} h${250 - sl / 10 + s()} v${sh * 4}`"
        stroke="red" stroke-width="3" fill="none" />
    <path
        :d="`M${x + sl1 + (sl + sl / 10) * unit.HKSH.length} ${y + sl / 10 + 300 + sh} h${sh / 5} v${sh * 2} h${900 - (x + sl1 + (sl + sl / 10) * unit.HKSH.length + sh / 5)} v${sh * 4}`"
        stroke="blue" stroke-width="2" fill="none" />
</template>

<style scoped></style>
