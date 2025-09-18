<script setup>
import { ref } from "vue";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";

const key = ref();
const radio = ref();

const { Name, index, logic, after, project, meta, order } = defineProps(["Name", "index", "logic", "after", "project", "meta", "order"]);

const setSmth = ({ title, ...rest }) => {
  if (order[Name + index]?.title !== title) order[Name + index] = { title, [Name + 'Data']: { ...rest } }
  else order[Name + index] = {};
  if (after) after();
};

const keys = () => Object.keys(logic()[0]);

const sorting = () => {
  const res = logic();
  if (res.length === 1 && order[Name + index]?.title !== res[0]?.title) setSmth(res[0]);
  if (!key.value) return logic();
  return logic().sort((a,b) => typeof a[key.value] === 'number' ? a[key.value] - b[key.value] : a[key.value].toString().localeCompare(b[key.value].toString()));
};
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
          <td v-for="a in keys()">
            <b><i>
                {{ text(a) }}
                <button v-if="logic().length > 3" @click="key = a" class="sort" :class="key === a && 'active'"
                  :value="a">
                  ⏬
                </button>
              </i></b>
          </td>
        </tr>
      </thead>
      <tbody v-for="{ title, ...rest } in sorting()">
        <tr>
          <td :id="title" class="tal">
            <label><input type="radio" :id="title" @click="setSmth({ title, ...rest })" class="mx"
              v-model="radio" /></label>
            <a v-if="title.includes('HK')" :href="`${links[meta.lang]}${title}`" target="_blank"
              rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <span v-else>{{ title }}</span>
            <CopyText :text="title" />
          </td>
          <td v-for="item in Object.values(rest)">{{ JSON.stringify(item).replace(/[{}"]/g, " ").replace(/:(\d)/g, `:
            $1`)
          }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped>
.sort {
  width: 20px;
  color: rgba(14, 44, 14, 0.25);
  transition: 1s all;
  min-height: 20px;
  border: none;
  background-color: unset;
  margin: 0;
  padding: 0;
}

.sort:hover {
  background-color: unset;
  color: rgba(14, 44, 14, 1);
}

.sort.active {
  background-color: unset;
  color: rgba(14, 44, 14, 1);
}
</style>
