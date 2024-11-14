<script setup>
import { HKSHTitle } from '../../services/functions';
import HKSH1hor from './HKSH1hor.vue';
import HKSH1ver from './HKSH1ver.vue';
import HKSH2hor from './HKSH2hor.vue';
import HKSH2ver from './HKSH2ver.vue';

const { x, y, angle, sl, data } = defineProps(['x', 'y', 'angle', 'sl', 'data']);
const H = 300;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 2000 ${H}`">
        <HKSH1hor v-if="!data.form || (data.form === 'hor' && data.z === 1)" :x="x" :y="H" :sl="sl" />
        <HKSH2hor v-if="data.form === 'hor' && data.z === 2" :x="x" :y="H" :sl="sl" />

        <HKSH1ver v-if="data.form === 'ver' && data.z === 1" :x="x" :y="H" :sl="sl" />
        <HKSH2ver v-if="data.form === 'ver' && data.z === 2" :x="x" :y="H" :sl="sl" />

        <text :x="x + sl / 2" :y="sl / 3" font-family="Arial" :font-size="sl / 10" fill="black" text-anchor="middle">
            {{ HKSHTitle(data.D, data.d, data.L, data.type) }}
        </text>
    </svg>
</template>

<style scoped></style>
