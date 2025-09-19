<script setup>
import { text } from "../services/text";

const { data } = defineProps(["data"]);
</script>

<template>
  <div class="inline w-75 ml-10">
    <h4 class="border border-bottom-no bgc-g fs-sm px-5">
      <i>{{ text(data).split(", ")[0] }}</i>
    </h4>
    <div class="input-group">
      <slot></slot>
      <i v-if="text(data).split(', ')[1]" class="unit px-5">{{
        text(data).split(", ")[1]
        }}</i>
    </div>
  </div>
</template>

<style scoped>
.input-group {
  position: relative;
  display: inline-block;
  background-color: #e5e5e5;
  border: 0.5px solid;
  width: 100%;
}

.unit {
  /* position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #555;
    pointer-events: none; */
}
</style>
