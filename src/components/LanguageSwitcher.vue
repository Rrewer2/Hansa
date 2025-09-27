<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="language-switcher" ref="switcherRef">
    <button class="button" @click="toggleDropdown">
      <span>{{ meta.lang.toUpperCase() }}</span>
      <img v-if="meta.lang === 'pl'" src="../resources/PL.svg" alt="flagPL" width="24" height="24">
      <img v-if="meta.lang === 'en'" src="../resources/EN.svg" alt="flagEN" width="24" height="24">
      <span>▼</span>
    </button>

    <div v-if="isOpen" class="language-dropdown" @click.stop>
      <div class="click-outside" @click="isOpen = false"></div>
      <button v-for="(_, locale) in messages" :key="locale" class="language-option" @click="selectLanguage(locale)">
        <span>{{ locale.toUpperCase() }}</span>
        <img v-if="locale === 'pl'" src="../resources/PL.svg" alt="flagPL" width="24" height="24">
        <img v-if="locale === 'en'" src="../resources/EN.svg" alt="flagEN" width="24" height="24">
      </button>
    </div>
  </div>

  <div class="storage">
    <button class="button" @click="save">
      SAVE
      <img src="../resources/save.svg" alt="save" width="24" height="24">
    </button>
    <button class="button" @click="load">
      LOAD
      <img src="../resources/load.svg" alt="load" width="24" height="24">
    </button>
  </div>
</template>

<script lang="js" setup>
import { ref } from "vue";
import { messages } from "../locales";

const isOpen = ref(false);
const switcherRef = ref(null);

const { meta, save, load  } = defineProps(["meta", "save", "load" ]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (locale) => {
  isOpen.value = false;
  meta.lang = locale;
};
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 0px;
  left: 0px;
  /* z-index: -150; */
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);

}

.button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #f0f0f0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.button:hover {
  background: #e5e5e5;
}

.language-dropdown {
  z-index: 100;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.click-outside {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
  color: #333;
  position: relative;
  z-index: 1;
}

.language-option:hover {
  background: #898989;
}

.storage {
  position: fixed;
  left: 180px;
  top: 0px;
  display: flex;
}
</style>
