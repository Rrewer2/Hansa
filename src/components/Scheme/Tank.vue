<script setup>


const { x, y, angle } = defineProps(['x', 'y', 'angle']);
const L = 500;
const H = 100;
const h = 0;
const hZlew = 20;
const u = 15;
const s = 5;

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300" fill="none">
        <defs>
            <symbol id="input">
                <text x="15" y="10" font-family="Arial" font-size="10" fill="black" text-anchor="middle">G3/4</text>

                <line x1="0" y1="0" x2="0" :y2="H" stroke="#000" stroke-width="2" />powrot
            </symbol>
            <symbol id="tank">
                <path :d="'M0 1' + `v${h}` + `h${L}` + 'v-10z'" stroke="#000" stroke-width="2" />
                <path
                    :d="'M0 ' + `${h + s}` + `h${u}` + `l${u} ${H}` + `v${hZlew}` + `h${L - 4 * u}` + `v${-hZlew}` + `l${u} ${-H}` + `h${u}`"
                    stroke="#000" stroke-width="2" />
                <path :d="`M${3 * u} ${h + s + H + hZlew}` + `v${H / 5}` + `h${u / 2}` + `l${u / 2} ${-H / 5}`"
                    stroke="#000" stroke-width="2" />
                <path :d="`M${L - 3 * u} ${h + s + H + hZlew}` + `v${H / 5}` + `h${-u / 2}` + `l${-u / 2} ${-H / 5}`"
                    stroke="#000" stroke-width="2" />
                <path :d="`M${3 * u} ${h + s + H / 4}` + `v${H / 2}` + `h${u}` + `v${-H / 2}z`" stroke="#000"
                    stroke-width="2" />
                <path
                    :d="`M${3 * u + s} ${h + s + H / 4 + s}` + `v${H / 2 - 2 * s}` + `h${u - 2 * s}` + `v${-H / 2 + 2 * s}z`"
                    stroke="#000" stroke-width="2" />
                <path
                    :d="`M${2 * u - s} ${h + s + H + hZlew / 2 - s}` + `l${2 * s} ${2 * s}` + `v${-2 * s}` + `l${-2 * s} ${2 * s}z`"
                    stroke="#000" stroke-width="2" fill="black" />
            </symbol>
        </defs>
        <use xlink:href="#tank" :x="x" :y="y" />
        <use v-for="d in 4" xlink:href="#input" :x="x + 250 + d * 50" :y="y" />
    </svg>
</template>

<style scoped></style>
