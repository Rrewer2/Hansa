<script setup>
import { ref } from "vue";
import { gasketPump, dampingRail, engineMountData, motorSizes } from "../../services/data";
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

const motorSize = ref("");

const setVibro = ({ title, ...rest }) => order[`vibro` + i]?.title !== title ? order[`vibro` + i] = { title, vibroData: { ...rest } } : {};

const vibro = () => {
  if (powerUNIT.mount === "B14" || powerUNIT.mount === "B5" || order[`motor${i}`]?.motorData?.mount === "B14" || order[`motor${i}`]?.motorData?.mount === "B5") {
    return gasketPump.filter(({ size }) => size === order[`motor${i}`]?.motorData?.size || size === motorSize.value);
  }
  const result = dampingRail.filter(({ size }) => size === order[`motor${i}`]?.motorData?.size || size === motorSize.value);
  if (result.length === 1) setVibro(result[0]);
  return result;
};
</script>

<template>
  <article>
    <h2>
      {{ text("vibro") }} {{ i ? i + 1 : ""
      }}<span> {{ vibro().at(-1)?.title }}</span>
    </h2>
    <br />
    <div class="flex-row flex-center">
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
    </div>
    <table v-if="vibro().length">
      <thead>
        <tr>
          <td v-for="a in Object.keys(vibro()[0])">
            <b><i>{{ text(a) }}</i></b>
          </td>
        </tr>
      </thead>
      <tbody v-for="{ title, ...rest } in vibro()">
        <tr>
          <td class="tal">
            <input type="radio" :id="title" @click="setVibro({ title, ...rest })" class="mx"
              :checked="title === order['vibro' + i]?.title" />
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
