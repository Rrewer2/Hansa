<script setup>
import PumpUnit from './Scheme/PumpUnit.vue';
import ControlUnit from './Scheme/ControlUnit.vue';
import Cooler from './Scheme/Cooler.vue';
import Filter from './Scheme/Filter.vue';
import NTM from './Scheme/NTM.vue';
import Tank from './Scheme/Tank.vue';
import FIBL from './Scheme/FIBL.vue';
import { getTankSize } from '../services/functions';
import Hline from './Scheme/Hline.vue';

const { project, meta } = defineProps(["project", 'meta']);
const sectionLength = 320;
const getSL1 = (unit) => getSL(unit.HKSH.length) * 0.5 * (!unit.DR2type ? 0.5 : unit.DR2type);
const R = () => 70;
const yTank = () => 1100;
const LTank = 900;
const getSL = (length) => sectionLength - length * 12;
const getSh = (unit) => unit.DR2type ? 2 * (getSL(unit.HKSH.length) / 5) : 0.5 * getSL(unit.HKSH.length) / 3;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1600" class="container">
        <ControlUnit v-for="unit, c in project[0].unit" :x="200 + c * 1100" :y="100" :sl="getSL(unit.HKSH.length)"
            :unit="unit" :sl1="getSL1(unit)" :sh="getSh(unit)" :R="R()" :length="project[0].unit.length"
            :xT="LTank - 100" />
        <Tank :x="200" :y="yTank()" :L="LTank" :text="`${Object.values(getTankSize(project, meta.tank))[0].Size} L`" />
        <PumpUnit v-for="pumps, i in project" :x="350 + 1000 * i" :y="yTank() - 1.25 * R()" :pumps="pumps.unit"
            :mount="pumps.engineMount" :R="R()" />
        <FIBL :x="200 + LTank - 400" :y="yTank()" :a="R() / 1.5" />
        <NTM :x="200 + LTank - 250" :y="yTank()" :a="R() / 2" />
        <Cooler v-if="meta.cooler" :x="200 + LTank - 100" :y="meta.cooler === 2 ? yTank() - 150 : yTank() - 50"
            :a="R() / 1.5" />
        <Filter :x="200 + LTank - 100" :y="meta.cooler === 1 ? yTank() - 200 : yTank()" :a="R() / 1.5" />
    </svg>
</template>

<style scoped></style>
