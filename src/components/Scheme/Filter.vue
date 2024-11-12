<script setup>
const { x, y, angle } = defineProps(['x', 'y', 'angle']);
const x0 = 0;
const y0 = 0;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path :d="'M' + `${x0 + x} ${y0 + y}` + 'l25+25 -25 +25-25 -25z'" stroke="black" stroke-width="1" fill="white" />
        <path :d="'M' + `${x0 - 20 + x} ${y0 + 25 + y}` + 'h40'" stroke="black" stroke-dasharray="5 2"
            stroke-width="1" />
        <circle :cx="x0 + 34 + x" :cy="y0 + 25 + y" r="8" stroke="black" stroke-width="1" fill="white" />
        <path :d="'M' + `${x0 + 30 + x} ${y0 + 21 + y}` + 'l8+8'" stroke="black" stroke-width="1" fill="white" />
        <path :d="'M' + `${x0 + 30 + x} ${y0 + 29 + y}` + 'l8-8'" stroke="black" stroke-width="1" fill="white" />
    </svg>
</template>

<style scoped></style>
