<script setup>
import { KITtitle } from "../services/functions";

const { order } = defineProps(["order"]);
const normalize = () => {
  const obj = { KIT: { title: 'KIT', opis: KITtitle(order), count: 1 } };
  Object.keys(order).forEach((key) => {
    if (Array.isArray(order[key]))
      order[key].forEach((elem, i) => (obj[`${key}${i}`] = { title: elem.title, opis: '', count: elem.count }));
    else if (order[key].title) {
      if (obj[key]) {
      obj[key].count++;
    } else {
      obj[key] = { title: order[key].title, opis: '', count: 1 };
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
