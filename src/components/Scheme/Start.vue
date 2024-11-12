<script setup>
const { x, y, a = 30 } = defineProps(['x', 'y', 'a']);
</script>

<template>
    <path :d="'M' + `${x} ${y}` + `h${-a / 2}` + `v${a}` + `h${a}` + `v${-a}` + `v${a}` + `h${a}` + `v${-a}z`"
        stroke="black" stroke-width="1" fill="white" />
    <path :d="'M' + `${x} ${y + a / 6}` + `v${a - a / 3}`" stroke="black" stroke-width="2" />
    <path :d="'M' + `${x} ${y}` + `l${a / 10} ${a / 3}` + `h${-a / 5}`" stroke="black" stroke-width="1" />
    <path :d="'M' + `${x} ${y + a}` + `l${a / 10} ${-a / 3}` + `h${-a / 5}`" stroke="black" stroke-width="1" />
    <path :d="'M' + `${x + a} ${y}` + `v${a / 3}`" stroke="black" stroke-width="2" />
    <path :d="'M' + `${x + a} ${y + a / 3}` + `h${-a / 6}` + `h${a / 3}`" stroke="black" stroke-width="2" />
    <path :d="'M' + `${x + a} ${y + 2 * a / 3}` + `v${a / 3}`" stroke="black" stroke-width="2" />
    <path :d="'M' + `${x + a} ${y + 2 * a / 3}` + `h${-a / 6}` + `h${a / 3}`" stroke="black" stroke-width="2" />
</template>

<style scoped></style>
