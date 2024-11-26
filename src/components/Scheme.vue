<script setup>
import PumpUnit from './Scheme/PumpUnit.vue';
import ControlUnit from './Scheme/ControlUnit.vue';
import Cooler from './Scheme/Cooler.vue';
import Filter from './Scheme/Filter.vue';
import NTM from './Scheme/NTM.vue';
import Tank from './Scheme/Tank.vue';
import FIBL from './Scheme/FIBL.vue';

const { project } = defineProps(["project"]);
const sectionLength = 320;
const getSL1 = (unit) => getSL(unit.HKSH.length) * 0.5 * unit.DR2type;
const R = () => 70;
const yTank = () => 1100;
const getSL = (length) => sectionLength - length * 12;
const getSh = (unit) => unit.DR2type ? 2 * (getSL(unit.HKSH.length) / 5) : 0.5 * getSL(unit.HKSH.length) / 3;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1440" class="container">
        <ControlUnit v-for="unit, c in project[0].unit" :x="c * 1100" :y="100" :sl="getSL(unit.HKSH.length)"
            :unit="unit" :sl1="getSL1(unit)" :sh="getSh(unit)" :R="R()" :length="project[0].unit.length" />
        <Tank :x="0" :y="yTank()" />
        <PumpUnit v-for="pumps, i in project" :x="250 + 1000 * i" :y="yTank() - 1.25 * R()" :pumps="pumps.unit"
            :mount="pumps.engineMount" :R="R()" />
        <NTM :x="800" :y="yTank()" :a="R() / 2" />
        <Cooler :x="900" :y="yTank() - 150" :a="R() / 1.5" />
        <Filter :x="900" :y="yTank()" :a="R() / 1.5" />
        <FIBL :x="700" :y="yTank()" :a="R() / 1.5" />
    </svg>
</template>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    background-color: #969696;
}
</style>
