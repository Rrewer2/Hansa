<script setup>
import { engineMountData, enginesData, freqData } from '../../services/data';
import { reducedPower, round } from '../../services/functions';
import { text } from '../../services/text';

const { project, meta, order, powerUNIT, i } = defineProps(["project", "meta", "order", "powerUNIT", "i"]);

const filteredMotors = () => Object.entries(enginesData).filter(([_, { P, mount }]) => P * 1.25 >=
  reducedPower(powerUNIT.unit) && P * 0.75 <= reducedPower(powerUNIT.unit) && mount === powerUNIT.engineMount);

const getTitle = () => order[`motor${i}`]?.title;
</script>

<template>
  <article @change="onTypeSelect">

    <h2>Silnik<span> {{ getTitle() }}</span></h2>
    <div class="inline w-100">
      <h3 class="border border-bottom-no bgc-g fs-sm px-5">
        {{ text('n') }}
      </h3>
      <select v-model="powerUNIT.n" :disabled="getTitle() || Object.keys(order).some(str => str.includes(`pump${i}`))">
        <option v-for="elem in freqData" :value="elem">{{ elem }}</option>
      </select>
    </div>
    <div class="inline w-100">
      <h3>
        {{ text('engineMount') }}
      </h3>
      <select v-model="powerUNIT.engineMount" :disabled="getTitle()">
        <option v-for="item in engineMountData" :value="item">{{ item }}</option>
      </select>
    </div>
    <div class="inline w-100">
      <h3>
        {{ text('P') }}
      </h3>
      <h3>{{ round(reducedPower(powerUNIT.unit)) }}</h3>
    </div>

    <br>

    <table v-if="filteredMotors().length">
      <thead>
        <td><b><i>Nazwa</i></b></td>
        <td v-for="a in Object.keys(filteredMotors()[0][1])">
          <b><i>{{ a }}</i></b>
        </td>
      </thead>

      <tbody v-for="[title, elem] in filteredMotors()" :value="elem">
        <td class="tal">
          <input type="radio" :id="title" v-model="order[`motor${i}`]" :value="({ title, motorData: elem })"
            name="title" :checked="getTitle() === title" class="mx" />
          <span>
            {{ title }}
          </span>
        </td>
        <td v-for="item in elem">{{ item }}
        </td>
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
