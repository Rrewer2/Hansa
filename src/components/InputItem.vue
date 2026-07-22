<script setup>
import { ref } from "vue";
import { text } from "../services/text";

const { data } = defineProps(["data"]);
const option = ref(text(data).split(", ")[1]); //TODO: get this ref out to global
</script>

<template>
  <div class="inline w-75 ml-10">
    <h4 class="border border-bottom-no bgc-g fs-sm px-5">
      <i>{{ text(data).split(", ")[0] }}</i>
    </h4>
    <div class="input-group">
      <slot></slot>
      <select v-if="text(data).split(', ')[2]" v-model="option">
        <option
          v-for="j in text(data)
            .split(', ')
            .filter((_, i) => i)"
          :value="j"
        >
          {{ j }}
        </option>
      </select>
      <i v-else-if="text(data).split(', ')[1]" class="unit px-5">{{ text(data).split(", ")[1] }}</i>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  position: relative;
  display: inline-block;
  background-color: white;
  border: 0.5px solid;
  width: 100%;
}
.unit {
  padding-top: 0.1rem;
  background-color: #e5e5e5;
  font-size: 1rem;
}
</style>
