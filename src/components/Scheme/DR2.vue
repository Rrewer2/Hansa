<script setup>
import DR2nextSection from './DR2nextSection.vue';
import DR2firstSection from './DR2firstSection.vue';
import DR2firstSection3 from './DR2firstSection3.vue';

const { x, y, type, N, sl, sl1, sh } = defineProps(['x', 'y', 'type', 'N', 'sl', 'sl1', 'sh']);
</script>

<template>
    <DR2firstSection3 v-if="type === 3" :x="x" :y="y" :type="type" :sl="sl" :sl1="sl1" :sh="sh" />
    <DR2firstSection v-else :x="x" :y="y" :type="type" :sl="sl" :sl1="sl1" :sh="sh" />
    <DR2nextSection v-for="_, n in N" :sl="sl" :sh="sh" :x="x + sl1 + (sl * 1.1) * n" :y="y" :r="sl / 40" />
</template>

<style scoped></style>
