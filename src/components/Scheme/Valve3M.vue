<script setup>
const { x, y, h } = defineProps(['x', 'y', 'h']);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path :d="`M${x + 0.2 * h} ${y} v${h / 3} h${-0.4 * h} v${-h / 3} v${h}`" stroke="black" stroke-width="3"
            fill="white" />
        <path :d="`M${x + 0.2 * h} ${y + h} v${-h / 3} h${-h / 8} h${h / 4}`" stroke="black" stroke-width="3"
            fill="white" />
    </svg>
</template>

<style scoped></style>
