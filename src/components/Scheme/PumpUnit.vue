<script setup>
import { getStandartPower, Power } from '../../services/functions';
import Kielich from './Kielich.vue';
import Motor from './Motor.vue';
import Pump from './Pump.vue';

const { x, y, pumps, mount, R } = defineProps(['x', 'y', 'pumps', 'mount', 'R']);
const pumpR = () => R - (R / (6 - pumps.length));
</script>

<template>
  <Motor :x="x" :y="y" :R="R" :mount="mount" />
  <text :x="x - R * 2" :y="y - R / 2" font-family="Arial" :font-size="R / 2" fill="black" text-anchor="middle">{{
    getStandartPower(pumps.map(({ Q, p }) => Power(Q, p)).reduce((a, b) => a + b))
  }} kW</text>
  <text :x="x - R * 2" :y="y" font-family="Arial" :font-size="R / 3" fill="black" text-anchor="middle">{{ pumps[0].n }}
    min⁻¹</text>
  <Pump v-if="mount === 'B35'" v-for="pump, i in pumps" :data="pump" :x="x + 2 * R + pumpR() * (1 + 2 * i)" :y="y"
    :R="pumpR()" />
  <Pump v-else v-for="pump, i in pumps" :data="pump" :x="x" :y="y + 2 * R + pumpR() * (1 + 2 * i)" :R="pumpR()"
    :ver="mount !== 'B35'" />
  <Kielich :x="x" :y="y" :R="R" :mount="mount" />
</template>

<style scoped></style>
