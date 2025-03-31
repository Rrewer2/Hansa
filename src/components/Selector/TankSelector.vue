<script setup>
import { ref } from "vue";
import { tankData } from '../../services/data';
import { agregatCounting, getStandartTank, getTextWithSpace } from "../../services/functions";


const { project, meta, open } = defineProps(["project", "meta", "open"]);
const emits = defineEmits(["tankSelected"]);
const tank = ref({
  minSize: agregatCounting(project).T,
  title: getTankName(getStandartTank(meta.tank, agregatCounting(project).T))
});

function getTankName(size) {
  if (meta.tank === 'RA') return 'HKBAKRA' + size;
  if (meta.tank === 'BEK') return 'HKBEK' + size;
  if (meta.tank === 'SBT') return 'HKSBT' + `00${size}`.slice(-3);
  if (meta.tank === 'BSK') return 'HKBSK' + size;
};
const updating = (elem) => {
  tank.value.title = getTankName(elem)
  emits("tankSelected", { title: tank.value.title, value: elem });
};
updating(tankData[meta.tank].find(el => el >= tank.value.minSize));
</script>

<template>
  <article>
    <h2>Zbiornik<span>{{ tank.title }}</span></h2>
    <span>
      Minimalna pojemność: {{ tank.minSize }} L
    </span>
    <label>Typ zbiornika:
      <select v-model="meta.tank" @input="() => tank.tank = t">
        <option v-for="(_, t) in tankData" :value="t">
          {{ t }}
        </option>
      </select>
    </label>
    <div>
      <table>
        <thead>
          <td>Wybierz</td>
          <td>Nazwa</td>
        </thead>
        <tbody v-for="elem in tankData[meta.tank]" :value="elem">
          <td>
            <input type="radio" :id="elem" :value="elem" name="elem" @input="() => updating(elem)"
              :checked="elem === tankData[meta.tank].find(el => el >= tank.minSize)" class="mx" />
          </td>
          <td class="tal">
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${getTankName(elem)}`" target="_blank"
              rel="noopener noreferrer">{{ getTextWithSpace(getTankName(elem)) }}
            </a>
          </td>
        </tbody>
      </table>
    </div>
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
