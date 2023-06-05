<!-- Starships.vue -->
<script>
import Menu from '../menu/menu.vue'
import axios from 'axios';
export default {
  components: {
    Menu,
  },
  data() {
    return {
      starships: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/starships');
      console.log(response.data);
      this.starships = response.data;
    } catch (error) {
      console.error('Error al cargar las naves:', error);
    }
  }
};
</script>


<template>
  <div id="bg">
    <div class="title">
      <h1>Star Wars
        <span>Naves</span>
      </h1>
    </div>
  <div class="main flex flex-wrap justify-center">
    
    <div class="card glass card-side" v-for="starship in starships" :key="starship.name">
    <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img :src="'../images/starships/' + starship.name + '.jpg'" />
        </div>
      </div>
      <div class="card-body text-black">
        <h3 class="text-2xl font-bold">{{ starship.name }}</h3>
        <p><span class="font-bold">ID: </span> {{ starship.id }}</p>
        <p><span class="font-bold">Modelo: </span> {{ starship.model }}</p>
        <p><span class="font-bold">Fabricante: </span> {{ starship.manufacturer }}</p>
        <p><span class="font-bold">Costo en créditos: </span> {{ starship.cost_in_credits }}</p>
        <p><span class="font-bold">Longitud: </span> {{ starship.length }}</p>
        <p><span class="font-bold">Velocidad atmosférica máxima: </span> {{ starship.max_atmosphering_speed }}</p>
        <p><span class="font-bold">Equipo requerido: </span> {{ starship.crew }}</p>
        <p><span class="font-bold">Pasajeros: </span> {{ starship.passengers }}</p>
        <p><span class="font-bold">Capacidad de carga: </span> {{ starship.cargo_capacity }}</p>
        <p><span class="font-bold">Consumibles: </span> {{ starship.consumables }}</p>
        <p><span class="font-bold">Clasificación del navío: </span> {{ starship.starship_class }}</p>
        <p><span class="font-bold">Velocidad en el hiperespacio: </span> {{ starship.hyperdrive_rating }}</p>
        <p><span class="font-bold">MGLT: </span> {{ starship.MGLT }}</p>
        <p><span class="font-semibold">Pilotos: </span> 
          <div 
            class="badge badge-primary inline-block mr-2 mb-2" 
            v-for="(pilot, index) in starship.pilots" 
            :key="index"
          >
            {{ pilot.name }}
          </div>
          <div 
            class="badge badge-outline badge-secondary inline-block mr-2 mb-2" 
            v-if="!starship.pilots.length"
          >
            Desconocido
          </div>
        </p>
      </div>
        </div>
      </div>
    </div>
  <Menu />

</template>

<style src="./starships.css" scoped>
 
</style>


  