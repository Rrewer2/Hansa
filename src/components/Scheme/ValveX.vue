<script setup>
const { x, y, h } = defineProps(['x', 'y', 'h']);
</script>

<template>
    <path
        :d="`M${x - 0.2 * h} ${y + h} l${h * 0.4} ${-h} l${-h * 0.1} ${h * 0.4} l${-h * 0.1} ${-h * 0.05} l${h * 0.2} ${-h * 0.35}`"
        stroke="black" stroke-width="2" fill="black" />
    <path
        :d="`M${x - 0.2 * h} ${y} l${h * 0.4} ${h} l${-h * 0.1} ${-h * 0.4} l${-h * 0.1} ${h * 0.05} l${h * 0.2} ${h * 0.35}`"
        stroke="black" stroke-width="2" fill="black" />
</template>

<style scoped></style>
