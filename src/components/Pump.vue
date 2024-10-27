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
    </div> -->
    <!-- <div v-else> -->
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50 0v50-1" stroke="red" stroke-width="5" />
            <path d="M50 50v50-1" stroke="black" />
            <circle cx="50" cy="50" r="25" fill="000" />
            <circle cx="50" cy="50" r="24" fill="white" />
            <polygon points="45,32 55,32 50,25" fill="black" />
            <line x1="4" y1="48" x2="26" y2="48" stroke="black" />
            <line x1="4" y1="52" x2="26" y2="52" stroke="black" />
            <line x1="4" y1="42" x2="4" y2="58" stroke="black" />
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
