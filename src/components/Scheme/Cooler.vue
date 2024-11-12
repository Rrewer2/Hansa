<script setup>
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 300">
        <path d="M550 25l25+25 -25 +25-25 -25z" stroke="black" stroke-width="1" fill="white" />
        <path d="M526 50l9-3 0 6z" fill="black" />
        <path d="M574 50l-9-3 0 6z" fill="black" />
        <path d="M530 50h40-1" stroke="black" stroke-width="1" />

        <path d="M 600 70 A 10 10 0 0 1 580 70" fill="none" stroke="black" stroke-width="1" />
        <path d="M 600 30 A 10 10 0 1 0 580 30" fill="none" stroke="black" stroke-width="1" />
        <path d="M580 70l20-40" stroke="black" stroke-width="1" />
        <path d="M580 30l20+40" stroke="black" stroke-width="1" />
        <path d="M602 45h-10" stroke="black" stroke-width="1" />
        <path d="M602 55h-10" stroke="black" stroke-width="1" />
        <circle cx="615" cy="50" r="15" stroke="black" stroke-width="1" fill="none" />
    </svg>
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
