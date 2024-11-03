<script setup>
import { tankData } from "../services/data";
import Select from "./Select.vue";
const { tank } = defineProps(["tank"]);
const isObj = el => (el.Size ? el.Size : el);
const inputs = () => ({
    array: Object.entries(tankData).map(
        row => row[0] + `${isObj(row[1].find(el => isObj(el) >= tank()))}`
    ),
});

/* <label v-for="item in inputs" class="nnn">
        <i>{{ item.title }} ({{ item.unit }})</i>
        <select v-model="item.value">
            <option
                v-for="elem in item.array"
                :value="elem"
                :selected="elem === item.value"
            >
                {{ elem }}
            </option>
        </select>
    </label> */
</script>

<template>
    <!-- <div v-if="P01() < 0.021">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v100-1" stroke="blue" stroke-width="5" />
        </svg>
    </div> -->
    <div class="all">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" fill="#fff">
            <path d="M15 10v70h370V10" stroke="#000" stroke-width="3" />
            <path d="M10 12V5h380V12" stroke="#000" stroke-width="3" />
        </svg>
        <!-- <Table :tableData="coolerCalculation" /> -->
        <Select :inputs="inputs()" />
        <i>{{ tank() }}</i>
    </div>
</template>

<style scoped>
label,
div {
    width: 10vw;
    height: 20vh;
    z-index: 500;
    position: absolute;
}

svg {
    /* background-color: #ffc400; */
    width: 100%;
}

p {
    position: relative;
    left: 5vw;
    top: 900px;
}
</style>
