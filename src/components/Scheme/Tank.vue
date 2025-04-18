<script setup>


const { x, y, L, screenSize } = defineProps(['x', 'y', 'L', 'screenSize']);
const H = () => screenSize - 100 - y;
const h = 0;
const hZlew = 30;
const u = 30;
const s = 8;
</script>

<template>
    <path :d="`M${x} ${y + 1} v${h} h${L} v${-h}z`" stroke="#000" stroke-width="2" fill="none" />
    <path :d="`M${x} ${y + h + s} h${u} l${u} ${H()} v${hZlew} h${L - 4 * u} v${-hZlew} l${u} ${-H()} h${u}`"
        stroke="#000" stroke-width="2" fill="none" />
    <path :d="`M${x + 2.5 * u} ${y + h + s + H() + hZlew} v${H() / 5} h${u} l${u / 2} ${-H() / 5}`" stroke="#000"
        stroke-width="2" fill="none" />
    <path :d="`M${x + L - 2.5 * u} ${y + h + s + H() + hZlew} v${H() / 5} h${-u} l${-u / 2} ${-H() / 5}`" stroke="#000"
        stroke-width="2" fill="none" />
    <path :d="`M${x + 3 * u} ${y + h + s + H() / 4} v${H() / 2} h${u} v${-H() / 2}z`" stroke="#000" stroke-width="2"
        fill="none" />
    <path :d="`M${x + 3 * u + s} ${y + h + s + H() / 4 + s} v${H() / 2 - 2 * s} h${u - 2 * s} v${-H() / 2 + 2 * s}z`"
        stroke="#000" stroke-width="2" fill="none" />
    <path
        :d="`M${x + 2 * u - 1.5 * s} ${y + h + s + H() + hZlew / 2 - 2 * s} l${3 * s} ${3 * s} v${-3 * s} l${-3 * s} ${3 * s}z`"
        stroke="#000" stroke-width="2" fill="black" />
    <text :x="x + L - 400" :y="y + H() - u" font-family="Arial" :font-size="u" fill="black" text-anchor="middle">L-HV
        46</text>
    <text :x="x + L - 400" :y="y + H()" font-family="Arial" :font-size="u" fill="black" text-anchor="middle">
        <slot></slot>
    </text>
</template>

<style scoped></style>
