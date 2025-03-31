<script setup>
import { ref } from "vue";
import PumpUnit from "./components/PumpUnit.vue";
import { getId, } from "./services/functions";
import Navbar from "./components/Navbar.vue";
import Title from "./components/Title.vue";
import Scheme from "./components/Scheme.vue";
import Oferta from "./components/Oferta.vue";
import Selector from "./components/Selector.vue";
import PumpUnitTitle from "./components/PumpUnitTitle.vue";
const cylInit = { D: 100, d: 60, L: 500, z: 1, spool: 'E', type: 22, form: 'hor' };
const pumpInit = { Q: 7.5, p: 200, n: 1500, DR2type: 3 };
const getNewPump = () => ({ ...pumpInit, id: getId('p'), HKSH: [{ ...cylInit, id: getId('c') }] });
const project = ref([]);
const order = ref({});
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
const navPage = ref([false, false, true, false]);
</script>

<template>
    <main class="app">
        <article v-if="navPage[0]">
            <Title :project="project" :meta="meta" :order="order.tank" />

            <section v-for="({ id, unit }, k) in project" class="border px-5 my-2">
                <div :key="id">
                    <PumpUnitTitle :project="project" :k="k" :unit="unit" :btnDisabled="project.length < 2"
                        @delUnit="delUnit" />
                    <div v-for="(pump, i) in unit" class="border-l pl-25 my-2">
                        <PumpUnit :key="pump.id" :pumpData="pump" @pumpUpdate="(a) => unit[i] = a"
                            @addCyl="() => addCyl(k, i)" :btnDisabled="unit.length < 2"
                            @delPump="() => delPump(k, pump.id)">
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

        <Scheme class="scheme" v-if="navPage[1]" :project="project" :meta="meta" />

        <Selector v-if="navPage[2]" :project="project" :order="order" :meta="meta"
            @pumpSelected="(title) => console.log(title)" @projectUpdated="pump => { }" />

        <Oferta v-if="navPage[3]" />
    </main>
    <Navbar @nav="(ind) => navPage = navPage.map((_, k) => ind === k)" :navPage="navPage" />
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
    min-height: 100vh;
    width: 100vw;
    padding: 0 10px;
}

svg {
    display: block;
    /* width: 100%; */
    /* position: absolute; */
    /* border: #ffc67a solid 2px; */
}

input[type="number"],
select {
    max-width: 13vh;
    min-width: 10vh;
}

button {
    margin: 5px;
    padding: 5px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 5px;
    background-color: #a87575;
    border: 1px solid;
}

button:hover {
    background-color: #133fc3;
    color: aliceblue;
    transition: 0.5s;
}

.btn-add {
    padding: 0 10px;
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
