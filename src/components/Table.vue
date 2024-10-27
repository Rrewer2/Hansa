<script setup>
import { round } from "../services/functions";
const props = defineProps(["tableData"]);
</script>

<template>
    <table>
        <thead>
            <tr>
                <td v-for="head in props.tableData().head">
                    <b
                        ><i>{{ head }}</i></b
                    >
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(body, i) in props.tableData().body">
                <td>
                    <b
                        ><i>{{ i }}</i></b
                    >
                </td>
                <td v-for="item in body">{{ round(item) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
