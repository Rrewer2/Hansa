<script setup>
const { x, y, R, mount } = defineProps(['x', 'y', 'R', 'mount']);
</script>

<template>
    <path :transform="`rotate(${mount.startsWith('B3') ? 0 : 90} ${x} ${y})`"
        :d="`M${x + R} ${y} v${-R} h${R * 0.25} v${R * 0.25} l${R * 0.75} ${R * 0.25} v${R} l${-R * 0.75} ${R * 0.25} v${R * 0.25} h${-R * 0.25}z`"
        stroke="black" stroke-width="1" fill="white" />
    <path :transform="`rotate(${mount.startsWith('B3') ? 0 : 90} ${x} ${y})`"
        :d="`M${x + R} ${y} h${R * 0.4} v${-R * 0.25} v${R * 0.5}`" stroke="black" fill="none" stroke-width="1" />
    <path :transform="`rotate(${mount.startsWith('B3') ? 0 : 90} ${x} ${y})`"
        :d="`M${x + 2 * R} ${y} h${-R * 0.4} v${-R * 0.25} v${R * 0.5}`" stroke="black" fill="none" stroke-width="1" />
</template>

<style scoped></style>
