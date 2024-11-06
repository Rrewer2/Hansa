<script setup>
const navData = ['Obliczenia', 'Schemat', 'Dobór części', 'Oferta'];
const { stan } = defineProps(["stan"]);
</script>

<template>
  <nav class="flex-row flex-left">
    <div v-for="(nav, i) in navData" @input="() => $emit('nav', i)">
      <input type="radio" :id="nav" :value="nav" name="nav" :checked="stan[i]" class="a" />
      <label :for="nav">{{ nav }}</label>
    </div>
  </nav>
</template>

<style scoped>
input {
  width: 2vw;
}

nav {
  position: fixed;
  top: 0;
  right: 1vw;
}

div {
  background-color: #fff;
  padding: 5px;
}
</style>
