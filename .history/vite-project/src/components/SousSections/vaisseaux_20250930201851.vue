<template>
  <div class="row" :vaisseau="tabFiltre">
    <div
      class="col-md-4 mb-3"
      v-for="(ship, index) in vaisseau"
      :key="ship.name"
    >
      <div class="card h-100 bg-info text-white">
        <img
          src="../../../images/vaisseaux.png"
          class="card-img-top"
          :alt="ship.name"
        />
        <div class="card-body">
          <h5 class="card-title text-uppercase">{{ ship.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Manufacturier : <b>{{ ship.manufacturer }}</b>
          </li>
          <li class="list-group-item">
            Classe : <b>{{ ship.class }}</b>
          </li>
          <li class="list-group-item">
            Capacité cargo : <b>{{ ship["maximum cargo"] }}</b>
          </li>
        </ul>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-bs-toggle="modal"
            :data-bs-target="combinaison(ship.name)"
          >
            Voir les détails
          </button>
        </div>
      </div>
      <DetailsVaisseau :information="ship" :index="index" />
    </div>
  </div>
</template>

<script setup>
import DetailsVaisseau from "@/components/SousSections/detailsVaisseaux.vue";
defineProps({
  vaisseau: Array,
});

function combinaison(index) {
  return "#" + index;
}
const tabVaisseaux = ref(vaisJson.ships);
const tabFiltre = ref([]);
const vitesseInput = ref(0);

watch(vitesseInput, (newValue) => {
  tabFiltre.value = tabVaisseaux.value.filter(
    (ship) => ship.speed >= Number(newValue)
  );

</script>

<style scoped></style>
