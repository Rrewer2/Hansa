<script setup>
import DR2 from './DR2.vue';
import HKSH from './HKSH.vue';
import Valve from './Valve.vue';

const { x, y, sl, unit, sl1, sh } = defineProps(['x', 'y', 'sl', 'unit', 'sl1', 'sh']);
</script>

<template>
    <HKSH v-for="el, i in unit.HKSH" :x="x + sl1 + i * (sl * 1.1)" :y="y + 0" :sl="sl" :data="el" />
    <DR2 :x="x" :y="y + 300" :type="unit.DR2type" :N="unit.HKSH.length" :sl="sl" :sl1="sl1" :sh="sh" />
    <Valve v-for="el, i in unit.HKSH" :x="x + sl1 + i * (sl * 1.1)" :y="y + 300 + sh + sl / 8" :data="el" :sl="sl" />
</template>

<style scoped></style>
