<script setup>
// import Motor from "./Motor.vue";
import Pump from "./Scheme/Pump.vue";
import Tank from "./Scheme/Tank.vue";

// import Input from "./Inputs.vue";
// const inputs = defineProps(["inputs"]);
const { data } = defineProps(["data"]);
</script>

<template>
    <div class="wh80">
        <div class="wrap">
            <img src="../resources/space.svg" alt="#" />
            <!-- <img src="../resources/cylinder.svg" alt="#" /> -->
            <img src="../resources/cylinder-pipe.svg" alt="#" />
            <img class="stick" :class="'left'" src="../resources/cylinder-stick.svg" alt="#" />
        </div>
        <div class="wrap">
            <img src="../resources/space.svg" alt="#" />
            <img src="../resources/valve.svg" alt="#" />
            <!-- <img src="../resources/horizontal line.svg" alt="#" /> -->
            <img src="../resources/knee.svg" alt="#" />
        </div>
        <div class="wrap">
            <img src="../resources/pressure-gauge.svg" alt="#" />
            <img src="../resources/t-point1.svg" alt="#" />
            <img src="../resources/bezp.svg" alt="#" />
            <img src="../resources/filter.svg" alt="#" />
        </div>
        <div class="wrap">
            <img src="../resources/electric-motor.svg" alt="#" />
            <img src="../resources/fixed-displacement-pump.svg" alt="#" />
            <Motor :Power="data.Power" />
            <!-- <Pump /> -->
            <img src="../resources/line.svg" alt="#" />
            <img src="../resources/cooler.svg" alt="#" />
        </div>
        <!-- <img src="../resources/tank-floating-roof.svg" alt="#" /> -->
        <Tank :tank="data.tank" />
    </div>
</template>

<style scoped>
.wrap {
    display: flex;
    flex-direction: row;
    width: 10vw;
    height: 20vh;
}

.wh80 {
    position: fixed;
    width: 40vw;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
}

.stick {
    transition: 5s linear 1s;
}

.left {
    transform: translate(-8vh, 0);
}

.right {
    transform: translate(-20vh, 0);
}
</style>
