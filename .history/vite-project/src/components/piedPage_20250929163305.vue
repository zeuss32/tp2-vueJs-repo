<script setup>
let now = new Date();
let heure = now.getHours();
</script>

<template>
  <div class="pied">
    <nav class="navbar navbar-expand-lg fixed-bottom navbar-light pied">
      <div class="container-fluid pied">
        <h4 class="nosNoms">ABOUBACAR KONE - BONSANGE, CHRIS B.</h4>
        <div>
          <img
            v-if="heure >= 8 && heure <= 17"
            src="../../images/soleil.png"
            class="time"
            alt="soleil"
          />
          <img v-else src="../../images/lune.png" class="time" alt="lune" />
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<style>
.nosNoms {
  color: white;
}
.pied {
  background-color: rgb(0, 0, 0);
  transition: background-color 5s;
}
.time {
  width: 50px;
}
.pied{
  margin-top: 5rem;
}
</style>
