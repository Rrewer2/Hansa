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


        <td>100</td>
        <td class="tal">KIT</td>
        <td>{{ KITtitle(order) }}</td>
        <td>1</td>


        <!-- <tr v-if="Array.isArray(el)" v-for="el, _, i of order">
          <td v-for="{ title, ...rest }, k in el">{{ (i + 2) * 100 + k }}</td>
          <td class="tal">
            {{ title }}
          </td>
          <td v-for="item in rest">{{ item }}</td>
        </tr>

        <tr v-else v-for="el, _, i of order">
          <td>{{ (i + 2) * 100 }}</td>
          <td class="tal">
            {{ el }}
          </td>
          <td v-for="item in el">{{ item }}</td>
          <td>1</td>
        </tr> -->
      </tbody>
      order {{ order }}
    </table>
  </article>
</template>

<style scoped></style>
