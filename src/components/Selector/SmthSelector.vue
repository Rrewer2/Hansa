<script setup>
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";

const { Name, index, logic, project, meta, order } = defineProps(["Name", "index", "logic", "project", "meta", "order"]);

const setSmth = ({ title, ...rest }) => order[Name + index]?.title !== title ? order[Name + index] = { title, [Name + 'Data']: { ...rest } } : order[Name + index] = {};
</script>

<template>
  <article>
    <h2>
      {{ text(Name) }} {{ index ? index + 1 : ""
      }}<span> {{ order[Name + index]?.title }}</span>
    </h2>
    <br />
    <div class="flex-row flex-center">
      <slot></slot>
    </div>
    <table v-if="logic().length">
      <thead>
        <tr>
          <td v-for="a in Object.keys(logic()[0])">
            <b><i>{{ text(a) }}</i></b>
          </td>
        </tr>
      </thead>
      <tbody v-for="{ title, ...rest } in logic()">
        <tr>
          <td class="tal">
            <input type="radio" :id="title" @click="setSmth({ title, ...rest })" class="mx"
              :checked="title === order[Name + index]?.title" />
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
