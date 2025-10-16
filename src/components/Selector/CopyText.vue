<script setup>
import { ref } from "vue";

const { text } = defineProps(["text"]);
const btn = ref("Copy");
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    btn.value = "Copied";
    setTimeout(() => (btn.value = "Copy"), 3000);
  } catch (err) {
    console.error("Copy error: ", err);
  }
};
</script>
<template>
  <button @click="() => copyText(text)" :class="btn === 'Copy' ? 'copy' : 'copied'" title="Copy">
    <span v-if="btn === 'Copied'">✅</span>
    <span v-else>⧉</span>
  </button>
</template>

<style scoped>
button {
  /* width: 10px; */
  margin: 0;
  color: rgba(14, 44, 14, 0.25);
  transition: 0.5s all;
  /* min-height: 20px; */
  border: none;
}

.copy {
  background-color: unset;
}

.copy:hover {
  background-color: unset;
  color: black;
}

.copied {
  background-color: unset;
  color: black;
}
</style>
