<script setup>
import { KITtitle, agregatTitle } from "../services/functions";
// import { tankData } from "../services/data";
import { text } from "../services/text";
const { project, meta, order } = defineProps(["project", "meta", "order"]);
</script>

<template>
  <span class="title">{{ text("powerUnit") }} <span v-if="!order.pump0?.title">
      {{ agregatTitle(project, meta, order) }}
    </span>
    <span v-else>{{ KITtitle(project, order) }}</span>
  </span>
  <section class="tal mt-20">

    <!-- <label>
      <span class="fs-sm px-5">{{ text("type") }}</span>
      <select v-model="meta.tank" :disabled="order.tank?.title" class="ml-10" id="tank">
        <option v-for="(_, t) in tankData" :value="t">
          {{ t }}
        </option>
      </select>
    </label>

    <label class="ml-10">
      <span class="fs-sm px-5 ml-10">{{ text("cooler") }}</span>
      <select v-model="meta.cooler" class="ml-10" id="cooler">
        <option v-for="(title, c) in ['Bez', 'Za filtrem', 'Przed fitrem']" :value="c">
          {{ title }}
        </option>
      </select>
    </label> -->
  </section>
</template>

<style scoped>
.title {
  position: sticky;
  z-index: 100;
  top: 7px;
  font-size: 1.5rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}
</style>
