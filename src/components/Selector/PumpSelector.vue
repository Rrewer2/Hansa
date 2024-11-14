<script setup>
import { ref } from "vue";
import { pumpData } from '../../services/data';

const pump = ref();

const { project } = defineProps(["project"]);
console.log('project[0] :>> ', project[0]);
</script>

<template>
  <article>
    <h2>Pompa</h2>
    <div v-for="elem, title in pumpData" :value="elem" @input="() => $emit('pumpSelected', title)">
      <!-- <input type="radio" :id="title" :value="title" name="title" :checked="pump === title" class="a" />
    {{ title }} -->
      <table>
        <thead>
          <tr>
            <td><input type="radio" :id="title" :value="title" name="title" :checked="pump === title" class="a" /></td>

            <td v-for="head in Object.keys(elem)">
              <b><i>{{ head }}</i></b>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ title }}</td>
            <td v-for="value in Object.values(elem)">
              <b>{{ value }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style scoped>
article {
  height: 100vh;
  font-size: 14px;
}

table {
  width: 50vw;
}

td {
  border: 1px solid black;
  width: 10%;
}
</style>
