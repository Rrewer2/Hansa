<script setup>
import Select from "./Select.vue";
const { title, inputs } = defineProps(["title", "inputs"]);
</script>

<template>
    <article>
        <h3 v-if="title">{{ title }}</h3>
        <div class="ppp">
            <label v-for="item in inputs" class="nnn">
                <i>{{ item.title }} ({{ item.unit }})</i>
                <input v-if="!item.select" type="number" min="0" v-model="item.value" />
                <select v-else v-model="item.value">
                    <option v-for="elem in item.array" :value="elem" :selected="elem === item.value">
                        {{ elem }}
                    </option>
                </select>
            </label>
        </div>
    </article>
</template>
<style scoped>
.ppp {
    display: flex;
    justify-content: space-around;
}

.nnn {
    margin: 0 1px;
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-content: space-between;
}
</style>
