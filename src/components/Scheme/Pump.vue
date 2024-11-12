<script setup>
const { x, y, angle } = defineProps(['x', 'y', 'angle']);
const R = 30;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <circle :cx="x" :cy="y" :r="R" stroke="black" stroke-width="2px" fill="white" />
        <circle cx="260" cy="640" r="20" stroke="black" stroke-width="2" fill="white" />
        <path :d="`M${x} ${y - 0.9 * R} l${R / 5} ${R / 3} h${-R / 2.5}z`" stroke="black" stroke-width="2" />
    </svg>
</template>

<style scoped></style>
