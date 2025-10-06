<template>
	<div class="container">
		<div class="row" :sys="sysJson.systems">

				<div class="card col-12 mb-4">
					<div class="card-body">
						<h5 class="card-title text-uppercase">SYSTÈME : {{ sys.name }}</h5>
					</div>

					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							SYMBOLE : <b>{{ sys.symbol }}</b>
						</li>
						<li class="list-group-item">
							NOMBRE DE PLANÈTES : <b>{{ sys.planets.length }}</b>
						</li>
					</ul>

					<div class="row p-3">
					  <div
              class="col-md-4 mb-3"
              v-for="sysP in sys.planets"
              :key="sysP.symbol"
            >
              <div class="card h-100">
                <img
                  src="../../../images/sys.jpg"
                  class="card-img-top"
                  :alt="sysP.name"
                />
                <div class="card-body">
                  <h5 class="card-title text-uppercase">NOM : {{ sysP.name }}</h5>
                </div>
                <ul class="list-group list-group-flush text-uppercase">
                  <li class="list-group-item">Symbole : {{ sysP.symbol }}</li>
                  <li class="list-group-item">Type : {{ sysP.type }}</li>
                </ul>
                <div class="card-body">
                  <a v-if="sysP.x!=x && sysP.y!=y "
                    href="#"
                    @click.prevent="$emit('nouvellesCoordonnees', sysP.x, sysP.y)"
                    class="btn btn-primary btn-sm"
                    >Localisation</a
                  >
                  <a v-else="sysP.x==x && sysP.y==y "
                    href="#"
                    @click.prevent="$emit('nouvellesCoordonnees', sysP.x, sysP.y)"
                    class="btn btn-primary btn-sm disabled"
                    >Localisation</a
                  >
                </div>
              </div>
            </div>
					</div>
				</div>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import sysJson from "../../data/systemes.json";
defineProps({
	sysJson: Array,
	x: Number,
	y: Number,
});

const emit = defineEmits(["nouvellesCoordonnees"]);
</script>

<style scoped></style>
