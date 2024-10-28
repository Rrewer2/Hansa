<script setup>
import { ref } from "vue";
import Hydrocylinder from "./components/Hydrocylinder.vue"

</script>

<template>
    <div class="app">
        <Hydrocylinder />
        <Hydrocylinder />
        <Hydrocylinder />
        <Hydrocylinder />
        <Hydrocylinder />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}
.app {
    background-color: rgba(0, 66, 25, 0.5);
    padding: 10px;
    width: 100vw;
    height: 100vh;
    /* display: grid;
    grid-template-columns: 40vw 60vw; */
}
</style>
