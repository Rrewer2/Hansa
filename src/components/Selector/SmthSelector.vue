<script setup>
import { ref, useSlots } from "vue";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";

const key = ref();

const { Name, index, logic, after, project, meta, order } = defineProps(["Name", "index", "logic", "after", "project", "meta", "order"]);

const orderTitle = ref(order[Name + index]?.title || null);
const slots = useSlots()
const setSmth = ({ title, addition, ...rest }) => {
  orderTitle.value = orderTitle.value === title ? null : title
  if (order[Name + index]?.title !== title) {
    order[Name + index] = { title, [Name + 'Data']: { ...rest } };
    if (addition) Object.entries(addition).forEach(([key, values]) => {
      if (order[key + index]?.n) order[key + index].n += values?.n;
      else order[key + index] = { ...values }
    });
  }
  else {
    order[Name + index] = {};
    if (addition) Object.entries(addition).forEach(([key, values]) => {
      if (order[key + index]?.n && order[key + index]?.n - values?.n > 1) order[key + index].n -= values?.n; 
      else order[key + index] = {};
    });
  }
  if (after) after();
};

const keys = () => Object.keys(logic()[0]).filter(item => item !== 'addition');
const sorting = () => {
  const res = logic();
  if (res.length === 1 && order[Name + index]?.title !== res[0]?.title) setSmth(res[0]);
  if (!key.value) return res;
  return res.sort((a,b) => typeof a[key.value] === 'number' ? a[key.value] - b[key.value] : a[key.value].toString().localeCompare(b[key.value].toString()));
};
const tableResults = (rest) => Object.values(rest)
  .map(item => JSON.stringify(item)
  .replace(/[{}"]/g, " ")
  .replace(/\s:(\d)/g, ' $1'))
  .filter(el => !el.includes('title'));
const getIndex = (index) => {
  if (typeof index === 'number') return index ? index + 1 : "";
  return '';
};
if (!logic().length) order[Name + index] = {};
</script>

<template>
  <article :class="(!logic().length && !slots.default?.()?.length) ? 'hide' : ''">
    <h2>
      <span :class="order[Name + index]?.title ? 'titleSelected' : 'titleNotSelected'">
        {{ text(Name) }} {{ getIndex(index) }}
      </span>
      <span :class="order[Name + index]?.title ? 'titleSelected' : 'titleNotSelected'">
        {{ order[Name + index]?.title }}
      </span>
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
        <tr :class="order[Name + index]?.title && order[Name + index]?.title === title ? 'selected' : ''">
          <td :id="title" class="tal">
            <input type="radio" :id="title" @click="setSmth({ title, ...rest })" class="mx"
              :checked="title === orderTitle" :value="title" v-model="orderTitle"
              :disabled="order[Name + index]?.title && order[Name + index]?.title !== title" />
            <span v-if="title.startsWith('K-') || title.startsWith('M-') || title.startsWith('D1V')">{{ title }}</span>
            <a v-else :href="`${links[meta.lang]}${title.replace('/', '-').replace('.', '-')}`" target="_blank"
              rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
            <CopyText :text="title" />
          </td>
          <td v-for="item in tableResults(rest)">
            <span>{{ item }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped>
.hide {
  position: fixed;
  top: -10000px;
}

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

.selected {
  background-color: rgba(185, 249, 185, 0.2);
}

.notSelected {
  color: grey;
  /* background-color: rgba(249, 185, 185, 0.5); */
}
</style>
