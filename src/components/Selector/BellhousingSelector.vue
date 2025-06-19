<script setup>
import { ref, watch } from "vue";
import { bellhousingData, engineMountData, manifoldData, motorSizes, pumpData } from "../../services/data";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import InputItem from "../InputItem.vue";
import CopyText from "./CopyText.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
const bellhousing = ref({ group: "", holePattern: "", size: "" });

const filteredBellhousing = () => {
  const data = powerUNIT.mount.at(-1) === "4" ? manifoldData : bellhousingData;
  return data.filter(({ group, size, holePattern, pump, shaft }) => {
    return (
      (holePattern === order[`pump${i}`]?.pumpData?.holePattern ||
        holePattern === bellhousing.value.holePattern) &&
      (size === order[`motor${i}`]?.motorData?.size || size === bellhousing.value.size) &&
      (group ==="" ||
        group === order[`pump${i}`]?.pumpData?.group ||
        group === bellhousing.value.group) &&
      (!shaft || shaft === order[`pump${i}`]?.pumpData?.shaft) &&
      (!pump ||
        pump.split(",").some((p) => order[`pump${i}`]?.title?.startsWith(p)))
    );
  });
};

watch(
  [() => bellhousing.value.group, () => bellhousing.value.holePattern, () => bellhousing.value.size, () => order[`pump${i}`], () => order[`motor${i}`], () => powerUNIT.mount],
  () => {
    const filtered = filteredBellhousing();
    if (filtered.length === 1) {
      const { title, ...rest } = filtered[0];
      order.bellhousing = { title, bellhousingData: { ...rest } };
    }
  },
  { immediate: true }
);

const pattern = () => {
  const obj = {};
  [...bellhousingData, ...manifoldData].forEach(({ holePattern, group }) =>{
   if(meta.pumpType === "piston" && group === undefined && !obj[holePattern]) obj[holePattern] = "";
   if(meta.pumpType === "gears" && group !== undefined && (!bellhousing.value.group || bellhousing.value.group === group) && !obj[holePattern]) obj[holePattern] = "";
  });
  return ['', ...Object.keys(obj)];
};
</script>

<template>
  <article>
    <h2>
      {{ text("bellhousing") }} {{ i ? i + 1 : ""
      }}<span> {{ filteredBellhousing().at(-1)?.title }}</span>
    </h2>
    <InputItem data="pumpType">
      <select v-model="meta.pumpType" id="pumpType">
        <option v-for="item in Object.keys(pumpData)" :value="item">
          {{ text(item) }}
        </option>
      </select>
    </InputItem>
    <InputItem v-if="meta.pumpType === 'gears'" data="group">
      <select v-model="bellhousing.group" id="group">
        <option v-for="item in ['', 0, 1, 2, 3]" :value="item">
          {{ text(item) }}
        </option>
      </select>
    </InputItem>
    <InputItem data="holePattern">
      <select v-model="bellhousing.holePattern" id="holePattern">
        <option v-for="item in pattern()" :value="item">
          {{ text(item) }}
        </option>
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
      <select v-model="bellhousing.size" id="size">
        <option v-for="item in motorSizes" :value="item">
          {{ text(item) }}
        </option>
      </select>
    </InputItem>
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
