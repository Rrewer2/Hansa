<script setup>
import { ref } from "vue";
import { text } from "../services/text";

const { keys, data } = defineProps(["keys", "data"]);
const N = ref(100);
</script>

<template>
  <table>
    <thead class="noCopy">
      <td v-for="a in keys">
        <b>
          <i>{{ text(a) }}</i>
        </b>
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
  <table>
    <thead>
      <tr>
        <td>
          <input type="number" v-model="N" id="100" class="simple" min="0" />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="_ of data()">
        <td>{{ N }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.noCopy {
  user-select: none;
}
.simple {
  min-height: 1rem;
  max-width: 60px;
  min-width: 60px;
  width: 60px;
}
</style>
