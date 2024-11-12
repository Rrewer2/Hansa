<script setup>
const { x, y, angle } = defineProps(['x', 'y', 'angle']);
const x0 = 0;
const y0 = 0;
const R = 20;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <circle :cx="x0 + x" :cy="y0 + y" :r="R" stroke="black" stroke-width="1" fill="white" />
        <circle :cx="x0 + x" :cy="y0 + R * 2 + y" :r="R" stroke="black" stroke-width="1" fill="white" />
        <path :d="'M' + `${x0 + x} ${y0 + R * 2 + y}` + `h-${R} h${R * 2}`" stroke="black" stroke-width="1" />
        <path :d="'M' + `${x0 + x} ${y0 + R * 3 + y}` + 'v100'" stroke="black" stroke-width="1" />
        <circle :cx="x0 + x" :cy="y0 + R / 2 + y" r="5" stroke="black" stroke-width="1" fill="black" />
        <circle :cx="x0 + x" :cy="y0 - R * 2 / 3 + y" r="2.5" stroke="black" stroke-width="1" fill="black" />
        <path :d="'M' + `${x0 + x} ${y0 - R * 2 / 3 + y}` + `v${R}`" stroke="black" stroke-width="6" />
        <path
            :d="'M' + `${x0 + x} ${y0 + R * 1.9 + y}` + 'h-5 A1 1 0 0 1' + `${x0 + x - 5} ${y0 + y + R * 1.9 - 8}` + 'h5 v-8 v8 h5 A1 1 0 0 1 ' + `${x + x0 + 5} ${y + y0 + R * 1.9}z`"
            stroke="black" stroke-width="0.5" fill="none" />
    </svg>
</template>

<style scoped></style>
