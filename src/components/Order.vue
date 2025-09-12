<script setup>
import { KITtitle } from "../services/functions";

const { order } = defineProps(["order"]);
const normalize = () => {
  const KIT = { KIT: { title: 'KIT', count: 1, JM: 'Szt', opis: KITtitle(order) } };
  Object.keys(order).forEach((key) => {
    //   // if (Array.isArray(order[key]))
    //     //   order[key].forEach((elem, i) => (KIT[`${key}${i}`] = { title: elem.title, count: elem.count, JM: 'Szt', opis: '' }));
    //   // else 
    if (order[key].title) {
      if (KIT[order[key].title]?.title) {
        KIT[order[key].title].count++;
      } 
      else {
        KIT[order[key].title] = { title: order[key].title, count: 1, JM: 'Szt', opis: key.replace(/\d+/g, "") };
      }
    }
  });
  return KIT;
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
            {{ item?.meta ? item.meta : typeof item === "KITect" ? "" : item }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
