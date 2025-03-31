<script setup>
const navData = ['Obliczenia', 'Schemat', 'Dobór części', 'Oferta'];
const { navPage } = defineProps(["navPage"]);
</script>

<template>
  <nav class="flex-row flex-left">
    <div v-for="(nav, i) in navData" @click="() => $emit('nav', i)" class="slice" :class="navPage[i] && 'active'">
      <label :for="nav">{{ nav }}</label>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 75vw;
}

.slice {
  background-color: #a2a1a1;
  padding: 0.4vw 0.8vw;
  margin: 0 0.2vw;
  border-radius: 0 0 1vw 1vw;
  font-size: 18px;
  cursor: pointer;
}

label {
  cursor: pointer;
}

.slice:hover {
  background-color: #94e0a1;
}

.active {
  background-color: #29938e;
  color: white
}

.active:hover {
  background-color: #d5e094;
  color: black
}

label {
  padding: 3px;
}
</style>
