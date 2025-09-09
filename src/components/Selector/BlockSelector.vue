<script setup>
import { ref } from "vue";
import { blockData } from "../../services/data";
import { getTextWithSpace } from "../../services/functions";
import { links } from "../../services/links";
import { text } from "../../services/text";
import CopyText from "./CopyText.vue";
import InputItem from "../InputItem.vue";

const { project, meta, order, powerUNIT, i } = defineProps([
  "project",
  "meta",
  "order",
  "powerUNIT",
  "i",
]);
console.log(powerUNIT[0].unit);
</script>


<style scoped></style>
