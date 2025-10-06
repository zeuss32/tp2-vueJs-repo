<script setup>
import entete from "./components/entete.vue";
import piedPage from "./components/piedPage.vue";
import { RouterView } from "vue-router";

</script>

<template>
  <entete />
  <RouterView  @nouvellesCoordonnees="newCoords"/>
  <piedPage />
</template>

<style>
#app{
  padding: 0rem;
}
</style>
