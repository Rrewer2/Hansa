<script setup>
import { getPriority } from "../services/data";
import { KITtitle } from "../services/functions";
import { text } from "../services/text";
import Description from "./Description.vue";

const { order, project } = defineProps(["order", "project"]);
const normalize = () => {
  const KIT = { KIT: { title: 'KIT', count: 1, JM: 'szt', opis: KITtitle(project, order) } };
  Object.keys(order).forEach((key) => {
    const { title, n } = order[key];
    if (title) {
      if (KIT[title]?.title) {
        KIT[title].count = n ? KIT[title].count + n : KIT[title].count + 1;
      } 
      else {
        KIT[title] = { title, count: n ? n : 1, JM: 'szt', opis: /^x/i.test(key) ? 'Złączka' : key.replace(/\d+$/, "") };
      }
    }
  });
  return getPriority(KIT);
};
</script>

<template>
  <article class="mt-20">
    <table>
      <thead class="noCopy">
        <td v-for="a in ['Nr', 'title', 'count', 'JM', 'Description']">
          <b><i>{{ text(a) }}</i></b>
        </td>
      </thead>

      <tbody>
        <tr v-for="({ title, count, ...rest }, _, i) of normalize()">
          <td class="noCopy">{{ (i + 1) * 100 }}</td>
          <td class="tal">
            {{ title }}
          </td>
          <td class="tal">
            {{ count }}
          </td>
          <td v-for="item in rest" class="noCopy">
            {{ text(item?.meta ? item.meta : item) }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
  <Description v-if="order['pump' + 0]?.title && order['motor' + 0]?.title" v-bind="{ order, project }" />
</template>

<style scoped>
.noCopy {
  user-select: none;
}
</style>
