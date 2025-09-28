<script setup>
import { text } from '../services/text';

const {keys, data} = defineProps(["keys",'data']);
</script>

<template>
  <table>
    <thead class="noCopy">
      <td v-for="a in keys">
        <b><i>{{ text(a) }}</i></b>
      </td>
    </thead>

    <tbody>
      <tr v-for="({ title, count, JM, opis }, _, i) of data()">
        <td class="noCopy">{{ (i + 1) * 100 }}</td>
        <td class="tal">
          {{ title }}
        </td>
        <td class="">
          {{ count }}
        </td>
        <td class="noCopy">
          {{ JM }}
        </td>
        <td v-if="!i" class="tal">
          {{ opis }}
        </td>
        <td v-else class="tal noCopy">
          {{ text(opis) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.noCopy {
  user-select: none;
}
</style>
