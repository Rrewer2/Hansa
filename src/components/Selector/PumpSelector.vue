<script setup>
import { ref } from "vue";
import { pumpData, freqData } from '../../services/data';
import { getTextWithSpace, getVFU, round } from "../../services/functions";
import { text } from "../../services/text";


const { project } = defineProps(["project"]);
const emits = defineEmits(["pumpSelected", "projectUpdated"]);
const pump = ref({
  Q: project[0].unit[0].Q,
  type: '',
  n: project[0].unit[0].n,
  founded: null,
  title: null
});

const onTypeSelect = () => {
  pump.value.founded = null;
  emits('projectUpdated', pump);

  if (!pump.value.type) return;
  if (pump.value.type === 'gears') {
    pump.value.founded = pumpData[pump.value.type]
      .map(([maker, pumpsByGroup]) => pumpsByGroup
        .map((el, group) => Object.entries(el)
          .map(([title, data]) => ([title, { ...data, maker, group }]))
          .filter((el) => el[1].CC - getVFU(pump.value.Q, pump.value.n) >= -1.5 && el[1].CC - getVFU(pump.value.Q, pump.value.n) <= 1.5)
        )
      ).flat(2);
  }
  if (pump.value.type === 'piston') {
    pump.value.founded = pumpData[pump.value.type]
      .map(([maker, pumpsByGroup]) => Object.entries(pumpsByGroup)
        .map(([title, data]) => ([title, { ...data, maker }]))
        .filter((el) => el[1].CC - getVFU(pump.value.Q, pump.value.n) >= -12 && el[1].CC - getVFU(pump.value.Q, pump.value.n) <= 12)
      ).flat();
  }
};
const selectedPump = ([title, elem]) => {
  pump.value.title = title;
  pump.value.Q = round(elem.CC * pump.value.n * 0.96 / 1000);
  emits('pumpSelected', [title, elem]);
};

</script>

<template>
  <article>
    <h2>Pompa<span>{{ pump.title }}</span></h2>
    <div class="inline w-100">
      <h3>
        Objętość L/min
      </h3>
      <input type="number" min="0" v-model="pump.Q" @change="onTypeSelect" :disabled="false" />
    </div>

    <div class="inline w-100">
      <h3>
        VFU cm³
      </h3>
      <h3>{{ getVFU(pump.Q, pump.n) }}</h3>
    </div>

    <div class="inline w-100">
      <h3>
        ν, min⁻¹
      </h3>
      <select v-model="pump.n" @change="onTypeSelect">
        <option v-for="item in freqData" :value="item">{{ item }}</option>
      </select>
    </div>

    <div class="inline w-100">
      <h3>
        Typ pompy
      </h3>
      <select v-model="pump.type" @change="onTypeSelect">
        <option v-for="item in Object.keys(pumpData)" :value="item">{{ text(item) }}</option>
      </select>
    </div>

    <!-- <div class="inline w-100">
      <h3>
        Grupa
      </h3>
      <select v-model="pump.group">
        <option v-for="item in pumpData.group" :value="item">{{ item }}</option>
      </select>
    </div> -->
    <br>
    <div v-if="pump.founded">
      <h2>Wyniki</h2>
      <table>
        <thead>
          <td>
          </td>
          <td><b><i>L/min</i></b></td>
          <td v-for="a in Object.keys(pump.founded[0][1])">
            <b><i>{{ a }}</i></b>
          </td>
        </thead>
        <tbody v-for="[title, elem] in pump.founded" :value="elem" @input="() => selectedPump([title, elem])">
          <td class="tal">
            <input type="radio" :id="title" :value="title" name="title" :checked="pump === title" class="mx" />
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
          </td>
          <td>{{ round(pump.n * 0.96 * elem.CC / 1000) }}</td>
          <td v-for="item in elem">{{ item }}
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
