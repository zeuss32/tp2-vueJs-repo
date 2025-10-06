<template>
<div class="row p-3">
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
							<div class="card-body">
								<h5 class="card-title text-uppercase">NOM : {{ sysP.name }}</h5>
							</div>
							<ul class="list-group list-group-flush text-uppercase">
								<li class="list-group-item">Symbole : {{ sysP.symbol }}</li>
								<li class="list-group-item">Type : {{ sysP.type }}</li>
							</ul>
							<div class="card-body">
								<a
									v-if="sysP.x != x && sysP.y != y"
									href="#"
									@click.prevent="$emit('nouvellesCoordonnees', sysP.x, sysP.y)"
									class="btn btn-primary btn-sm"
									>Localisation</a
								>
								<a
									v-else="sysP.x == x && sysP.y == y"
									href="#"
									@click.prevent="$emit('nouvellesCoordonnees', sysP.x, sysP.y)"
									class="btn btn-primary btn-sm disabled"
									>Localisation</a
								>
							</div>
						</div>
					</div>
				</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

 defineProps({
    sysSel : Object,
})
const route = useRoute();
const symbol = route.params.symbol;
const sysP = sysSel.systems.find((s) => s.symbol === symbol);
</script>

<style>

</style>
