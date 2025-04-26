<script setup>
const { x, y, l, deg } = defineProps(['x', 'y', 'l', 'deg']);
const a = 0.18;
const b = 0.34;
</script>

<template>
    <path
        :d="`M${x} ${y} v${l / 2} v${-l} l${a / 2 * l} ${b * l} l${-a / 2 * l} ${-b * a * l} l${-a / 2 * l} ${b * a * l} l${a / 2 * l} ${-b * l}`"
        stroke="black" stroke-width="2.5" fill="black" :transform="`rotate(${deg ? deg : 0} ${x} ${y})`" />
</template>

<style scoped></style>
