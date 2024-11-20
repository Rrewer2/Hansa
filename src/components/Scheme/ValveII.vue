<script setup>
const { x, y, h } = defineProps(['x', 'y', 'h']);
</script>

<template>
    <path
        :d="`M${x - 0.2 * h} ${y + h} v${-h * 0.5} h${-h * 0.1} l${h * 0.1} ${-h * 0.45} l${h * 0.1} ${h * 0.45} h${-h * 0.1}`"
        stroke="black" stroke-width="2" fill="black" />
    <path
        :d="`M${x + 0.2 * h} ${y} v${h * 0.5} h${-h * 0.1} l${h * 0.1} ${h * 0.45} l${h * 0.1} ${-h * 0.45} h${-h * 0.1}`"
        stroke="black" stroke-width="2" fill="black" />
</template>

<style scoped></style>
