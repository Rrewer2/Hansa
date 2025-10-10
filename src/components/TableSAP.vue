<script setup>
import { text } from "../services/text";

const { keys, data } = defineProps(["keys", "data"]);
</script>

<template>
  <table class="table">
    <thead class="noCopy">
      <td v-for="a in keys">
        {{ text(a) }}
      </td>
    </thead>
    <tbody>
      <tr
        v-for="({ title, count, description, opis, price, amount }, _, i) of data"
        :class="price === '0,00' || amount === 0 ? 'red' : amount < count ? 'yellow' : ''"
      >
        <td class="tal">
          {{ (i + 1) * 100 }}
        </td>
        <td class="tal">
          {{ title }}
        </td>
        <td class="">
          {{ count }}
        </td>
        <td v-if="!i" class="tal">
          {{ text(opis) }}
        </td>
        <td v-else class="tal">
          {{ description }}
        </td>
        <td class="">
          {{ amount }}
        </td>
        <td class="tar">
          {{ price.replace(" ", "") }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.noCopy {
  user-select: none;
}

.red {
  background-color: rgb(255, 190, 190);
  color: #2c3e50;
}

.yellow {
  background-color: rgb(247, 255, 190);
  color: #2c3e50;
}
</style>
