<script setup>
import { dlaw, dlawSteel, tlok, dno, uchoC, uchoN, wapr } from "../../services/data";
import { naba, ruras, standartDiameters, HKSHMountD, HKSHMountd, cof, cfl, fl, csb, cff, cpb } from "../../services/data";
import { HKSHTitle, filtrationD } from "../../services/functions";
import { links } from "../../resources/links";
import InputItem from "../InputItem.vue";
// import ResultItem from "../ResultItem.vue";
import SmthSelector from "./SmthSelector.vue";
import OrderHKSH from "../OrderHKSH.vue";
import DescriptionHKSH from "../DescriptionHKSH.vue";
import { text } from "../../services/text";

const { HKSH, n, meta, orderHKSH } = defineProps(["HKSH", "n", "meta", "orderHKSH"]);
const filteredDlaw = (D, d) => dlaw.filter(({ ALö, Sö }) => +ALö === D && +Sö === d);
const filteredDlawSteel = (D, d) => dlawSteel.filter(({ ALö, Sö }) => +ALö === D && +Sö === d);
const filteredTlok = (D) => tlok.filter(({ ALö }) => +ALö === D);
const filteredDno = (D) => dno.filter(({ ALö }) => +ALö === D);
const filteredWapr = (d) => wapr.filter(({ Fö }) => +Fö.match(/[\d.]+/)?.[0] < d && +Fö.match(/[\d.]+/)?.[0] >= 0.75 * d);
const filteredUchoC = (d) => uchoC.filter(({ d2ö }) => +d2ö > d * 0.9 && +d2ö < d * 1.2);
const filteredCofD = (D) => [...cof, ...fl].filter(({ Bö }) => +Bö > D * 0.9 && +Bö < D * 1.2);
const filteredCofd = (d) => [...cof, ...fl].filter(({ Sö }) => +Sö > d * 0.95 && +Sö < d * 1.2);
const filteredCFL = (D) => cfl.filter(({ Aö }) => +Aö > D * 0.8 && +Aö < D * 1.2);
const filteredCPB = (D) => cpb.filter(({ Eö }) => +Eö >= D * 0.85 && +Eö <= D * 1.05);
const filteredCSB = (d) => csb;
const filteredCFF = (d) => cff.filter(({ Fö }) => +Fö.match(/[\d.]+/)?.[0] < d && +Fö.match(/[\d.]+/)?.[0] >= 0.75 * d);
const filteredUchoN = (D) => uchoN.filter(({ d1ö }) => +d1ö >= 0.85 * D && +d1ö <= D * 1.1);
const filteredNaba = () => (!HKSH.G ? naba : naba.filter(({ Fö }) => HKSH.G === Fö));
const filteredThreadD = (D) => filteredWapr(D);
const filteredThreadd = (d) => filteredWapr(d);
const afterNabaSelected = () => (HKSH.G = HKSH.order["naba" + n]?.nabaData?.Fö);
const MW = 10;
const getOrder = (item, k) => HKSH.order[item + k]?.[`${item}Data`];
const pret = ({ d, L }) => {
  return ["20MNV6", "CK45", "CK45IH", "42CRMO4", "42CRMO4UH", "AISI304"].map((el) => ({
    title: "K-" + d + "CR-" + el,
    material: el,
    lengthö:
      L + +getOrder("dlaw", n)?.Lö + +getOrder("tlok", n)?.Lö + +getOrder("tlok", n)?.pö + +getOrder("mountd", n)?.LFö + MW || L * 1.5,
  }));
};
const rura = ({ D, L }) => {
  return ruras
    .filter(({ DH8ö }) => DH8ö === D)
    .map((el) => ({
      ...el,
      lengthö: L + +getOrder("dlaw", n)?.L1ö + +getOrder("tlok", n)?.Lö + +getOrder("tlok", n)?.pö + +getOrder("dno", n)?.S1ö || L * 1.5,
    }));
};
const getValue = {
  D: standartDiameters,
  d: "",
  G: ["", "G3/8″", "G1/4″", "G1/2″", "G3/4″", "G1″"],
  z: [1, 2, 3, 4, 5, 6, 7, 8],
  mountD: HKSHMountD,
  mountd: HKSHMountd,
};
const selectors = [
  { Name: "dlaw", logic: () => [...filteredDlaw(HKSH.D, HKSH.d), ...filteredDlawSteel(HKSH.D, HKSH.d)] },
  { Name: "tlok", logic: () => filteredTlok(HKSH.D) },
  { Name: "dno", logic: () => filteredDno(HKSH.D) },
  { Name: "naba", logic: filteredNaba, after: afterNabaSelected },
  { Name: "pret", logic: () => pret(HKSH) },
  { Name: "rura", logic: () => rura(HKSH) },
];
const mountDSelectors = { 0: filteredThreadD, 1: filteredCofD, 2: filteredUchoN, 3: filteredCFL, 4: filteredCFL, 9: filteredCPB };
const mountdSelectors = {
  0: filteredThreadd,
  1: filteredCofd,
  2: (d) => [...filteredWapr(d), ...filteredUchoC(d)],
  7: filteredCSB,
  W: filteredCFF,
};
</script>

<template>
  <div class="art grid">
    <div>
      <h2>{{ HKSHTitle(HKSH) }}</h2>
      <div class="flex-row">
        <div v-for="i in ['D', 'd', 'L', 'mountD', 'mountd', 'z', 'G']" class="flex-row ml-5">
          <InputItem :data="i">
            <select v-if="i === 'mountD' || i === 'mountd'" v-model="HKSH[i]" :id="HKSH.id + i" class="w-75">
              <option v-for="(elem, j) in getValue[i]" :value="j" class="tal">{{ j }} {{ text(elem) }}</option>
            </select>
            <input v-else-if="i === 'L'" type="number" min="0" max="3000" v-model="HKSH[i]" :id="HKSH.id + i" class="input w-75" />
            <select v-else v-model="HKSH[i]" :id="HKSH.id + i" class="w-75">
              <option v-if="i === 'd'" v-for="elem in filtrationD(standartDiameters, HKSH)" :value="elem">{{ elem }}</option>
              <option v-else v-for="elem in getValue[i]" :value="elem">{{ elem }}</option>
            </select>
          </InputItem>
        </div>
      </div>
      <div>
        <article class="kok">
          <div class="container">
            <img
              v-for="(image, i) in { 1: links.HKFL, 2: links.HKCSTSN, 3: links.HKCFL, 4: links.HKCFL, 9: links.HKCPB, W: links.HKCFS }"
              :src="image"
              :alt="image.split('.')[0].slice(1)"
              class="imgLogo rotate270"
              :class="{ active: HKSH.mountD === i }"
              :key="i"
              @click="HKSH.mountD = i"
            />
          </div>
          <SmthSelector
            v-if="mountDSelectors[HKSH.mountD]"
            v-bind="{ meta, order: HKSH.order, Name: 'mountD', index: n, logic: () => mountDSelectors[HKSH.mountD](HKSH.D) }"
          />
        </article>
        <article class="kok">
          <div class="container">
            <img
              v-for="(image, i) in { 0: links.mountB2, 1: links.HKCOF, 2: links.HKCSTSC, 7: links.HKCSB, W: links.HKCFF }"
              :src="image"
              :alt="i"
              class="imgLogo rotate90"
              :class="{ active: HKSH.mountd === i }"
              :key="i"
              @click="HKSH.mountd = i"
            />
          </div>
          <SmthSelector
            v-if="mountdSelectors[HKSH.mountd]"
            v-bind="{ meta, order: HKSH.order, Name: 'mountd', index: n, logic: () => mountdSelectors[HKSH.mountd](HKSH.d) }"
          />
        </article>
        <SmthSelector
          v-for="item in selectors"
          class="kok"
          v-bind="{ meta, order: HKSH.order, Name: item.Name, index: n, key: item.Name }"
          :logic="item.logic"
          :after="item.after"
        />
      </div>
    </div>
    <div class="right mx-auto">
      <OrderHKSH v-bind="{ orderHKSH, i: n, HKSH }" />
      <DescriptionHKSH v-bind="{ order: HKSH.order, HKSH, n }" />
    </div>
  </div>
</template>

<style scoped>
.art {
  /* width: 100vw; */
}
article {
  border-radius: 20px;
  margin-top: 5px;
}
article.kok:nth-of-type(odd) {
  background: #f5f5f548;
}
article.kok:nth-of-type(even) {
  background: #8e8e8e48;
}

.container {
  display: flex;
  height: 180px;
  width: 50vw; /* margin: 0 auto; */ /* gap: 12px; */
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
  /* transform: rotate(90deg);transform-origin: center; */
}
.rotate180 {
  /* transform: rotate(180deg);transform-origin: center; */
}
.rotate270 {
  /* transform: rotate(270deg);transform-origin: center; */
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
  top: 4vh; /* left: 65vw; */
  max-height: calc(98vh);
  overflow-y: auto; /* background-color: rgba(255, 255, 255, 0.3); */
}
</style>
