<script setup>
const { x, y, angle } = defineProps(['x', 'y', 'angle']);
const x0 = 0;
const y0 = 0;
</script>

<template>
    <svg v-if="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path :d="'M' + `${x0 + x} ${y0 + y}` + 'v-35 h10 v5 l15 3 v54 l-15 3 v5 h-10z'" stroke="black" stroke-width="1"
            fill="white" />
        <path :d="'M' + `${x0 + x} ${y0 + y}` + 'h10 v-5 v10 v-5'" stroke="black" stroke-width="1" />
        <path :d="'M' + `${x0 + 25 + x} ${y0 + y}` + 'h-10 v-5 v10 v-5'" stroke="black" stroke-width="1" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <path :d="'M' + `${x0 + x} ${y0 + y}` + 'h25 v5 h-5 l-3 15 h-34 l-3 -15 h-5 v-5z'" stroke="black"
            stroke-width="1" fill="white" />
        <path :d="'M' + `${x0 + x} ${y0 + y}` + 'v8 h-5 h10 h-5'" stroke="black" stroke-width="1" />
        <path :d="'M' + `${x0 + x} ${y0 + 20 + y}` + 'v-8 h-5 h10 h-5'" stroke="black" stroke-width="1" />
    </svg>
</template>

<style scoped></style>
