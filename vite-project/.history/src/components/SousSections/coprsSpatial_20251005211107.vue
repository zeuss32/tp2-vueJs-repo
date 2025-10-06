<template>
<div class="row p-3 d-flex justify-content-center">
    <h1 class=" bg-dark text-white">Corps Spatial : {{ sysSe.name }}</h1>
					<div
						class="col-md-4 mb-3 w-50  "
					>
						<div class="card h-100 align-items-center">

							<div class="card-title ">
								<h5 class="card-title text-uppercase">NOM : {{ sysP.name }}</h5>
							</div>
							<ul class="list-group list-group-flush text-uppercase ">
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
                            <img
								src="../../../images/sys.jpg"
								class="card-img-bottom"
								:alt="sysP.name"
							/>
						</div>
					</div>
				</div>
                <router-link :to="">
                                    <button class="btn  btn-danger  w-50"> Retour à la liste des systèmes spatiaux</button>
                </router-link>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import sysJson from '../../data/systemes.json'
import { useRoute } from 'vue-router';

defineProps({
	x: Number,
	y: Number,
});

const route = useRoute();
const symbolSys = route.params.symbolSys;
const sysSe = sysJson.systems.find((s) => s.symbol === symbolSys);
const symbolP = route.params.symbolP;
const sysP = sysSe.planets.find((s) => s.symbol === symbolP);

const emit = defineEmits(["nouvellesCoordonnees"]);
const router=useRouter();

const goToPageSystemes=()=>{
    router.push('/systemes')
}
</script>

<style>

</style>
