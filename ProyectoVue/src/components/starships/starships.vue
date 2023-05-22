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

  <h1 class="text-4xl font-bold mb-4">Naves</h1>
  <div class="main flex flex-wrap justify-center">
    
    <div class="card  bg-base-100 shadow-xl" v-for="starship in starships" :key="starship.name">
    <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img :src="'../images/starships/' + starship.name + '.jpg'" />
        </div>
      </div>
      <div class="card-body">
        <h3 class="text-2xl font-bold">{{ starship.name }}</h3>
        <p><strong class="font-bold">ID:</strong> {{ starship.id }}</p>
        <p><strong class="font-bold">Modelo:</strong> {{ starship.model }}</p>
        <p><strong class="font-bold">Fabricante:</strong> {{ starship.manufacturer }}</p>
        <p>
          <strong class="font-bold">Costo en créditos:</strong> {{ starship.cost_in_credits }}
        </p>
        <p><strong class="font-bold">Longitud:</strong> {{ starship.length }}</p>
        <p>
          <strong class="font-bold">Velocidad atmosférica máxima:</strong> {{
          starship.max_atmosphering_speed }}
        </p>
        <p><strong class="font-bold">Equipo requerido:</strong> {{ starship.crew }}</p>
        <p><strong class="font-bold">Pasajeros:</strong> {{ starship.passengers }}</p>
        <p>
          <strong class="font-bold">Capacidad de carga:</strong> {{ starship.cargo_capacity }}
        </p>
        <p><strong class="font-bold">Consumibles:</strong> {{ starship.consumables }}</p>
        <p>
          <strong class="font-bold">Clasificación del navío:</strong> {{ starship.starship_class
          }}
        </p>
        <p>
          <strong class="font-semibold">Velocidad en el hiperespacio:</strong> {{
          starship.hyperdrive_rating }}
        </p>
        <p><strong class="font-semibold">MGLT:</strong> {{ starship.MGLT }}</p>

        <p><strong class="font-semibold">Pilotos: </strong>
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
 
  <Menu />

</template>

<style src="./starwars.css" scoped>
 
</style>


  