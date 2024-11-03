<script setup>
const { inputs } = defineProps(["inputs"]);
const ret0 = num =>
    num > 999 ? num : ("0" + `${num}`).slice(-(`${num}`.length + 1));
const HKSH = () => {
    let res = "";
    if (inputs.i.value) res += `${inputs.i.value} X `;
    res += "HKSH ";
    res += `${ret0(inputs.D.value)} `;
    res += `${ret0(inputs.d.value)} `;
    res += ret0(inputs.L.value);
    return res;
};
</script>

<template>
    <article class="ppp">
        <div class="ppp">
            <label v-for="(item, n) in inputs" :class="n">
                <input v-if="!item.select" type="number" min="0" v-model="item.value" />

                <select v-else v-model="item.value">
                    <option v-for="elem in item.array" :value="elem" :selected="elem === item.value">
                        {{ elem }}
                    </option>
                </select>
            </label>
        </div>
        <a class="HKSH">{{ HKSH() }}</a>
    </article>
</template>

<style scoped>
label,
a {
    position: fixed;
    z-index: 300;
}

input {
    background-color: #ffc400;
    width: 50px;
}

.HKSH {
    left: 40px;
    top: 10px;
}

.i {
    left: 20px;
    top: 30px;
}

.D {
    left: 200px;
    top: 30px;
}

.d {
    left: 250px;
    top: 30px;
}

.L {
    left: 300px;
    top: 30px;
}

.Q {
    left: 200px;
    top: 360px;
}

.P {
    left: 40px;
    top: 260px;
}
</style>
