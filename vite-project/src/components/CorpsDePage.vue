<template>
  <div class="accordion accordion-flush w-100" id="accordionFlushExample1">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          #1 : SYSTEMES
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <Systemes
            :systems="sysJson.systems"
            @nouvellesCoordonnees="transCoords"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          #2 : VAISSEAUX
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <h3>
            Entrez une vitesse
            <input v-model="vitesseInput" type="number" placeholder="" />
          </h3>
          <Vaisseaux :vaisseau="tabFiltre"></Vaisseaux>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          # 3 : BIEN ET MATERIAUX
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <BiensEtMateriaux :bien="bienJson.goods"></BiensEtMateriaux>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Systemes from "@/components/SousSections/systemes.vue";
import Vaisseaux from "@/components/SousSections/vaisseaux.vue";
import BiensEtMateriaux from "@/components/SousSections/biens.vue";


import sysJson from "../data/systemes.json";
import vaisJson from "../data/vaisseaux.json";
import bienJson from "../data/biens.json";

const emit = defineEmits(["nouvellesCoordonnees"]);

function transCoords(x, y) {
  emit("nouvellesCoordonnees", x, y);
}
const tabVaisseaux = ref(vaisJson.ships);
const tabFiltre = ref([]);
const vitesseInput = ref(0);

watch(vitesseInput, (newValue) => {
  tabFiltre.value = tabVaisseaux.value.filter(
    (ship) => ship.speed >= Number(newValue)
  );

});
</script>
<style>


</style>
