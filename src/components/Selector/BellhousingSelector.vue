<script setup>
import { bellhousingData } from "../../services/data";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);

const filteredBellhousing = () => {
  if (!order[`pump${i}`]?.title || !order[`motor${i}`]?.title) return [];
  else {
    const filtered = bellhousingData.filter(({ group, size, holePattern, pump }) => {
      return holePattern === order[`pump${i}`]?.pumpData?.holePattern &&
      size === order[`motor${i}`]?.motorData?.size &&
      (!group || group === order[`pump${i}`]?.pumpData?.group) &&
      (!pump || pump.split(',').some(p => order[`pump${i}`].title?.startsWith(p)))
});
    if (filtered.length === 1) {
      const { title, ...rest } = filtered[0];
      order.bellhousing = { title, bellhousingData: { ...rest } };
    }
    return filtered;
  }
};
</script>

<template>
  <article>
    <h2>
      {{ text("bellhousing") }} {{ i ? i + 1 : "" }}<span> {{ filteredBellhousing().at(-1)?.title }}</span>
    </h2>
    <br />

    <table v-if="filteredBellhousing().length">
      <thead>
        <td v-for="a in Object.keys(filteredBellhousing()[0])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>
      <tbody v-for="{ title, ...rest } in filteredBellhousing()">
        <td class="tal">
          <input type="radio" :id="title" v-model="order.bellhousing" :value="{ title, bellhousingData: { ...rest } }"
            :checked="title === order.bellhousing?.title" class="mx" />

          <a :href="`${links[meta.lang]}${title}`" target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(title) }}
          </a>
          <CopyText :text="title" />
        </td>
        <td v-for="item in Object.values(rest)">{{ item }}</td>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
