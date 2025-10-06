import { createWebHistory, createRouter } from "vue-router";


import systemes from "../components/SousSections/systemes.vue";
import vaisseaux from "../components/SousSections/vaisseaux.vue";
import detailsVaisseaux from "../components/SousSections/detailsVaisseaux.vue";
import biens from "../components/SousSections/biens.vue";
import systeme from "../components/SousSections/systeme.vue";



const routes = [


  {
    path:"/systemes",
    name:"Systemes spatiaux",
    component:systemes

  },
  {
    path:'/systeme/:symbol',
    name:'systeme',
    props: true,
    component: systeme

  },
  {
    path:'/systemes/:symb_C_S',
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
