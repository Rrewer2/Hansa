<script setup>
import { ref } from "vue";
import { pumpData, freqData } from "../../services/data";
import {
  getQ,
  getTextWithSpace,
  getVFU,
  round,
} from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import CopyText from "./CopyText.vue";

const group = ref("");
const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
const filteredPumps = () => {
  if (!meta.pumpType) return [];
  if (powerUNIT.unit.length === 1) {
    const VFU = getVFU(powerUNIT.unit[0].Q, powerUNIT.n);
    const par = meta.pumpType === "gears" ? 0.2 * VFU : 0.5 * VFU;
    return pumpData[meta.pumpType].filter((item) => {
      const pump = Object.values(item)[0];
      const CC = pump.CC - VFU;
      return (
        CC >= -par &&
        CC <= par &&
        pump.pmax > powerUNIT.unit[0].p &&
        (group.value === '' ||
          meta.pumpType !== "gears" ||
          group.value === pump.group)
      );
    });
  }
  if (powerUNIT.unit.length > 1) return [];
};

const selectedPump = () => {
  powerUNIT.unit[0].Q = round(
    getQ(order[`pump${i}`]?.pumpData?.CC, powerUNIT.n),
  );
};
const getTitle = (item) => Object.keys(item)[0];
</script>

<template>
  <article>
    <h2>
      {{ text("pump") }} {{ i ? i + 1 : ""
      }}<span> {{ order[`pump${i}`]?.title }}</span>
    </h2>

    <div class="flex-row flex-center">
      <span v-for="pump in powerUNIT.unit" class="flex-row flex-center">
        <InputItem data="Q">
          <!-- <input type="number" min="0" v-model="pump.Q" :disabled="order[`pump${i}`]" id="Q" /> -->
          <input type="number" min="0" v-model="pump.Q" id="Q" />
        </InputItem>
        <ResultItem :data="{ VFU: round(getVFU(pump.Q, powerUNIT.n)) }" />
        <InputItem data="p">
          <input type="number" min="0" v-model="pump.p" id="pp" />
        </InputItem>
      </span>

      <InputItem data="n">
        <!-- <select v-model="powerUNIT.n" :disabled="order[`pump${i}`] ||
          Object.keys(order).some((str) => str.includes(`motor${i}`))
          " id="n"> -->
        <select v-model="powerUNIT.n" id="n">
          <option v-for="item in freqData" :value="item">{{ item }}</option>
        </select>
      </InputItem>

      <InputItem data="pumpType">
        <select v-model="meta.pumpType" id="pumpType">
          <option v-for="item in Object.keys(pumpData)" :value="item">
            {{ text(item) }}
          </option>
        </select>
      </InputItem>

      <InputItem v-if="meta.pumpType === 'gears'" data="group">
        <select v-model="group" id="group">
          <option v-for="item in ['', 0, 1, 2, 3]" :value="item">
            {{ item }}
          </option>
        </select>
      </InputItem>
    </div>

    <br />
    <table v-if="meta.pumpType && filteredPumps().length">
      <thead>
        <td></td>
        <td>
          <b><i>L/min</i></b>
        </td>
        <td v-for="a in Object.keys(Object.values(filteredPumps().at(-1))[0])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>
      <tbody v-for="elem in filteredPumps()" :value="elem">
        <td class="tal">
          <input type="radio" :id="getTitle(elem)" v-model="order[`pump${i}`]" @change="selectedPump" :value="{
            title: getTitle(elem),
            pumpData: { ...elem[getTitle(elem)], n: powerUNIT.n },
          }" name="pump" :checked="getTitle(elem) === order[`pump${i}`]?.title" class="mx" />

          <a v-if="Object.values(elem)[0].maker !== 'WPH'" :href="`${links[meta.lang]}${getTitle(elem)}`"
            target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(getTitle(elem)) }}
          </a>
          <span v-else>{{ getTextWithSpace(getTitle(elem)) }}</span>
          <CopyText :text="getTitle(elem)" />
        </td>
        <td>{{ round(getQ(Object.values(elem)[0].CC, powerUNIT.n)) }}</td>
        <td v-for="item in Object.values(elem)[0]">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
