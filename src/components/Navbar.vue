<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="js" setup>
import { text } from "../services/text";

const navData = [
  "calculations",
  "scheme",
  "partsSelection",
  "offer",
  "similarity",
];
const { navPage } = defineProps(["navPage"]);
</script>

<template>
  <nav class="">
    <div v-for="(nav, i) in navData" @click="() => $emit('nav', i)" class="slice" :class="navPage[i] && 'active'">
      {{ text(nav) }}
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 61vw;
}

.slice {
  display: inline-block;
  background-color: #a2a1a1;
  padding: 0.4vw 0.8vw;
  margin: 0 0.2vw;
  border-radius: 0 0 1vw 1vw;
  font-size: 18px;
  cursor: pointer;
  min-width: 7vw;
  height: 40px;
  transition: all ease 0.2s;
}

label {
  cursor: pointer;
}

.slice:hover {
  background-color: #94e0a1;
  height: 44px;
  padding-bottom: 4px;
}

.active {
  background-color: #29938e;
  color: white;
}

.active:hover {
  background-color: #d5e094;
  color: black;
}

label {
  padding: 3px;
}
</style>
