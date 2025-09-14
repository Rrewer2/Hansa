<script setup>
const { project, order } = defineProps(['project', "order"]);

</script>

<template>
  <article>
    <h3>Parametry agregatu:</h3>
    <h3>Wydajność pompy {{ order['pump' + 0]?.pumpData?.Q ?? '' }} L/min ({{ order['pump' + 0]?.pumpData?.CC ?? '' }}
      cm³)
    </h3>
    <h3>Konstrukcja pompy - {{ order['pump' + 0]?.pumpData?.shaft ? 'Pompa z zewn. kołem zębatym' : `Wielotłokowa pompa
      osiowa`}}</h3>

    <h3>Moc napędowa {{ order['motor' + 0]?.motorData?.power ?? '' }} kW</h3>
    <h3>Znamionowa prędkość obrotowa {{ order['motor' + 0]?.motorData?.n ?? '' }} obr/min</h3>
    <h3>Częstotliwość silnika 50 Hz</h3>
    <h3>Napięcie silnika {{ order['motor' + 0]?.motorData?.U ?? '' }} trójfazowy</h3>
    <h3>Kierunek obrotów - {{ order['pump' + 0]?.pumpData?.out.startsWith('Bore') ? '↺' : '↻' }}</h3>

    <h3>Maks. ciśnienie nastawcze {{ project[0]?.unit[0]?.p ?? '' }} bar</h3>
    <h3 v-if="order.tank?.tankData?.Size">
      Wielkość zbiornika {{ order.tank?.tankData?.Size }} L ({{ order.tank?.tankData?.material ?? '' }})
    </h3>
    <h3>Olej mineralny HLP zgodnie z DIN 51524 część 2, ISO VG 46</h3>
    <h3>Zakres lepkości 12 do 800 mm²/s (zalecany zakres 20 do 100)</h3>

    <h3>Blok sterowniczy CETOP{{ order['block' + 0]?.blockData?.cetop }}</h3>
    <h3>Liczba stacji - {{ order['block' + 0]?.blockData?.stations }} szt</h3>
    <h3 v-for="item, i in Object.keys(order).filter(key => key.startsWith('valve0'))">
      {{ i + 1 }} Zawór elektromagnetyczny suwak {{ order[item]?.valveData?.spool }}
    </h3>
    <h3>Napięcie magnetyczne - 24 VDC</h3>

    <h3>Chłodnica olej-powietrze - {{ !!order.cooler?.title ? 'Tak' : 'Nie' }}</h3>
    <h3>Wyłącznik poziomowo-temperaturowy</h3>
    <h3>Filtr napowietrzający 10 µm</h3>
    <h3>Filtr zlewowy 10 µm</h3>
    <h3></h3>
    <!-- <h3>Rozdzielacz w położeniu normalnym P->T</h3>
    <h3>Sterowanie rozdzielaczem - 2 cewki 24VDC/1,3A</h3>
    <h3>Do agregatu jest załączona deklaracja włączenia maszyny nieukończonej oraz instrukcja obsługi ze schematem
      hydraulicznym i rysunkami złożeniowymi głównych podzespołów.</h3>
    <h3>Agregat jest przeznaczony do sterowania 1 siłownikiem.</h3>
    <h3>Przewidywany termin dostawy: do 2 tygodni od daty zamówienia.</h3>
    <h3>Dokumentacja 3D dostępna po zamówieniu.</h3>
    <h3>Oferta nie obejmuje sterowania elektrycznego agregatu.
      Oferta nie obejmuje elementów instalacji wymaganych do połączenia poszczególnych bloków roboczych.
      Instalacja połączeniowa może być przedmiotem kolejnej oferty po udostępnieniu przez klienta informacji jej
      dotyczącej.</h3> -->
  </article>
</template>

<style scoped>
h3 {
  text-align: left;
}
</style>
