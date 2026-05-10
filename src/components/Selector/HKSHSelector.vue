<script setup>
import { dlaw, tlok, dno, uchoC, uchoN, wapr, naba, ruras, standartDiameters, HKSHMountD, HKSHMountd } from "../../services/data";
import { HKSHTitle, filtrationD, round } from "../../services/functions";
import { links } from "../../resources/links";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";
import OrderHKSH from "../OrderHKSH.vue";
import DescriptionHKSH from "../DescriptionHKSH.vue";
import { text } from "../../services/text";

const { HKSH, i, meta, orderHKSH } = defineProps(["HKSH", "i", "meta", "orderHKSH"]);
const filteredDlaw = (D, d) => dlaw.filter(({ AL, S }) => +AL === D && +S === d);
const filteredTlok = (D) => tlok.filter(({ AL }) => +AL === D);
const filteredDno = (D) => dno.filter(({ AL }) => +AL === D);
const filteredWapr = (d) => wapr.filter(({ F }) => +F.match(/[\d.]+/)?.[0] < d && +F.match(/[\d.]+/)?.[0] >= 0.75 * d);
const filteredUchoC = (D) => uchoC.filter(({ d1 }) => +d1 > D && +d1 < D * 1.2);
const filteredUchoN = (D) => uchoN.filter(({ d1 }) => +d1 > D && +d1 < D * 1.2);
const filteredNaba = () => naba;
const MW = 10;
const getOrder = (item) => orderHKSH[i]?.[item]?.[`${item}Data`] || 0;
const pret = ({ HKSH: { d, L }, i }) => {
  return ["20MNV6", "CK45", "CK45IH", "42CRMO4", "42CRMO4UH", "AISI304"].map((el) => ({
    title: "K-" + d + "CR-" + el,
    material: el,
    length: L + +getOrder("dlaw").L + +getOrder("tlok").L + +getOrder("tlok").p + +getOrder("wapr").LF + MW,
  }));
};
const rura = ({ HKSH: { D, L }, i }) => {
  return ruras
    .filter(({ DH8 }) => DH8 === D)
    .map((el) => ({ ...el, length: L + +getOrder("dlaw").L1 + +getOrder("tlok").L + +getOrder("tlok").p + +getOrder("dno").S1 }));
};
const getValue = {
  D: standartDiameters,
  d: "",
  z: [1, 2, 3, 4, 5, 6, 7, 8],
  mountA: HKSHMountD,
  mountB: HKSHMountd,
};
const fn = (e) => {
  console.log(e);
};
</script>

<template>
  <article class="art">
    <h2>{{ HKSHTitle(HKSH) }}</h2>
    <div v-for="(_, i) in { D: HKSH.D, d: HKSH.d, L: HKSH.L, mountA: HKSH.mountA, mountB: HKSH.mountB, z: HKSH.z }" class="flex-row ml-5">
      <InputItem :data="i">
        <select v-if="i === 'mountA' || i === 'mountB'" v-model="HKSH[i]" :id="HKSH.id + i" class="w-75">
          <option v-for="(elem, j) in getValue[i]" :value="j" class="tal">{{ j }} {{ text(elem) }}</option>
        </select>
        <input v-else-if="i === 'L'" type="number" min="0" max="3000" v-model="HKSH[i]" :id="HKSH.id + i" class="input w-75" />
        <select v-else v-model="HKSH[i]" :id="HKSH.id + i" class="w-75">
          <option v-if="i === 'd'" v-for="elem in filtrationD(standartDiameters, HKSH)" :value="elem">
            {{ elem }}
          </option>
          <option v-else v-for="elem in getValue[i]" :value="elem">
            {{ elem }}
          </option>
        </select>
      </InputItem>
    </div>

    <div class="container" @click="fn">
      <img v-for="(image, i) in [links.HKCSTSC, links.HKWAPR, links.HKCFF]" :src="image" :alt="i" class="imgLogo rotate90" />
    </div>
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`wapr`" :index="i" :logic="() => filteredWapr(HKSH.d)" />
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`uchoC`" :index="i" :logic="() => filteredUchoC(HKSH.D)" />
    <div class="container">
      <img v-for="(image, i) in [links.HKFL, links.HKCSTSN, links.HKCFS]" :src="image" :alt="i" class="imgLogo rotate270" />
    </div>
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`uchoN`" :index="i" :logic="() => filteredUchoN(HKSH.D)" />
    <div class="container">
      <img :src="links.HKCG" alt="HKCG" class="imgLogo" />
      <img :src="links.HKCGPM" alt="HKCGPM" class="imgLogo" />
    </div>
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`dlaw`" :index="i" :logic="() => filteredDlaw(HKSH.D, HKSH.d)" />

    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`tlok`" :index="i" :logic="() => filteredTlok(HKSH.D)" />
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`dno`" :index="i" :logic="() => filteredDno(HKSH.D)" />
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`naba`" :index="i" :logic="() => filteredNaba()" />
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`pret`" :index="i" :logic="() => pret({ HKSH, i, k })" />
    <SmthSelector v-bind="{ meta, order: orderHKSH[i] }" :Name="`rura`" :index="i" :logic="() => rura({ HKSH, i, k })" />
    <div class="right mx-auto">
      <OrderHKSH v-bind="{ orderHKSH, i }" />
      <DescriptionHKSH v-bind="{ order: orderHKSH[i], project, HKSH }" />
    </div>
  </article>
  {{ orderHKSH }}
</template>

<style scoped>
.art {
  width: 50vw;
}
.container {
  display: flex;
  height: 180px;
  width: 30vw;
  margin: 0 auto;
  gap: 12px;
}

.imgLogo {
  flex: 1;
  min-width: 0;
  width: auto;
  object-fit: contain;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.container:hover .imgLogo {
  opacity: 0.4;
}

.container .imgLogo:hover {
  opacity: 1;
  transform: scale(1.2);
  z-index: 2;
}

.rotate90 {
  transform: rotate(90deg);
  transform-origin: center;
}
.rotate180 {
  transform: rotate(180deg);
  transform-origin: center;
}
.rotate270 {
  transform: rotate(270deg);
  transform-origin: center;
}
</style>
