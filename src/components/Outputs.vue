<script setup>
import { getResults, titleFromArray, parenthesis } from "../services/functions";
import Table from "./Table.vue";
const props = defineProps(["outputs"]);
</script>

<template>
    <article>
        <h3>Wyniki</h3>
        <div class="ppp">
            <div v-for="item in props.outputs">
                <div v-if="!item.table" class="nnn">
                    <i
                        >{{ item.title }} {{ parenthesis(item.unit) }}<br />{{
                            titleFromArray(item.types)
                        }}</i
                    >
                    <div class="o">
                        <b v-if="!item.boolean">{{ getResults(item.value) }}</b>
                        <b v-else>{{ item.options[item.value()] }}</b>
                    </div>
                </div>
                <Table v-else :tableData="item.value" />
            </div>
        </div>
    </article>
</template>

<style scoped>
.ppp {
    /* width: 70px; */
    display: flex;
    flex-flow: wrap;
}
.nnn {
    display: flex;
    flex-direction: column;
    width: 160px;
    align-items: center;
}
.o {
    background-color: #fff;
    padding: 2px;
}
</style>
