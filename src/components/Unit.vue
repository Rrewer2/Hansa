<script setup>
import { ref } from "vue";
const numberOfPumpingUnits = ref(1);
const props = defineProps(["numberOfPumpingUnits"]);
const numberOfPumps = ref(1);
</script>

<template>
        <div>
            <label>
                <input
                    type="number"
                    min="1"
                    v-model="numberOfPumpingUnits"
                />
            </label>
        </div>
      <ul v-for="_ in Array(props.numberOfPumpingUnits)">
        <li>
          <label>Кількість помп на одному двигуні
                <input
                    type="number"
                    min="1"
                    v-model="numberOfPumps"
                />
            </label>
        </li>
      </ul>
</template>

<style>
</style>
