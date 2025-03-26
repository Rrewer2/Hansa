<script setup>
import { ref } from "vue";
import PumpUnit from "./components/PumpUnit.vue";
import { powerUnitCounting, agregatCounting, getId, agregatTitle, round } from "./services/functions";
import { engineMountData, tankData } from "./services/data";
import Navbar from "./components/Navbar.vue";
import Scheme from "./components/Scheme.vue";
import Oferta from "./components/Oferta.vue";
import Selector from "./components/Selector.vue";
const cylInit = { D: 100, d: 60, L: 500, z: 1, spool: 'E', type: 22, form: 'hor' };
const pumpInit = { Q: 7.5, p: 200, n: 1500, DR2type: 3 };
const getNewPump = () => ({ ...pumpInit, id: getId('p'), HKSH: [{ ...cylInit, id: getId('c') }] });
const project = ref([]);
const meta = ref({ tank: 'RA', cooler: 2 });
const getNewPowerUnit = () => project.value.push({ id: getId('u'), unit: [getNewPump()], engineMount: 'B35' });
getNewPowerUnit();
const addCyl = (k, i) => project.value[k].unit[i].HKSH.push(project.value[k].unit[i].HKSH.length
    ? {
        ...project.value[k].unit[i].HKSH.at(-1),
        id: getId('c')
    }
    : { ...cylInit, id: getId('c') });

const addPump = (k) => project.value[k].unit.push(getNewPump());
const delPump = (k, x) => project.value[k].unit = project.value[k].unit.filter(({ id }) => id !== x);
const delUnit = (k) => project.value = project.value.filter((_, i) => i !== k);
const stan = ref([true, false, false, false]);
</script>

<template>
    <main class="app">
        <article v-if="stan[0]">
            <section class="">
                <h1>Agregat {{ agregatTitle(project, meta.tank) }}</h1>
                <div class="flex-row flex-left">
                    <label>Typ zbiornika:
                        <select v-model="meta.tank">
                            <option v-for="(_, t) in tankData" :value="t">
                                {{ t }}
                            </option>
                        </select>
                    </label>
                    <label>Cooler:
                        <select v-model="meta.cooler">
                            <option v-for="(_, c) in [0, 1, 2]" :value="c">
                                {{ c }}
                            </option>
                        </select>
                    </label>
                </div>
            </section>

            <section v-for="({ id, unit }, k) in project" class="border px-5 my-2">
                <div :key="id">
                    <h2 class="text-left">
                        <button :disabled="project.length < 2" @click="delUnit(k)">X</button>
                        Zespół pompujacy {{ powerUnitCounting(unit) }}
                        <select v-model="project[k].engineMount">
                            <option v-for="item in engineMountData" :value="item">{{ item }}</option>
                        </select>
                    </h2>
                    <div v-for="(pump, i) in unit" class="border-l pl-25 my-2">
                        <PumpUnit :key="pump.id" :pumpData="pump" @pumpUpdate="(a) => unit[i] = a"
                            @addCyl="() => addCyl(k, i)">
                            <button :disabled="unit.length < 2" @click="() => delPump(k, pump.id)">
                                X
                            </button>
                        </PumpUnit>
                    </div>
                    <div class="flex-row flex-left pl-25">
                        <button @click="() => addPump(k)" class="btn-add my-2">
                            + Pompa
                        </button>
                    </div>

                </div>
            </section>

            <div class="flex-row flex-left my-2">
                <button @click="getNewPowerUnit" class="btn-add">
                    + Zespół pompujacy
                </button>
            </div>
            <Scheme class="schemeMin" :project="project" :meta="meta" />
        </article>

        <Scheme class="scheme" v-if="stan[1]" :project="project" :meta="meta" />
        <Selector v-if="stan[2]" :project="project" @pumpSelected="(title) => ({})" />
        <Oferta v-if="stan[3]" />
    </main>
    <Navbar @nav="(ind) => stan = stan.map((_, k) => ind === k)" :stan="stan" />
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}

.app {
    background-color: rgba(0, 0, 0, 0.25);
    /* padding-bottom: 5vh; */
    height: 100vh;
    width: 100vw;
    padding: 0 10px;
}

svg {
    display: block;
    /* width: 100%; */
    /* position: absolute; */
    /* border: #ffc67a solid 2px; */
}

input {
    /* min-width: 60px; */
}

button {
    padding: 0 5px;
    /* height: 50%; */
    background-color: #dcb4b4;
    border: 1px solid;
}

.btn-add {
    background-color: #95c98c;
}

.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: stretch;
}

.flex-col {
    display: flex;
    flex-direction: column;
}

.flex-left {
    justify-content: left;
}

.flex-center {
    align-content: center;
}

.border {
    border: 1px solid;
}

.border-no {
    border: 1px solid rgba(0, 0, 0, 0);
}

.border-bottom-no {
    border-bottom: none;
}

.bgc-w {
    background-color: #f8eeac;
}

.bgc-g {
    background-color: #9bf0ff54;
}

.pl-25 {
    padding-left: 25px;
}

.px-5 {
    padding: 0 5px;
}

.border-l {
    border: solid 0.5px;
}

.text-left {
    text-align: left;
}

.error {
    border: solid 1px red;
}

.yellow {
    border: solid 1px yellow;
}

.my-2 {
    margin: 3px 0;
}

.invisible {
    display: none;
}

.scheme {
    height: 100vh;
    width: 100vw;
    background-color: #969696;
}

.schemeMin {
    height: 60vh;
    width: 60vw;
    background-color: rgba(0, 0, 0, 0);
}
</style>
