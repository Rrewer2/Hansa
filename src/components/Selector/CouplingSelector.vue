<script setup>
import { couplingData, couplingsKitData } from "../../services/data";
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

const setCoupling = ({ title, ...rest }) => order[`coupling` + i] = { title, couplingData: { ...rest } };

const filteredCoupling = () => {
  if (!order[`pump${i}`]?.title || !order[`motor${i}`]?.title) return [];
  else {
    const data =
      order[`motor${i}`]?.motorData?.mount.at(-1) === "4"
        ? couplingsKitData
        : couplingData;
    const filtered = data.filter(({ group, size, shaft, pump }) => {
      return (
        size === order[`motor${i}`]?.motorData?.size &&
        (!shaft || shaft === order[`pump${i}`]?.pumpData?.shaft) &&
        (!group || group === order[`pump${i}`]?.pumpData?.group) &&
        (!pump || order[`pump${i}`].title?.startsWith(pump))
      );
    });
    if (filtered.length === 1) setCoupling(filtered[0]);
    return filtered;
  }
};
</script>

<template>
  <article>
    <h2>
      {{ text("coupling") }} {{ i ? i + 1 : ""
      }}<span> {{ filteredCoupling().at(-1)?.title }}</span>
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
            <input type="radio" :id="title" @click="setCoupling({ title, ...rest })"
              :checked="title === order[`coupling${i}`]?.title" class="mx" />
            <a :href="`${links[meta.lang]}${title}`" target="_blank" rel="noopener noreferrer">
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
