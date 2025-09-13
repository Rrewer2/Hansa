<script setup>
import { getPriority } from "../services/data";
import { KITtitle } from "../services/functions";
import { text } from "../services/text";

const { order } = defineProps(["order"]);
const normalize = () => {
  const KIT = { KIT: { title: 'KIT', count: 1, JM: 'Szt', opis: KITtitle(order) } };
  Object.keys(order).forEach((key) => {
    const { title } = order[key];
    if (title) {
      if (KIT[title]?.title) {
        KIT[title].count++;
      } 
      else {
        KIT[title] = { title, count: 1, JM: 'Szt', opis: key.replace(/\d+/g, "") };
      }
    }
  });
  return getPriority(KIT);
};
</script>

<template>
  <article class="mt-20">
    <table>
      <thead>
        <td v-for="a in ['Nr', 'Title', 'Count', 'JM', 'Opis']">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>

      <tbody>
        <tr v-for="({ title, ...rest }, _, i) of normalize()">
          <td>{{ (i + 1) * 100 }}</td>
          <td class="tal">
            {{ title }}
          </td>
          <td v-for="item in rest">
            {{ text(item?.meta ? item.meta : item) }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
