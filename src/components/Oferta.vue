<script setup>
import { KITtitle } from '../services/functions';

const { order } = defineProps(["order"]);
</script>

<template>
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
      <tr v-for="{ title } of order">
        <td>{{ 200 }}</td>
        <td class="tal">
          <!-- <input type="radio" :id="title" v-model="order[`motor${i}`]" :value="({ title, motorData: elem })"
            name="title" :checked="getTitle() === title" class="mx" /> -->

          {{ title }}

        </td>
        <!-- <td v-for="item in elem">{{ item }}</td> -->
      </tr>
    </tbody>
    {{ order }}
  </table>
</template>

<style scoped></style>
