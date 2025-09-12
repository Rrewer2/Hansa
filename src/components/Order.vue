<script setup>
import { KITtitle } from "../services/functions";

const { order } = defineProps(["order"]);
const normalize = () => {
  const obj = { KIT: { title: 'KIT', count: 1, JM: 'Szt', opis: KITtitle(order) } };
  Object.keys(order).forEach((key) => {
    if (key && Array.isArray(order[key]))
      order[key].forEach((elem, i) => (obj[`${key}${i}`] = { title: elem.title, count: elem.count, JM: 'Szt', opis: '' }));
    else if (order[key].title) {
      if (obj[key]) {
      obj[key].count++;
    } else {
      obj[key] = { title: order[key].title, count: elem.count, JM: 'Szt', opis: '' };
      }
    }
  });
  return obj;
};
</script>

<template>
  <article class="mt-20">
    <table>
      <thead>
        <td v-for="a in ['Nr', 'Title', 'Opis', 'Count']">
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
            {{ item?.meta ? item.meta : typeof item === "object" ? "" : item }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped></style>
