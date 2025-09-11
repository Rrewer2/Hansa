<script setup>
import { ref } from "vue";
import { blockData } from "../../services/data";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";
import InputItem from "../InputItem.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const sections = ref("");
const press = ref("");

const filteredBlocks = () => {
  return powerUNIT.unit.map(({ Q, p, DR2type }, i) => blockData.filter(({ stations, cetop, pressure, DBV }) => {
    return (
      (sections.value ? stations === sections.value : stations === powerUNIT.unit[i].HKSH.length) &&
      (!Q || (cetop === 5 && Q > 34) || (cetop === 3 && Q < 35)) &&
      (press.value ? pressure > press.value : pressure > +p + 20) 
      //&& ((DR2type === 0 && DBV === false) || (DR2type === 1 && DBV === true)) TODO: add a DR2type equals 2 or 3
    );
  }));
};
</script>

<template>
  <article>
    <h2>
      {{ text("block") }} {{ i ? i + 1 : ""
      }}<span> {{ order.block?.title }}</span>
    </h2>
    <br />
    <div class="flex-row flex-center">
      <InputItem data="length">
        <!-- <select v-model="powerUNIT.mount" :disabled="getTitle()" id="mount"> -->
        <select v-model="sections" id="sections">
          <option v-for="i in ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :value="i">
            {{ i }}
          </option>
        </select>
      </InputItem>
      <InputItem data="p">
        <input type="number" min="0" v-model="press" id="press" />
      </InputItem>
      <InputItem data="DR2type">
        <select type="number" min="0" v-model="powerUNIT[i].DR2type" id="DR2type" >
          <option v-for="item in [0, 1, 2, 3]" :value="item">
            {{ item }}
          </option>
        </select>
      </InputItem>
    </div>
    <table v-if="filteredBlocks()[0].length">
      <thead>
        <tr>
          <td v-for="a in Object.keys(filteredBlocks()[0][0])">
            <b><i>{{ text(a) }}</i></b>
          </td>
        </tr>
      </thead>
      <tbody v-for="unit in filteredBlocks()">
        <tr v-for="{ title, ...rest } in unit">
          <td class="tal">
            <input type="radio" :id="title" @click="order.block = { title, blockData: { ...rest } }" class="mx" />
            <a v-if="title.includes('HK')" :href="`${links[meta.lang]}${title}`" target="_blank"
              rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <span v-else>{{ title }}</span>
            <CopyText :text="title" />
          </td>
          <td v-for="item in Object.values(rest)">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>
<style scoped></style>
