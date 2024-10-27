<script setup>
import Inputs from "./Inputs.vue";
import Outputs from "./Outputs.vue";
const { data } = defineProps(["data"]);
console.log('data :>> ', data);
</script>

<template>
    <article class="container">
        <Inputs :title="data.title" :inputs="data.inputs" />
        <Outputs :outputs="data.outputs" />
    </article>
    <hr />
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 15px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>
