<script setup>
import PumpSelector from './Selector/PumpSelector.vue';

const { project } = defineProps(["project"]);

// const selectData = ['Pompa', 'Silnik', 'Kielich / sprzęgło', 'Zbiornik', 'Rozdzielacz', 'Chłodnica', 'Filtr'];
</script>

<template>
  <!-- <main> -->
  <PumpSelector :project="project" @pumpSelected="(title) => $emit('pumpSelected', title)" />
  <!-- <div v-for="el in selectData"> -->
  <!-- <h2>{{ el }}:</h2> -->

  <div v-for="(nav, i) in navData" @input="() => $emit('nav', i)">
    <input type="radio" :id="nav" :value="nav" name="nav" :checked="stan[i]" class="a" />
    <label :for="nav">{{ nav }}</label>
  </div>
  <!-- </div> -->
  <!-- </main> -->
</template>

<style scoped></style>
