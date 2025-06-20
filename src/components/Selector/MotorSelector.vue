<script setup>
import { ref } from "vue";
import {
  engineMountData,
  enginesData,
  freqData,
  motorData,
  motorSizes,
} from "../../services/data";
import {
  getTextWithSpace,
  reducedPower,
  round,
  setPressure,
} from "../../services/functions";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import CopyText from "./CopyText.vue";
import { links } from "../../services/links";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
const P = ref("");
const motorSize = ref("");
const filteredMotors = () =>
  enginesData.filter(
    ({ power, mount }) =>
      power * 1.25 >= reducedPower(powerUNIT.unit) &&
      power * 0.75 <= reducedPower(powerUNIT.unit) &&
      mount === powerUNIT.mount,
  );
const motorsByPower = () =>
  enginesData.filter(
    ({ power, mount }) =>
      power === P.value && (!powerUNIT.mount || mount === powerUNIT.mount),
  );
const motorsBySize = () =>
  enginesData.filter(
    ({ size, mount }) =>
      size === motorSize.value &&
      (!powerUNIT.mount || mount === powerUNIT.mount),
  );
const motors = () =>
  P.value ? motorsByPower() : motorSize ? motorsBySize() : filteredMotors();
const getTitle = () => order[`motor${i}`]?.title;
const selectedMotor = ({ mount, size }) => {
  powerUNIT.mount = mount;
  motorSize.value = size;
};
</script>

<template>
  <article>
    <h2>
      {{ text("motor") }} {{ i ? i + 1 : "" }}<span> {{ getTitle() }}</span>
    </h2>
    <div class="flex-row flex-center">
      <InputItem data="n">
        <!-- <select v-model="powerUNIT.n" :disabled="getTitle() ||
          Object.keys(order).some((str) => str.includes(`pump${i}`))
          " id="motor-n"> -->
        <select v-model="powerUNIT.n" id="motor-n">
          <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
        </select>
      </InputItem>

      <InputItem data="mount">
        <!-- <select v-model="powerUNIT.mount" :disabled="getTitle()" id="mount"> -->
        <select v-model="powerUNIT.mount" id="mount">
          <option v-for="item in engineMountData" :value="item">
            {{ item }}
          </option>
        </select>
      </InputItem>

      <InputItem data="size">
        <!-- <select v-model="powerUNIT.mount" :disabled="getTitle()" id="mount"> -->
        <select v-model="motorSize" id="motorSize">
          <option v-for="item in motorSizes" :value="item">
            {{ item }}
          </option>
        </select>
      </InputItem>

      <ResultItem :data="{ P: round(reducedPower(powerUNIT.unit)) }" />

      <InputItem data="P">
        <select v-model="P" @change="() => setPressure(powerUNIT.unit, P)" id="P">
          <option v-for="item in motorData" :value="item">{{ item }}</option>
        </select>
      </InputItem>
    </div>
    <br />
    <table v-if="motors().length">
      <thead>
        <td v-for="a in Object.keys(motors()[0])">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>

      <tbody v-for="{ title, ...elem } in motors()">
        <td class="tal">
          <input type="radio" :id="title" v-model="order[`motor${i}`]" :value="{ title, motorData: elem }" name="title"
            :checked="getTitle() === title" @change="() => selectedMotor(elem)" class="mx" />
          <a v-if="title.includes('HK')" :href="`${links[meta.lang]}${title}`" target="_blank"
            rel="noopener noreferrer">
            {{ getTextWithSpace(title) }}
          </a>
          <span v-else>{{ title }}</span>
          <CopyText :text="title" />
        </td>
        <td v-for="item in elem">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
