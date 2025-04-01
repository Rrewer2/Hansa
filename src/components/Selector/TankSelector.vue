<script setup>
import { ref } from "vue";
import { tankData } from '../../services/data';
import { agregatCounting, getStandartTank, getTextWithSpace, round } from "../../services/functions";


const { project, meta, order, open } = defineProps(["project", "meta", "order", "open"]);
const emits = defineEmits(["tankSelected"]);
const minSize = agregatCounting(project).T;
const tank = ref({});

const getName = (elem) => Object.keys(elem)[0];
const updating = (elem) => {
  // if (order) {
  //   console.log('order :>> ', order);
  //   console.log('tank :>> ', tank.value);
  //   console.log('tankData[meta.tank] :>> ', tankData[meta.tank]);
  //   console.log('tankData[meta.tank][order] :>> ', tankData[meta.tank][order]);
  //   tank.value = order
  //   return
  // }
  tank.value = elem;
  emits("tankSelected", elem);
};
updating(getStandartTank(meta.tank, minSize))

const tankVerify = (elem) => getName(elem) === getName(tank.value);
</script>

<template>
  <article>
    <h2 :class="open && 'bgc-g'">Zbiornik<span> {{ getName(tank) }}</span></h2>
    <span>
      Minimalna pojemność: {{ round(minSize) }} L
    </span>
    <label>Typ zbiornika:
      <select v-model="meta.tank">
        <option v-for="(_, type) in tankData" :value="type">
          {{ type }}
        </option>
      </select>
    </label>

    <table>
      <thead>
        <td>Wybierz</td>
        <td>Nazwa</td>
        <td v-for="item in Object.keys(Object.values(tankData[meta.tank][0])[0])">{{ item }}</td>
      </thead>
      <tbody v-for="elem in tankData[meta.tank]" :value="elem">
        <td>
          <input type="radio" :id="getName(elem)" :value="getName(elem)" name="elem" @input="updating(elem)"
            :checked="tankVerify(elem)" class="mx" />
        </td>
        <td class="tal">
          <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${(getName(elem))}`" target="_blank" rel="noopener noreferrer">
            {{ getTextWithSpace(getName(elem)) }}
          </a>
        </td>
        <td v-for="item in Object.values(elem)[0]">{{ item }}</td>
      </tbody>
    </table>

  </article>
</template>

<style scoped>
article {
  font-size: 20px;
  padding: 20px;
}

input,
select,
option {
  font-size: 20px;

}

.inline {
  display: inline-block;
  padding-top: 20px;
  padding-left: 80px;
}

.w-100 {
  min-width: 100px;
}

table {
  margin: 0 20 0 20;
  padding-top: 20px;
}

h2,
h2 {
  padding-top: 20px;
}

span {
  margin-left: 20px;
}

.tal {
  text-align: left;
}

.mx {
  padding: 10;
}

td {
  border: 0.5px solid grey;
  width: 15%;
}
</style>
