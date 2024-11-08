<script setup>
import Filter from './Filter.vue';

</script>

<template>
    <div class="contener">
        <img src="../resources/cylinder.svg" alt="#" class="cyl" />

        <img src="../resources/tank.svg" alt="#" class="" />
        <img src="../resources/FIBL.svg" alt="#" class="" />
        <img src="../resources/motor-b35-pumpX3.svg" alt="#" class="" />
        <img src="../resources/coolerUp.svg" alt="#" class="" />
        <!-- <img src="../resources/coolerDown.svg" alt="#" class="" /> -->
        <!-- <img src="../resources/filterUp.svg" alt="#" class="" /> -->
        <!-- <img src="../resources/filterDown.svg" alt="#" class="" /> -->
        <img src="../resources/pumpentraeger.svg" alt="#" class="" />
        <img src="../resources/motor.svg" alt="#" class="" />
        <img src="../resources/pump.svg" alt="#" class="" />
        <!-- <img src="../resources/HKEM.svg" alt="#" class="hkem" /> -->
        <!-- <main v-if="invisible" class=""> -->
        <!-- <article class=" contener flex-col l"> -->

        <!-- <img src="../resources/MZ-HK-HG-03-900x900-1713174267728.jpg" alt="#" class="" />
    <img src="../resources/MZ-HK-HG-03-900x900-1713174267728.jpg" alt="#" class="" />
    <img src="../resources/MZ-HK-HG-03-900x900-1713174267728.jpg" alt="#" class="" />
    <img src="../resources/MZ-HK-HG-03-900x900-1713174267728.jpg" alt="#" class="" /> -->
        <!-- <img src="../resources/fixed-displacement-pump.svg" alt="#" class="" />
        <img src="../resources/fixed-displacement-pump.svg" alt="#" class="" />
        <img src="../resources/fixed-displacement-pump.svg" alt="#" class="" /> -->
        <!-- </article> -->
        <!-- </main> -->

        <!-- <Motor :Power="data.Power" />
        <Pump /> -->
        <Filter :x="95.5" :y="65" angle="0" />
    </div>
</template>

<style scoped>
.l {
    justify-content: center;
}

.contener {
    height: 90vh;
}

img {
    display: block;
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 100px;
}

.hkem {
    bottom: 0px;
}

.cyl {
    bottom: auto;
    top: 0;
}

/* .tank {
    width: 600px;
    bottom: 0;
    left: 100px;
}

.motor {
    width: 600px;
    bottom: 0;
    left: 100px;
} */
</style>
