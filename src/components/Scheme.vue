<script setup>
const { invisible } = defineProps(["invisible"]);
</script>

<template>
    <div class="contener">

        <img src="../resources/tank-floating-roof.svg" alt="#" class="" />
        <img src="../resources/FIBL.svg" alt="#" class="" />
        <img src="../resources/pumpentraeger.svg" alt="#" class="" />
        <img src="../resources/electric-motor.svg" alt="#" class="" />
        <img src="../resources/fixed-displacement-pump.svg" alt="#" class="" />
        <!-- <img src="../resources/HKEM.svg" alt="#" class="" /> -->
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
    </div>
</template>

<style scoped>
.l {
    justify-content: center;
}

.contener {
    height: 100vh;
}

img {
    display: block;
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 100px;
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
