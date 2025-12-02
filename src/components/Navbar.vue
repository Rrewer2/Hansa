<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="js" setup>
import { text } from "../services/text";
import LanguageSwitcher from "./LanguageSwitcher.vue";

const navData = ["calculations", "scheme", "partsSelection", "offer", "similarity"];
const { navPage, meta, save, load } = defineProps(["navPage", "meta", "save", "load"]);
</script>

<template>
  <div class="header no-print">
    <LanguageSwitcher v-bind="{ meta, save, load, navPage }" />
    <nav class="nav">
      <div v-for="(nav, i) in navData" @click="() => $emit('nav', i)" class="slice" :class="navPage[i] && 'active'">
        {{ text(nav) }}
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 61vw;
  z-index: 150;
}

.slice {
  display: inline-block;
  background-color: #a2a1a1;
  padding: 0.4vw 0.8vw;
  margin: 0 0.2vw;
  border-radius: 0 0 1vw 1vw;
  font-size: 1.1rem;
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
