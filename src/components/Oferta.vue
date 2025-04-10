<script setup>
import { KITtitle } from '../services/functions';

const { order } = defineProps(["order"]);
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
        <tr>
          <td>100</td>
          <td class="tal">KIT</td>
          <td>{{ KITtitle(order) }}</td>
        </tr>
        <tr v-for="{ title, ...rest } of order">
          <td>{{ 200 }}</td>
          <td class="tal">
            <!-- <input type="radio" :id="title" v-model="order[`motor${i}`]" :value="({ title, motorData: elem })"
            name="title" :checked="getTitle() === title" class="mx" /> -->

            {{ title }}

          </td>
          <td v-for="item in rest">{{ item }}</td>
        </tr>
      </tbody>
      order {{ order }}
    </table>
  </article>
</template>

<style scoped></style>
