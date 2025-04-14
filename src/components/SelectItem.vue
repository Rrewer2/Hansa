<script setup>
import { text } from "../services/text";
const { data, disabled } = defineProps(["data", "disabled"]);
</script>

<template>
  <div class="inline w-75">
    <h3 class="border border-bottom-no bgc-g fs-sm px-5">
      {{ text(Object.keys(data)[0]) }}
    </h3>
    <select v-model="Object.values(data)[0]" :disabled="disabled">
      <option v-for="item in coolerVBT" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<style scoped></style>
