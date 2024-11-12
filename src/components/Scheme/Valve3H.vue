<script setup>
const { x, y, h } = defineProps(['x', 'y', 'h']);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path :d="`M${x - 0.2 * h} ${y} v${h}`" stroke="black" stroke-width="3" fill="white" />
        <path :d="`M${x + 0.2 * h} ${y} v${h}`" stroke="black" stroke-width="3" fill="white" />
        <path :d="`M${x - 0.2 * h} ${y + h / 2} h${0.4 * h}`" stroke="black" stroke-width="3" fill="white" />
    </svg>
</template>

<style scoped></style>
