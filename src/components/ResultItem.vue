<script setup>
import { ref } from "vue";
import { getConvertedValue, round } from "../services/functions";
import { text } from "../services/text";
const { data } = defineProps(["data"]);
const format = ref(Object.keys(data).map((el) => text(el).split(", ")[1]));
</script>

<template>
  <div v-for="(el, name, ind) in data" class="flex-col fs-sm ml-10 mw">
    <h4 class="border border-bottom-no bgc-g h-100 px-5">
      {{ text(name).split(", ")[0] }}
    </h4>
    <div class="text border bgc-w px-5" :class="!text(name).split(', ')[2] && 'py-2'">
      {{ round(getConvertedValue(el, format[ind]), name === "P01" ? 1000 : 10) }}
      <select v-if="text(name).split(', ')[2]" :id="text(name).split(', ')[0]" v-model="format[ind]" class="db">
        <option v-for="value in text(name).split(', ').slice(1)" :value="value">{{ value }}</option>
      </select>
      <i v-else>{{ text(name).split(", ")[1] }}</i>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  position: relative;
  display: inline-block;
}

.mw {
  min-width: 6rem;
}
.db {
  display: inline;
}
</style>
