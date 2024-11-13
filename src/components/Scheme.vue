<script setup>
import Biezpiecz from './Scheme/Biezpiecz.vue';
import Cooler from './Scheme/Cooler.vue';
import DR1 from './Scheme/DR1.vue';
import Filter from './Scheme/Filter.vue';
import HKSH from './Scheme/HKSH.vue';
import Kielich from './Scheme/Kielich.vue';
import Motor from './Scheme/Motor.vue';
import NTM from './Scheme/NTM.vue';
import Pump from './Scheme/Pump.vue';
import Tank from './Scheme/Tank.vue';
import Valve from './Scheme/Valve.vue';

const { project } = defineProps(["project"]);
console.log('project :>> ', project);
const sectionData = [
    { suwak: 'E', z: 1, type: "33", form: 'hor' },
    { suwak: 'EA', z: 2, type: "00", form: 'hor' },
    { suwak: 'EB', z: 2, type: "00", form: 'hor' },
    { suwak: 'G', z: 1, type: "22", form: 'ver' },
    { suwak: 'GA', z: 2, type: "11", form: 'ver' },
    { suwak: 'GB', z: 2, type: "11", form: 'ver' },
];
const sectionLength = 180;
const DR1type = 2;
const getSL1 = () => !DR1type ? 0 : DR1type === 1 ? sectionLength * 0.75 : sectionLength * 1.5;
</script>

<template>
    <div class="container">
        <HKSH v-for="item, k in project[0].unit[0].HKSH" :x="100 + getSL1() + k * (sectionLength * 1.1)" :y="0"
            angle="0" :sl="sectionLength" :data="{ ...item, ...sectionData[k] }" class="absolut poziom2" />
        <Tank :x="100" :y="150" angle="0" class="absolut poziom0" />
        <Filter :x="550" :y="80" angle="0" class="absolut poziom0" />
        <Cooler :x="550" :y="0" angle="0" class="absolut poziom0" />
        <Biezpiecz :x="100" :y="100" :a="30" class="absolut poziom1" />
        <Pump :data="project[0].unit[0]" :x="300" :y="95" angle="0" class="absolut poziom0" />
        <Motor :data="project[0].unit[0]" :x="200" :y="95" angle="0" class="absolut poziom0" />
        <Kielich :x="240" :y="95" angle="0" class="absolut poziom0" />
        <NTM :x="500" :y="80" angle="0" class="absolut poziom0" />
        <DR1 :x="100" :y="0" :type="DR1type" :N="sectionData.length" :sl="sectionLength" :sl1="getSL1()"
            :sh="DR1type ? 2 * (sectionLength / 4) : 0.5 * (sectionLength / 3)" class="absolut poziom1" />
        <Valve v-for="el, i in sectionData" :x="100 + getSL1() + i * (sectionLength * 1.1)"
            :y="(DR1type ? 2 * (sectionLength / 4) : 0.5 * sectionLength / 3) + sectionLength / 5" :suwak="el.suwak"
            :sl="sectionLength" class="absolut poziom1" />
    </div>
</template>

<style scoped>
.container {
    position: relative;
    height: 100vh;
    background-color: #969696;
}

.absolut {
    display: block;
    position: absolute;
    /* height: 25%; */
    width: 110%;
    left: 0;
}

.poziom0 {
    top: 66.66%;
}

.poziom1 {
    top: 33.33%;
}

.poziom2 {
    top: 0%;
}
</style>
