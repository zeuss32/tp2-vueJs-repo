<template>
	<h1>conteneur 1</h1>
	<div class="container">
		<div class="row" v-if="sysSel">
			<h1>conteneur 2</h1>

			<div class="card col-12 mb-4">
				<div class="card-body">
					<h5 class="card-title text-uppercase">SYSTÈME : {{ sysSel.name }}</h5>
				</div>

				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						SYMBOLE : <b>{{ sysSel.symbol }}</b>
					</li>
					<li class="list-group-item">
						NOMBRE DE PLANÈTES : <b>{{ sysSel.planets.length }}</b>
					</li>
				</ul>

				<div class="row p-3">
					<router-link>
											<div
						class="col-md-4 mb-3"
						v-for="sysP in sysSel.planets"
						:key="sysP.symbol"
					>
						<div class="card h-100">
							<img
								src="../../../images/sys.jpg"
								class="card-img-top"
								:alt="sysP.name"
							/>
							<div class="card-img-overlay align-items-center">
								<h1 class="card-body text-uppercase  ">NOM : {{ sysP.name }}</h1>
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<h1 class="text-white">Système introuvable</h1>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import sysJson from "../../data/systemes.json";
defineProps({
	x: Number,
	y: Number,
});

const route = useRoute();
const symbol = route.params.symbol;
const sysSel = sysJson.systems.find((s) => s.symbol === symbol);
const emit = defineEmits(["nouvellesCoordonnees"]);
</script>

<style scoped></style>
