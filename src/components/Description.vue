<script setup>
const { project, order } = defineProps(['project', "order"]);

</script>

<template>
  <article>
    <h5>Parametry agregatu:</h5>
    <h5>Wydajność pompy {{ order['pump' + 0]?.pumpData?.Q ?? '' }} L/min ({{ order['pump' + 0]?.pumpData?.CC ?? '' }}
      cm³)
    </h5>
    <h5>Konstrukcja pompy - {{ order['pump' + 0]?.pumpData?.shaft ? 'Pompa z zewn. kołem zębatym' : `Wielotłokowa pompa
      osiowa`}}</h5>

    <h5>Moc napędowa {{ order['motor' + 0]?.motorData?.power ?? '' }} kW ({{ project[0]?.mount ?? '' }})</h5>
    <h5>Znamionowa prędkość obrotowa {{ order['motor' + 0]?.motorData?.n ?? '' }} obr/min</h5>
    <h5>Częstotliwość silnika 50 Hz</h5>
    <h5>Napięcie silnika {{ order['motor' + 0]?.motorData?.U ?? '' }} {{ order['motor' + 0]?.motorData?.U === '230V'
      ? 'jednofazowy' : 'trójfazowy' }}</h5>
    <h5>Kierunek obrotów - {{ order['pump' + 0]?.pumpData?.out.startsWith('Bore') ? '↺' : '↻' }}</h5>

    <h5 v-if="project[0]?.unit[0]?.p">Maks. ciśnienie nastawcze {{ project[0]?.unit[0]?.p ?? '' }} bar</h5>

    <div v-if="order['block' + 0]?.title">
      <h5>Blok sterowniczy CETOP{{ order['block' + 0]?.blockData?.cetop }}</h5>
      <h5>Liczba stacji - {{ order['block' + 0]?.blockData?.stations }} szt</h5>
      <h5 v-if="order.start0?.title">Rozdzielacz startowy suwak GA</h5>
      <h5 v-for="item, i in Object.keys(order).filter(key => key.startsWith('valve0'))">
        {{ i + 1 }} Zawór elektromagnetyczny suwak {{ order[item]?.valveData?.spool }}
      </h5>
      <h5>Napięcie magnetyczne - 24 VDC 1,3A</h5>
    </div>

    <h5 v-if="order.tank?.tankData?.Size">
      Wielkość zbiornika {{ order.tank?.tankData?.Size }} L ({{ order.tank?.tankData?.material ?? '' }})
    </h5>

    <h5 v-if="order.cooler?.title">Chłodnica olej-powietrze</h5>
    <h5 v-if="order.heater?.title">Podgrzewacz zbiornika</h5>
    <h5 v-if="order.levelTemp">Wyłącznik poziomowo-temperaturowy</h5>
    <h5 v-if="order.ventilation">Filtr napowietrzający {{ order.ventilation.title.match(/(P10|P03)/)?.[0] ?? 10 }} (µm)
    </h5>
    <h5 v-if="order.filter">Filtr zlewowy {{ order.filter?.filterData?.filterGrade ?? 10 }} (µm)</h5>
    <h5>Olej mineralny HLP zgodnie z DIN 51524 część 2, ISO VG 46</h5>
    <h5>Zakres lepkości 12 do 800 mm²/s (zalecany zakres 20 do 100)</h5>
    <!-- <h5>Rozdzielacz w położeniu normalnym P->T</h5>
    <h5>Sterowanie rozdzielaczem - 2 cewki 24VDC/1,3A</h5>
    <h5>Do agregatu jest załączona deklaracja włączenia maszyny nieukończonej oraz instrukcja obsługi ze schematem
      hydraulicznym i rysunkami złożeniowymi głównych podzespołów.</h5>
    <h5>Agregat jest przeznaczony do sterowania 1 siłownikiem.</h5>
    <h5>Przewidywany termin dostawy: do 2 tygodni od daty zamówienia.</h5>
    <h5>Dokumentacja 3D dostępna po zamówieniu.</h5>
    <h5>Oferta nie obejmuje sterowania elektrycznego agregatu.
      Oferta nie obejmuje elementów instalacji wymaganych do połączenia poszczególnych bloków roboczych.
      Instalacja połączeniowa może być przedmiotem kolejnej oferty po udostępnieniu przez klienta informacji jej
      dotyczącej.</h5> -->
  </article>
</template>

<style scoped>
h5 {
  text-align: left;
}
</style>
