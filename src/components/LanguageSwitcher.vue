<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="language-switcher" ref="switcherRef">
    <button class="language-button" @click="toggleDropdown">
      <span>{{ meta.lang }}</span>
      <span>▼</span>
    </button>

    <div v-if="isOpen" class="language-dropdown" @click.stop>
      <div class="click-outside" @click="isOpen = false"></div>
      <button v-for="(_, locale) in messages" :key="locale" class="language-option" @click="selectLanguage(locale)">
        <span>{{ locale }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref } from "vue";
import { messages } from "../locales";

const isOpen = ref(false);
const switcherRef = ref(null);

const { meta } = defineProps(["meta"]);

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
  top: 10px;
  left: 10px;
  z-index: 1000;
}

.language-button {
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
}

.language-button:hover {
  background: #e5e5e5;
}

.language-dropdown {
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
  background: #f5f5f5;
}
</style>
