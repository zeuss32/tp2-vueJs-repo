<template>
  <div class="row">
    <div class="col-3" v-for="goods in sorted">
      <div class="card h-100" >
        <img :src="goods.url" class="card-img-top h-auto" alt="" />


      <div class="card-body"  >
        <br />
        <h5 class="card-title ">{{ goods.name }}</h5>
        <h5 class="card-title ">Symbôle : {{ goods.symbol }}</h5>
        <h5 class="card-title ">volumePerUnit : {{ goods.volumePerUnit }}</h5>
      </div>
      <br />
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
let props = defineProps({
  bien: Array,


});

let sorted = computed(() => {
  return props.bien.sort((a, b) => (a.name < b.name ? -1 : 1));
});
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px !important;
  }
</style>
