<script setup>
import { ref } from "vue";
import PumpUnit from "./components/PumpUnit.vue"
import { powerUnitCounting, agregatCounting, getId, agregatTitle } from "./services/functions";
import { tankData } from "./services/data";
const cylInit = { D: 100, d: 60, L: 500 };
const pumpInit = { Q: 7.5, p: 200 };
const getNewPump = () => ({ ...pumpInit, id: getId('p'), HKSH: [{ ...cylInit, id: getId('c') }] });
const project = ref([]);
const meta = ref({ tank: 'RA' });
const getNewPowerUnit = () => project.value.push({ id: getId('u'), unit: [getNewPump()] });
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
</script>

<template>
    <main class="app">
        <section class="">
            <h1>Agregat {{ agregatTitle(project, meta.tank) }}</h1>
            <div class="flex-row flex-left">
                <p v-for="r in agregatCounting(project, meta.tank)">{{ r }}</p>
                <select v-model="meta.tank">
                    <option v-for="(_, t) in tankData" :value="t">
                        {{ t }}
                    </option>
                </select>
            </div>
        </section>
        <section v-for="( { id, unit }, k ) in project" class="border px-5 my-2">
            <div :key="id">
                <h2 class="text-left">
                    <button :disabled="project.length < 2" @click="delUnit(k)">X</button>
                    Zespół pompujacy {{ powerUnitCounting(unit) }}
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

    </main>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}

.app {
    background-color: rgba(0, 0, 0, 0.15);
    padding: 10px;
    width: 100vw;
    /* height: 100vh; */
    /* display: grid;
    grid-template-columns: 40vw 60vw; */
}

main {
    min-height: 100vh;
    width: 100vw;
    padding: 0 10px;
}

input {
    width: 90px
}

button {
    padding: 0 5px;
    /* height: 50%; */
    background-color: #dcb4b4;
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
    border: solid;
}

.bgc-w {
    background-color: #a9bed2;
}

.bgc-g {
    background-color: #ffffff54;
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
    border: solid 2px yellow;
}

.my-2 {
    margin: 5px 0;
}
</style>
