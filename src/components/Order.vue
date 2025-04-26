<script setup>
import { KITtitle } from '../services/functions';

const { order } = defineProps(["order"]);
const normalize = () => {
  const obj = {};
  Object.keys(order).forEach((key) => {
    if (Array.isArray(order[key])) order[key].forEach((elem, i) => obj[`${key}${i}`] = elem);

    else if (obj[key]) {
      obj[key].count++;
    }
    else {
      obj[key] = { ...order[key], count: 1 };
    }
  })
  return obj;
};
</script>

<template>
  <article class="">
    <table>
      <thead>
        <td v-for="a in ['Nr', 'Title', 'Opis', 'Count']">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>

      <tbody>

        <td>100</td>
        <td class="tal">KIT</td>
        <td>{{ KITtitle(order) }}</td>
        <td>1</td>


        <tr v-for="{ title, ...rest }, _, i of normalize()">
          <td>{{ (i + 2) * 100 }}</td>
          <td class="tal">
            {{ title }}
          </td>
          <td v-for="item in rest">{{ item?.meta ? item.meta : typeof item === 'object' ? '' : item }}</td>
        </tr>
      </tbody>
    </table>
    <div>normalize {{ normalize() }}</div>
    <div>order {{ order }}</div>
  </article>
</template>

<style scoped></style>
