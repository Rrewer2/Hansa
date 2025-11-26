<script setup>
import { computed } from "vue";
import { text } from "../services/text";
import CopyText from "./Selector/CopyText.vue";

const { project, order } = defineProps(["project", "order"]);

const description = computed(() => {
  const arr = [];

  arr.push(text("descr1"));

  arr.push(
    `${text("descr2")} ${[order["pump0"]?.pumpData?.Q, order["pump0"]?.pumpData?.Q1, order["pump0"]?.pumpData?.Q2].filter((el) => el).join("/") ?? ""} L/min (${[order["pump0"]?.pumpData?.CC, order["pump0"]?.pumpData?.CC1, order["pump0"]?.pumpData?.CC2].filter((el) => el).join("/") ?? ""} ${text("descr3")})`,
  );

  arr.push(`${text("descr4")} - ${order["pump0"]?.pumpData?.group ? text("descr5") : text("descr6")}`);

  arr.push(`${text("descr7")} ${order["motor0"]?.motorData?.power ?? ""} kW (${project[0]?.mount ?? ""})`);

  arr.push(`${text("descr8")} ${order["motor0"]?.motorData?.n ?? ""} ${text("descr9")}`);

  arr.push(`${text("descr10")} 50 Hz`);

  arr.push(
    `${text("descr11")} ${order["motor0"]?.motorData?.U ?? ""} ${
      order["motor0"]?.motorData?.U === "230V" ? text("descr12") : text("descr13")
    }`,
  );

  arr.push(`${text("descr14")} - ${order["pump0"]?.pumpData?.out?.startsWith("Bore") ? text("descr15") : text("descr16")}`);

  if (project[0]?.unit[0]?.p) {
    arr.push(`${text("descr17")} ${project[0]?.unit[0]?.p} bar`);
  }

  if (order["block0"]?.title) {
    arr.push(`${text("descr18")}${order["block0"]?.blockData?.cetop}`);
    arr.push(
      `${text("descr19")} - ${order["block0"]?.blockData?.stations - !!order["start0"]?.title?.startsWith("HK4")} ${text("descr20")}`,
    );

    if (order.start0?.title) {
      arr.push(`${text("descr21")} ${order.start0?.startData?.spool}`);
    }

    Object.keys(order)
      .filter((key) => key.startsWith("valve0"))
      .forEach((key, i) => {
        arr.push(`${i + 1} ${text("descr22")} ${order[key]?.valveData?.spool}`);
      });

    arr.push(`${text("descr23")} - 24 VDC ${order["block0"]?.blockData?.cetop === 5 ? "1.5" : "1.3"} A`);
  }

  if (order.tank?.tankData?.Size) {
    arr.push(`${text("descr24")} ${order.tank?.tankData?.Size} L (${order.tank?.tankData?.material ?? ""})`);
  }

  if (order.cooler?.title) arr.push(text("descr25"));
  if (order.heater?.title) arr.push(text("descr26"));
  if (order.levelTemp?.title) arr.push(text("descr27"));
  if (order.ventilation?.title) {
    arr.push(`${text("descr28")} ${order.ventilation?.title?.match(/(P10|P03)/)?.[0] ?? 10} (µm)`);
  }
  if (order.filter?.title) {
    arr.push(`${text("descr29")} ${order.filter?.filterData?.filterGrade ?? 10} (µm)`);
  }
  if (order.trays?.title) {
    arr.push(text("descr38"));
  }
  if (order.frames?.title) {
    arr.push(text("descr39"));
  }

  // решта статичних описів
  for (let i = 30; i <= 37; i++) arr.push(text(`descr${i}`));

  return arr;
});
</script>

<template>
  <article>
    Copy text<CopyText :text="description.join('\n')" />
    <h5 v-for="(item, i) in description" :key="i">{{ item }}</h5>
  </article>
</template>

<style scoped>
h5 {
  text-align: left;
  font-size: 1rem;
}
</style>
