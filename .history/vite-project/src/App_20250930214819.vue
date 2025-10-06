<script setup>
import { ref } from "vue";
import entete from "./components/entete.vue";
import piedPage from "./components/piedPage.vue";
import { RouterView } from "vue-router";
let x = ref(0);
let y = ref(0);
function newCoords(newX, newY) {
  x.value = newX;
  y.value = newY;
}
</script>

<template>
  <entete :x="x" :y="y" />
  <RouterView  @nouvellesCoordonnees="newCoords"/>
  <piedPage />
</template>

<style>
#app{
  padding: 0rem;
}
</style>
