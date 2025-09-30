<template>
  <div
    class="modal fade"
    :id="information.name"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Informations</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            NOM: <b>{{ information.name }}</b>
          </li>
          <li class="list-group-item">
            CLASSE: <b>{{ information.class }}</b>
          </li>
          <li class="list-group-item">
            MANUFACTURIER: <b>{{ information.manufacturer }}</b>
          </li>
          <li class="list-group-item">
            TYPE: <b>{{ information.type }}</b>
          </li>
          <li class="list-group-item">
            CAPACITÉ DU CARGO: <b>{{ information["maximum cargo"] }}</b>
          </li>
          <li class="list-group-item">
            BLINDAGE: <b>{{ information.plating }}</b>
          </li>
          <li class="list-group-item">
            VITESSE: <b>{{ information.speed }}</b>
          </li>
          <li class="list-group-item">
            NOMBRE D'ARME: <b>{{ information.weapons }}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  information: Object,
  index: Number,
});
</script>
