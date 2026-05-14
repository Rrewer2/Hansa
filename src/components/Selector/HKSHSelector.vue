<script setup>
// import { ref } from "vue";
import { dlaw, dlawSteel, tlok, dno, uchoC, uchoN, wapr } from "../../services/data";
import { naba, ruras, standartDiameters, HKSHMountD, HKSHMountd, cof } from "../../services/data";
import { HKSHTitle, filtrationD } from "../../services/functions";
import { links } from "../../resources/links";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";
import OrderHKSH from "../OrderHKSH.vue";
import DescriptionHKSH from "../DescriptionHKSH.vue";
import { text } from "../../services/text";

const { HKSH, i, meta, orderHKSH } = defineProps(["HKSH", "i", "meta", "orderHKSH"]);
const filteredDlaw = (D, d) => dlaw.filter(({ AL, S }) => +AL === D && +S === d);
const filteredDlawSteel = (D, d) => dlawSteel.filter(({ AL, S }) => +AL === D && +S === d);
const filteredTlok = (D) => tlok.filter(({ AL }) => +AL === D);
const filteredDno = (D) => dno.filter(({ AL }) => +AL === D);
const filteredWapr = (d) => wapr.filter(({ F }) => +F.match(/[\d.]+/)?.[0] < d && +F.match(/[\d.]+/)?.[0] >= 0.75 * d);
const filteredUchoC = (d) => uchoC.filter(({ d2 }) => +d2 > d * 0.9 && +d2 < d * 1.2);
const filteredCof = (d) => cof.filter(({ S }) => +S > d * 0.9 && +S < d * 1.2);
const filteredUchoN = (D) => uchoN.filter(({ d1 }) => +d1 > 0.9 * D && +d1 < D * 1.2);
const filteredNaba = () => (!HKSH.G ? naba : naba.filter(({ F }) => HKSH.G === F));
const afterNabaSelected = () => (HKSH.G = HKSH.order["naba" + i]?.nabaData?.F);
const MW = 10;
const getOrder = (item, k) => HKSH.order[item + k]?.[`${item}Data`];
const pret = ({ d, L }, i) => {
  return ["20MNV6", "CK45", "CK45IH", "42CRMO4", "42CRMO4UH", "AISI304"].map((el) => ({
    title: "K-" + d + "CR-" + el,
    material: el,
    length: L + +getOrder("dlaw", i)?.L + +getOrder("tlok", i)?.L + +getOrder("tlok", i)?.p + +getOrder("mountB", i)?.LF + MW || 0,
  }));
};
const rura = ({ D, L }) => {
  return ruras
    .filter(({ DH8 }) => DH8 === D)
    .map((el) => ({
      ...el,
      length: L + +getOrder("dlaw", i)?.L1 + +getOrder("tlok", i)?.L + +getOrder("tlok", i)?.p + +getOrder("dno", i)?.S1 || 0,
    }));
};
const getValue = {
  D: standartDiameters,
  d: "",
  G: ["", "G3/8″", "G1/4″", "G1/2″", "G3/4″", "G1″"],
  z: [1, 2, 3, 4, 5, 6, 7, 8],
  mountA: HKSHMountD,
  mountB: HKSHMountd,
};
// const dlawType = ref("HKCG");
</script>

<template>
  <div class="art grid">
    <div>
      <h2>{{ HKSHTitle(HKSH) }}</h2>
      <div class="flex-row">
        <div
          v-for="(_, i) in { D: HKSH.D, d: HKSH.d, L: HKSH.L, mountA: HKSH.mountA, mountB: HKSH.mountB, z: HKSH.z, G: HKSH.G }"
          class="flex-row ml-5"
        >
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
      </div>
      <div>
        <article class="kok">
          <div class="container">
            <img
              v-for="(image, i) in { 1: links.HKFL, 2: links.HKCSTSN, 3: links.HKCFL, 4: links.HKCFL, W: links.HKCFS }"
              :src="image"
              :alt="i"
              class="imgLogo rotate270"
              :class="{ active: HKSH.mountA === i }"
              :key="i"
              @click="HKSH.mountA = i"
            />
          </div>
          <SmthSelector
            v-if="HKSH.mountA === '2'"
            v-bind="{ meta, order: HKSH.order, Name: 'mountA' }"
            :index="i"
            :logic="() => filteredUchoN(HKSH.D)"
          />
        </article>
        <article class="kok">
          <div class="container">
            <img
              v-for="(image, i) in { 0: links.mountB2, 1: links.HKCOF, 2: links.HKCSTSC, W: links.HKCFF }"
              :src="image"
              :alt="i"
              class="imgLogo rotate90"
              :class="{ active: HKSH.mountB === i }"
              :key="i"
              @click="HKSH.mountB = i"
            />
          </div>
          <SmthSelector
            v-if="HKSH.mountB === '1'"
            v-bind="{ meta, order: HKSH.order, Name: 'mountB' }"
            :index="i"
            :logic="() => filteredCof(HKSH.d)"
          />
          <SmthSelector
            v-if="HKSH.mountB === '2'"
            v-bind="{ meta, order: HKSH.order, Name: 'mountB' }"
            :index="i"
            :logic="() => [...filteredWapr(HKSH.d), ...filteredUchoC(HKSH.d)]"
          />
        </article>
        <article class="kok">
          <!-- <div class="container">
            <img
              :src="links.HKCG"
              alt="HKCG"
              class="imgLogo"
              key="HKCG"
              :class="{ active: dlawType === 'HKCG' }"
              @click="dlawType = 'HKCG'"
            />
            <img
              :src="links.HKCGPM"
              alt="HKCGPM"
              class="imgLogo"
              key="HKCGPM"
              :class="{ active: dlawType === 'HKCGPM' }"
              @click="dlawType = 'HKCGPM'"
            />
          </div> -->
          <SmthSelector
            v-bind="{ meta, order: HKSH.order, Name: 'dlaw' }"
            :index="i"
            :logic="() => [...filteredDlaw(HKSH.D, HKSH.d), ...filteredDlawSteel(HKSH.D, HKSH.d)]"
          />
        </article>
        <article class="kok">
          <SmthSelector v-bind="{ meta, order: HKSH.order, Name: 'tlok' }" :index="i" :logic="() => filteredTlok(HKSH.D)" />
        </article>
        <article class="kok">
          <SmthSelector v-bind="{ meta, order: HKSH.order, Name: 'dno' }" :index="i" :logic="() => filteredDno(HKSH.D)" />
        </article>
        <article class="kok">
          <SmthSelector
            v-bind="{ meta, order: HKSH.order, Name: 'naba' }"
            :index="i"
            :logic="() => filteredNaba()"
            :after="afterNabaSelected"
          />
        </article>
        <article class="kok">
          <SmthSelector v-bind="{ meta, order: HKSH.order, Name: 'pret' }" :index="i" :logic="() => pret(HKSH, i)" />
        </article>
        <SmthSelector v-bind="{ meta, order: HKSH.order, Name: 'rura' }" :index="i" :logic="() => rura(HKSH)" />
      </div>
    </div>
    <div class="right mx-auto">
      <OrderHKSH v-bind="{ orderHKSH, i, HKSH }" />
      <DescriptionHKSH v-bind="{ order: HKSH.order, HKSH }" />
    </div>
  </div>
</template>

<style scoped>
.art {
  /* width: 100vw; */
}
article.kok:nth-of-type(odd) {
  background: #f5f5f548;
}

.container {
  display: flex;
  height: 180px;
  width: 30vw;
  /* margin: 0 auto; */
  /* gap: 12px; */
}

.imgLogo {
  flex: 1;
  min-width: 0;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  opacity: 0.6;
  transform: scale(0.85);
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}
.imgLogo.active {
  opacity: 1 !important;
  transform: scale(1);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.95));
}
.container:hover .imgLogo {
  /* opacity: 0.4; */
}

.container .imgLogo:hover {
  opacity: 1;
  transform: scale(1.05);
  z-index: 2;
}

.rotate90 {
  /* transform: rotate(90deg);
  transform-origin: center; */
}
.rotate180 {
  /* transform: rotate(180deg);
  transform-origin: center; */
}
.rotate270 {
  /* transform: rotate(270deg);
  transform-origin: center; */
}
.grid {
  padding-left: 20px;
  display: grid;
  grid-template-columns: 60% 37%;
  column-gap: 3%;
}
.right {
  /* width: 100%; */
  position: sticky;
  top: 4vh;
  /* left: 65vw; */
  max-height: calc(98vh);
  overflow-y: auto;
  /* background-color: rgba(255, 255, 255, 0.3); */
}
</style>
