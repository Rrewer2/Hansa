<script setup>
import { ref } from "vue";
import HKSHSelector from "./Selector/HKSHSelector.vue";

const { project, meta, orderHKSH } = defineProps(["project", "meta", "orderHKSH"]);
const emits = defineEmits(["pumpSelected", "projectUpdated"]);

// const other = () => [HKSHSelector].map(({ __name }) => __name);
// const items = () => [...other().map((o, j) => [o, j])];
// const activeIndex = ref(items()[0]);
// const setActive = ([name, index]) => {
//   activeIndex.value = [name, index];
// };
project
  .map(({ unit }) => unit.map(({ HKSH }) => HKSH))
  .flat(2)
  .forEach((_el, i) => {
    orderHKSH[i] = {};
  });
//  project.map(({ unit }) => unit.map(({ HKSH }) => HKSH.map(({ ...el }) => ({ ...el })))).flat(2)
</script>

<template>
  <main>
    <article class="">
      <article class="accordion" v-for="(HKSH, i) in project.map(({ unit }) => unit.map(({ HKSH }) => HKSH)).flat(2)">
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

/* .left {
  width: 75%;
} */

.right {
  /* width: 100%; */
  position: sticky;
  top: 4vh;
  /* left: 65vw; */
  max-height: calc(98vh);
  overflow-y: auto;
  /* background-color: rgba(255, 255, 255, 0.3); */
}

/* .accordion {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 3px solid #ccc;
  overflow: hidden;
  height: 38px;
  font-size: 10px;
  transition: height 0.3s ease-in-out;
  cursor: pointer;
}

.accordion-item.active {
  background-color: #93a199;
  flex: 1;
  font-size: 25px;
  height: inherit;
}

.accordion-header {
  background: #e0e0e0;
  font-weight: bold;
  padding: 1rem;
}

.accordion-content {
  padding: 1rem;
} */
</style>
