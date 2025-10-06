<template>
  <nav class="navbar navbar-expand-lg  fixed-top bg-dark bar_de_N">
    <a class="navbar-brand" href="#">TP-VUEJS</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <RouterLink class="nav-link" to="/systemes"> Systèmes Spatiaux </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/vaisseaux">VAISSEAUX</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">X: {{ x }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Y: {{ y }}</a>
        </li>
        <li class="nav-item dropdown">

          <RouterLink
            class="nav-link  "
            to="/biens">
            BIENS
          </RouterLink>

        </li>
      </ul>
    </div>
  </nav>
  <div id="carouselExampleCaptions" class="carousel slide w-100">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../images/slide-1.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">

        </div>
      </div>
      <div class="carousel-item">
        <img src="../../images/slide-2.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">

        </div>
      </div>
      <div class="carousel-item">
        <img src="../../images/slide-3.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">

        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>





    <h1 class="text-center bg-dark text-white titrePage">
      Starship Company🚀
    </h1>
    <h2 class="bg-dark text-white">coordonnées:({{ x }},{{ y }})</h2>



</template>

<script setup>
import { ref } from "vue";
import CorpsDePage from "./CorpsDePage.vue";
import { RouterLink } from "vue-router";


let x = ref(0);
let y = ref(0);
function newCoords(newX, newY) {
  x.value = newX;
  y.value = newY;
}
</script>

<style>
#carousel img {

  width: 100vw !important;
  height: auto;
  display: block;
}
#carouselExampleCaptions{
  margin-top: 3rem;
}
.container-fluid {


  padding: 0px !important;
  margin: 0px !important;
}
.titrePage {
  color: white !important;
}
.bar_de_N{
  color : white !important;
}
.navbar .nav-link  {
  color: white !important;
}
.navbar-brand{
  color: white !important;
}

</style>
