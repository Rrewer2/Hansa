<script setup>
import { text } from '../services/text';

const { project, order } = defineProps(['project', "order"]);

</script>

<template>
  <article>
    <h5>{{ text('descr1') }}</h5>
    <h5>{{ text('descr2') }} {{ order['pump' + 0]?.pumpData?.Q ?? '' }} L/min ({{ order['pump' + 0]?.pumpData?.CC ?? ''
    }}
      {{ text('descr3') }})
    </h5>
    <h5>{{ text('descr4') }} - {{ order['pump' + 0]?.pumpData?.shaft ? text('descr5') : text('descr6') }}</h5>

    <h5>{{ text('descr7') }} {{ order['motor' + 0]?.motorData?.power ?? '' }} kW ({{ project[0]?.mount ?? '' }})</h5>
    <h5>{{ text('descr8') }} {{ order['motor' + 0]?.motorData?.n ?? '' }} {{ text('descr9') }}</h5>
    <h5>{{ text('descr10') }} 50 Hz</h5>
    <h5>{{ text('descr11') }} {{ order['motor' + 0]?.motorData?.U ?? '' }} {{ order['motor' + 0]?.motorData?.U ===
      '230V'
      ? text('descr12') : text('descr13') }}</h5>
    <h5>{{ text('descr14') }} - {{ order['pump' + 0]?.pumpData?.out.startsWith('Bore') ? text('descr15') :
      text('descr16') }}</h5>

    <h5 v-if="project[0]?.unit[0]?.p">{{ text('descr17') }} {{ project[0]?.unit[0]?.p ?? '' }} bar</h5>

    <div v-if="order['block' + 0]?.title">
      <h5>{{ text('descr18') }}{{ order['block' + 0]?.blockData?.cetop }}</h5>
      <h5>{{ text('descr19') }} - {{ order['block' + 0]?.blockData?.stations - !!order['start' +
        0]?.title?.startsWith('HK4') }} {{ text('descr20') }}</h5>
      <h5 v-if="order.start0?.title">{{ text('descr21') }} {{ order.start0?.startData?.spool }}</h5>
      <h5 v-for="item, i in Object.keys(order).filter(key => key.startsWith('valve0'))">
        {{ i + 1 }} {{ text('descr22') }} {{ order[item]?.valveData?.spool }}
      </h5>
      <h5>{{ text('descr23') }} - 24 VDC {{ order['block' + 0]?.blockData?.cetop === 5 ? '1.5' : '1.3' }} A</h5>
    </div>

    <h5 v-if="order.tank?.tankData?.Size">
      {{ text('descr24') }} {{ order.tank?.tankData?.Size }} L ({{ order.tank?.tankData?.material ?? '' }})
    </h5>

    <h5 v-if="order.cooler?.title">{{ text('descr25') }}</h5>
    <h5 v-if="order.heater?.title">{{ text('descr26') }}</h5>
    <h5 v-if="order.levelTemp?.title">{{ text('descr27') }}</h5>
    <h5 v-if="order.ventilation?.title">{{ text('descr28') }} {{ order.ventilation?.title?.match(/(P10|P03)/)?.[0] ?? 10
    }} (µm)
    </h5>
    <h5 v-if="order.filter?.title">{{ text('descr29') }} {{ order.filter?.filterData?.filterGrade ?? 10 }} (µm)</h5>
    <h5>{{ text('descr30') }}</h5>
    <h5>{{ text('descr31') }}</h5>
    <h5>{{ text('descr32') }}</h5>
    <h5>{{ text('descr33') }}</h5>
    <h5>{{ text('descr34') }}</h5>
    <h5>{{ text('descr35') }}</h5>
    <h5>{{ text('descr36') }}</h5>
    <h5>{{ text('descr37') }}</h5>
  </article>
</template>

<style scoped>
h5 {
  text-align: left;
}
</style>
