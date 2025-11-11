<script setup>
import Gerotor1 from "./Gerotor1.vue";
import Gerotor2 from "./Gerotor2.vue";
import Gerotor3 from "./Gerotor3.vue";

const { x, y, sl, sh, data } = defineProps(["x", "y", "sl", "sh", "data"]);
</script>

<template>
  <Gerotor1 v-if="data.z === 1" v-bind="{ x, y, sl, sh, data }" />
  <Gerotor2 v-if="data.z === 2" v-bind="{ x, y, sl, sh, data }" />
  <Gerotor3 v-if="data.z === 3" v-bind="{ x, y, sl, sh, data }" />
</template>

<style scoped></style>
