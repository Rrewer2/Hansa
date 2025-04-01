<script setup>
import { ref } from "vue";
import { pumpData, freqData } from '../../services/data';
import { getQ, getTextWithSpace, getVFU, round } from "../../services/functions";
import { text } from "../../services/text";


const { project } = defineProps(["project"]);
const emits = defineEmits(["pumpSelected"]);
const pump = ref({
  Q: project[0].unit[0].Q,
  type: '',
  n: project[0].unit[0].n,
  founded: null,
  title: null
});

const onTypeSelect = () => {
  pump.value.founded = null;

  if (!pump.value.type) return;
  if (pump.value.type === 'gears') {
    pump.value.founded = pumpData[pump.value.type]
      .map(([maker, pumpsByGroup]) => pumpsByGroup
        .map((el, group) => Object.entries(el)
          .map(([title, data]) => ([title, { ...data, maker, group }]))
          .filter((el) => el[1].CC - getVFU(project[0].unit[0].Q, project[0].unit[0].n) >= -1.5 && el[1].CC - getVFU(project[0].unit[0].Q, project[0].unit[0].n) <= 1.5)
        )
      ).flat(2);
  }
  if (pump.value.type === 'piston') {
    pump.value.founded = pumpData[pump.value.type]
      .map(([maker, pumpsByGroup]) => Object.entries(pumpsByGroup)
        .map(([title, data]) => ([title, { ...data, maker }]))
        .filter((el) => el[1].CC - getVFU(project[0].unit[0].Q, project[0].unit[0].n) >= -12 && el[1].CC - getVFU(project[0].unit[0].Q, project[0].unit[0].n) <= 12)
      ).flat();
  }
};
const selectedPump = ([title, elem]) => {
  pump.value.title = title;
  project[0].unit[0].Q = round(getQ(elem.CC, project[0].unit[0].n));
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
      <input type="number" min="0" v-model="project[0].unit[0].Q" @change="onTypeSelect" :disabled="false" />
    </div>

    <div class="inline w-100">
      <h3>
        VFU cm³
      </h3>
      <h3>{{ getVFU(project[0].unit[0].Q, project[0].unit[0].n) }}</h3>
    </div>

    <div class="inline w-100">
      <h3>
        ν, min⁻¹
      </h3>
      <select v-model="project[0].unit[0].n" @change="onTypeSelect">
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
            <input type="radio" :id="title" :value="getQ(elem.CC, project[0].unit[0].n)" v-model="project[0].unit[0].Q"
              name="title" :checked="pump.title === title" class="mx" />
            <a :href="`https://shop.hansa-flex.pl/pl_PL/p/${title}`" target="_blank" rel="noopener noreferrer">
              {{ getTextWithSpace(title) }}
            </a>
          </td>
          <td>{{ round(getQ(elem.CC, project[0].unit[0].n)) }}</td>
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
