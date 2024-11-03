<script setup>
import { filterData } from "../services/data";
// const { P01 } = defineProps(["P01"]);

const filterCalculation = P01 => filterData?.koza;
</script>

<template>
    <div v-if="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v100-1" stroke="blue" stroke-width="5" />
        </svg>
    </div>
    <div v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v100-1" stroke="blue" stroke-width="5" />
            <path d="M25 50l25-25 25 25-25 25z" />
            <path d="M27 50l23-23 23 23-23 23z" fill="white" />
            <path d="M25 50h50-1" stroke="black" stroke-dasharray="5 2" stroke-width="0.5" />
        </svg>
        <p>{{ filterCalculation(P01) }}</p>
    </div>
</template>

<style scoped>
label,
div {
    width: 10vw;
    height: 20vh;
    z-index: 500;
}

svg {
    /* background-color: #ffc400; */
    width: 100%;
}

p {
    position: relative;
    left: 5vw;
    top: -6.3vw;
}
</style>
