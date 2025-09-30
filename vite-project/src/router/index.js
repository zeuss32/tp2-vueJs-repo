import { createWebHistory, createRouter } from "vue-router";
import PiedPage from "../components/piedPage.vue";
import Entete from "../components/entete.vue";
import systemes from "../components/SousSections/systemes.vue";
import vaisseaux from "../components/SousSections/vaisseaux.vue";
import detailsVaisseaux from "../components/SousSections/detailsVaisseaux.vue";
import biens from "../components/SousSections/biens.vue";
import Systemes from "../components/SousSections/systemes.vue";

const routes = [
  {
    name: "entete",
    component: Entete,
  },
  {
    name: "piedDePage",
    component: PiedPage,
  },
  {
    path:"/systemes",
    name:"Systemes spatiaux",
    component:systemes

  },
  {
    path:'/systemes/:id',
    name:'Corps spatiaux',
    props: true,
    component: systemes

  },
  {
    path:'/vaisseaux',
    name:'Vaisseaux',
    component:vaisseaux,
    children:[
            {
        path:"/vaisseaux/details",
        name:"VaisseauxDetails",
        component:detailsVaisseaux
        },
    ]

  },
  {
    path:'/biens',
    name:'biens',
    component:biens
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
