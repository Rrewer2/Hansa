<script setup>
import { round } from "../services/functions";
import { text } from "../services/text";
const { data } = defineProps(["data"]);
</script>

<template>
  <div v-for="(el, name) in data" class="flex-col fs-sm px-5">
    <h4 class="border border-bottom-no bgc-g h-100 px-5">
      {{ text(name).split(", ")[0] }}
    </h4>
    <div class="text border bgc-w px-5">
      {{ round(el, name === "P01" ? 1000 : 10) }}
      <i>{{ text(name).split(", ")[1] }}</i>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  position: relative;
  display: inline-block;
}

/* .text {
    padding-right: 50px;
    height: 40px;
    font-size: 16px;
} */

/* .unit {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #555;
    pointer-events: none;
} */
</style>
