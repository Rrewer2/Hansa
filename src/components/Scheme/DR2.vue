<script setup>
import DR2nextSection from './DR2nextSection.vue';
import DR2firstSection from './DR2firstSection.vue';

const { x, y, type, N, sl, sl1, sh } = defineProps(['x', 'y', 'type', 'N', 'sl', 'sl1', 'sh']);
</script>

<template>
    <DR2firstSection :x="x" :y="y" :type="type" :sl="sl" :sl1="sl1" :sh="sh" />
    <DR2nextSection v-for="_, n in N" :sl="sl" :sh="sh" :x="x + sl1 + (sl * 1.1) * n" :y="y + sl / 10" :r="sl / 40" />
</template>

<style scoped></style>
