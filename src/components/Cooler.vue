<script setup>
import { coolerData } from "../services/data";
const { P01 } = defineProps(["P01"]);

const coolerCalculation = P01 =>
    coolerData.find(el => el.Performance.max >= P01())?.Model;
</script>

<template>
    <div v-if="P01() < 0.021">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v100-1" stroke="blue" stroke-width="5" />
        </svg>
    </div>
    <div v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v100-1" stroke="blue" stroke-width="5" />
            <path d="M25 50l25-25 25 25-25 25z" />
            <path d="M27 50l23-23 23 23-23 23z" fill="white" />
            <polygon points="27,50 35,52 35,48" fill="black" />
            <polygon points="73,50 65,52 65,48" fill="black" />
            <path d="M33 50h34-1" stroke="black" />
            <path d="M50 27v46-1" stroke="black" />
        </svg>
        <p>{{ coolerCalculation(P01) }}</p>
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
