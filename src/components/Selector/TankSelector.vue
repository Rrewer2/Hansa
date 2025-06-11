<script setup>
import { tankData } from "../../services/data";
import {
  agregatCounting,
  getStandartTank,
  getTextWithSpace,
  round,
} from "../../services/functions";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, open } = defineProps([
  "project",
  "meta",
  "order",
  "open",
]);
</script>

<template>
  <article>
    <h2 :class="open && 'bgc-g'">
      {{ text("tank") }}<span> {{ order.tank?.title }}</span>
    </h2>

    <div class="flex-row flex-center">
      <InputItem data="type" class="ml-10">
        <!-- <select v-model="meta.tank" :disabled="order.tank?.title" class="w-100" id="tank"> -->
        <select v-model="meta.tank" class="w-100" id="tank">
          <option v-for="(_, type) in tankData" :value="type">
            {{ type }}
          </option>
        </select>
      </InputItem>

      <ResultItem :data="{ tankMin: round(agregatCounting(project)) }" />
    </div>
    <table>
      <thead>
        <td v-for="item in Object.keys(tankData[meta.tank][0])">
          {{ text(item) }}
        </td>
      </thead>
      <tbody>
        <tr v-for="{ title, ...elem } in getStandartTank(
          meta,
          agregatCounting(project),
        )?.title
          ? [getStandartTank(meta, agregatCounting(project))]
          : tankData[meta.tank]">
          <td class="tal">
            <input type="radio" :id="title" :value="{ title, tankData: elem }" name="elem" v-model="order.tank"
              :checked="title === order.tank?.title" class="mx" />
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <CopyText :text="title" />
          </td>
          <td v-for="item in Object.values(elem)">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
