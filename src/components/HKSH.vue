<script setup>
import HKSHSelector from "./Selector/HKSHSelector.vue";

const { project, meta } = defineProps(["project", "meta"]);
const emits = defineEmits(["pumpSelected", "projectUpdated"]);

const HKSHArray = project.map(({ unit }) => unit.map(({ HKSH }) => HKSH)).flat(2);
const orderHKSH = HKSHArray.map(({ order }) => order);
</script>

<template>
  <main>
    <article class="">
      <article class="accordion" v-for="(HKSH, i) in HKSHArray">
        <HKSHSelector v-bind="{ HKSH, i, meta, orderHKSH }" />
      </article>
    </article>
  </main>
</template>

<style scoped>
.grid {
  padding-left: 20px;
  display: grid;
  grid-template-columns: 60% 37%;
  column-gap: 3%;
}

main {
  margin-top: 2px;
}

.right {
  /* width: 100%; */
  position: sticky;
  top: 4vh;
  /* left: 65vw; */
  max-height: calc(98vh);
  overflow-y: auto;
  /* background-color: rgba(255, 255, 255, 0.3); */
}
</style>
