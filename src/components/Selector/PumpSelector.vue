<script setup>
import { pumpData, freqData } from '../../services/data';
import { getQ, getTextWithSpace, getVFU, round } from "../../services/functions";
import { text } from "../../services/text";

const { project, order, pump, i, meta, k } = defineProps(["project", "order", "pump", "i", "meta", "k"]);
const filteredPumps = () => {
  if (!meta.pumpType) return [];
  return pumpData[meta.pumpType].filter((el) => {
    const item = Object.values(el)[0].CC - getVFU(pump.Q, project[i].n);
    const par = meta.pumpType === 'gears' ? 1 : 12;
    return item >= -par && item <= par
  }
  )
};

const selectedPump = () => {
  pump.Q = getQ(order[`pump${i}-${k}`]?.pumpData?.CC, project[i].n);
};
const getTitle = (item) => Object.keys(item)[0];
</script>

<template>
  <article>
    <h2>Pompa<span> {{ (order[`pump${i}-${k}`]?.title) }}</span></h2>

    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">{{ text('Q') }}</h3>
      <input type="number" min="0" v-model="pump.Q" :disabled="order[`pump${i}-${k}`]" />
    </div>

    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">{{ text('VFU') }}</h3>
      <h3>{{ round(getVFU(pump.Q, project[i].n)) }}</h3>
    </div>

    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">{{ text('n') }}</h3>
      <select v-model="project[i].n"
        :disabled="order[`pump${i}-${k}`] || Object.keys(order).some(str => str.includes(`motor${i}`))">
        <option v-for="item in freqData" :value="item">{{ item }}</option>
      </select>
    </div>

    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">{{ text('pumpType') }}</h3>
      <select v-model="meta.pumpType">
        <option v-for="item in Object.keys(pumpData)" :value="item">{{ text(item) }}</option>
      </select>
    </div>

    <br>
    <table v-if="meta.pumpType && filteredPumps().length">
      <thead>
        <td>
        </td>
        <td><b><i>L/min</i></b></td>
        <td v-for="a in Object.keys(Object.values(filteredPumps()[0])[0])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>
      <tbody v-for="elem in filteredPumps()" :value="elem">
        <td class="tal">
          <input type="radio" :id="getTitle(elem)" v-model="order[`pump${i}-${k}`]" @change="selectedPump"
            :value="{ title: getTitle(elem), pumpData: { ...elem[getTitle(elem)], n: project[i].n } }" name="pump"
            :checked="getTitle(elem) === (order[`pump${i}-${k}`]?.title)" class="mx" />

          <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${getTitle(elem)}`" target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(getTitle(elem)) }}
          </a>
        </td>
        <td>{{ round(getQ(Object.values(elem)[0].CC, project[i].n)) }}</td>
        <td v-for="item in Object.values(elem)[0]">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
