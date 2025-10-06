<script setup>
import entete from "./components/entete.vue";
import piedPage from "./components/piedPage.vue";
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
