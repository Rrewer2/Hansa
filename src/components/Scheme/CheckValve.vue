<script setup>
const { x, y, r, deg } = defineProps(['x', 'y', 'r', 'deg']);

</script>

<template>
    <path :d="`M${x - 1.75 * r} ${y + 0.25 * r} l${1.75 * r} ${1.75 * r} l${1.75 * r} ${-1.75 * r}`" stroke="black"
        stroke-width="1.5" fill="white" :transform="`rotate(${deg} ${x} ${y})`" />
    <circle :cx="x" :cy="y" :r="1.25 * r" stroke="black" stroke-width="1.5" fill="white"
        :transform="`rotate(${deg} ${x} ${y})`" />
</template>

<style scoped></style>
