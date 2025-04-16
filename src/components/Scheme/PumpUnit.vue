<script setup>
import { reducedPower, round } from '../../services/functions';
import Kielich from './Kielich.vue';
import Motor from './Motor.vue';
import Pump from './Pump.vue';

const { x, y, pumps, mount, R } = defineProps(['x', 'y', 'pumps', 'mount', 'R']);
const pumpR = () => R - (R / (6 - pumps.length));
</script>

<template>
  <Motor :x="x" :y="y" :R="R" :mount="mount" />
  <text :x="x - R * 2.5" :y="y - R / 4" font-family="Arial" :font-size="R / 2" fill="black" text-anchor="middle">{{
    round(reducedPower(pumps))
  }} kW</text>
  <text :x="x - R * 2.5" :y="y + R / 4" font-family="Arial" :font-size="R / 2" fill="black" text-anchor="middle">
    <slot></slot>
    min⁻¹
  </text>
  <Pump v-if="mount === 'B35'" v-for="pump, i in pumps" :data="pump" :x="x + 2 * R + pumpR() * (1 + 2 * i)" :y="y"
    :R="pumpR()" />
  <Pump v-else v-for="pump, i in pumps" :data="pump" :x="x" :y="y + 2 * R + pumpR() * (1 + 2 * i)" :R="pumpR()"
    :ver="mount !== 'B35'" />
  <Kielich :x="x" :y="y" :R="R" :mount="mount" />
</template>

<style scoped></style>
