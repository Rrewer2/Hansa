<script setup>
const { x, y, a } = defineProps(['x', 'y', 'a']);
</script>

<template>
    <path :d="`M${x} ${y} h${-a / 2}` + `v${a}` + `h${a}` + `v${-a}z`" stroke="black" stroke-width="1" fill="white" />
    <path :d="`M${x - a / 10} ${y + a / 6} h${-a / 5} v${a / 1.5} v${-a / 1.5}`" stroke="black"
        :stroke-dasharray="`${a / 10}` + 2" stroke-width="1" />
    <path :d="`M${x - a / 10 - a / 5} ${y + 0.66 * a} h${a / 10} l${-a / 10} ${a / 3} l${-a / 10} ${-a / 3}`"
        stroke="black" stroke-width=" 1" />
    <path :d="`M${x} ${y} l${-a / 2} ${-a / 4} h${-a / 8} v${a - a / 4} h${a / 8}`" stroke="black"
        stroke-dasharray="1 2" stroke-width="1" fill="none" />
    <!-- <path
        :d="'M' + `${x + a * 0.75} ${y - a / 2}` + `l${-a / 2} ${-a / 15}` + `l${a / 2} ${-a / 15}` + `l${-a / 2}  ${-a / 15}` + `l${a / 2}  ${-a / 15}`"
        stroke="black" stroke-width="0.5" fill="none" />
    <path
        :d="'M' + `${x + a / 10} ${y - a / 2 - a / 9}` + `l${0.75 * a} ${-a / 10}` + `l${-a / 50} ${-a / 25}` + `l${3 * a / 25} ${a / 50}` + `l${-a / 10} ${3 * a / 50}` + `v${-a / 25}`"
        stroke="black" stroke-width="1" fill="black" /> -->
</template>

<style scoped></style>
