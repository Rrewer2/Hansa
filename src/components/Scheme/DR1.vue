<script setup>
import DR1nextSection from './DR1nextSection.vue';
import DR1firstSection from './DR1firstSection.vue';
import Point from './Point.vue';
import Biezpiecz from './Biezpiecz.vue';
import Start from './Start.vue';
import Hline from './Hline.vue';


const { x, y, type, N, sl, sl1, sh } = defineProps(['x', 'y', 'type', 'N', 'sl', 'sl1', 'sh']);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <DR1firstSection :x="x" :y="y" :type="type" :sl="sl" :sl1="sl1" :sh="sh" />
        <DR1nextSection v-for="_, n in N" :sl="sl" :sh="sh" :x="x + sl1 + (sl * 1.1) * n" :y="y + sl / 10"
            :r="sl / 40" />
    </svg>
</template>

<style scoped></style>
