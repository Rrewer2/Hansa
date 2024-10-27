<script setup>
// import { coolerData } from "../services/data";
// const { P01 } = defineProps(["P01"]);

// const coolerCalculation = P01 =>
//     coolerData.find(el => el.Performance.max >= P01())?.Model;
</script>

<template>
    <!-- <div v-if="P01() < 0.021">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v100-1" stroke="blue" stroke-width="5" />
        </svg>
    </div>
    <div v-else>  -->
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="15" fill="000" />
            <circle cx="50" cy="50" r="14" fill="white" />
            <polygon points="40,40 46,49 49,46" fill="black" />
            <line x1="47" y1="47" x2="60" y2="60" stroke="black" />
            <line
                x1="65"
                y1="50"
                x2="100"
                y2="50"
                stroke="red"
                stroke-width="5"
            />
        </svg>
        <!-- <p>{{ coolerCalculation(P01) }}</p> -->
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
