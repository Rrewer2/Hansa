<script setup>
import { bellhousingData, couplingData } from "../../services/data";
import {
  getTextWithSpace,
  reducedPower,
  round,
} from "../../services/functions";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import ResultItem from "../ResultItem.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const filteredCoupling = () => {
  if (!order[`pump${i}`]?.title || !order[`motor${i}`]?.title) return [];
  else {
    const filtered = couplingData.filter(({ group, size, shaft, pump }) => {
      return size === order[`motor${i}`]?.motorData?.size &&
      (!shaft || shaft === order[`pump${i}`]?.pumpData?.shaft) &&
      (!group || group === order[`pump${i}`]?.pumpData?.group) &&
      (!pump || order[`pump${i}`].title?.startsWith(pump))
});
  if (filtered.length === 1) {
    const { title, ...rest } = filtered[0];
    order.coupling = { title, couplingData: { ...rest } };
  }
  return filtered;
  }
};
</script>

<template>
  <article>
    <h2>
      {{ text("coupling") }} {{ i ? i + 1 : "" }}<span> {{ filteredCoupling().at(-1)?.title }}</span>
    </h2>

    <br />

    <table v-if="filteredCoupling().length">
      <thead>
        <tr>
          <td v-for="a in Object.keys(filteredCoupling()[0])">
            <b><i>{{ a }}</i></b>
          </td>
        </tr>
      </thead>
      <tbody v-for="{ title, ...rest } in filteredCoupling()">
        <tr>
          <td class="tal">
            <input type="checkbox" :id="title" @click="order.coupling = { title, couplingData: { ...rest } }"
              class="mx" />
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <CopyText :text="title" />
          </td>
          <td v-for="item in Object.values(rest)">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
