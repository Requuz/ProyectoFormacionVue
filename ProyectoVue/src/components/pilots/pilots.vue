<!-- Pilots.vue -->
<script>
import axios from 'axios';
import Menu from '../menu/menu.vue'
export default {
  components: {
    Menu,
  },
  data() {
    return {
      pilots: [] 
    };
  },
  async created() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pilots');
      console.log(response.data);
      this.pilots = response.data;
    } catch (error) {
      console.error('Error al cargar los pilotos:', error);
    }
  }
};
</script>

<template>
  <h1 class="text-4xl font-bold mb-4">Personajes</h1>
  <div class="main flex flex-wrap justify-center">
    <div class="card w-96 bg-base-100 shadow-xl" v-for="pilot in pilots" :key="pilot.name">
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img :src="'../images/people/' + pilot.name + '.jpg'" />
        </div>
      </div>
      <div class="card-body">
        <h3 class="text-2xl font-bold">{{ pilot.name }}</h3>
        <p><strong class="font-semibold">ID:</strong> {{ pilot.id }}</p>
        <p><strong class="font-semibold">Altura:</strong> {{ pilot.height }}</p>
        <p><strong class="font-semibold">Peso:</strong> {{ pilot.mass }}</p>
        <p><strong class="font-semibold">Color de pelo:</strong> {{ pilot.hair_color }}</p>
        <p><strong class="font-semibold">Color de piel:</strong> {{ pilot.skin_color }}</p>
        <p><strong class="font-semibold">Color de ojos:</strong> {{ pilot.eye_color }}</p>
        <p><strong class="font-semibold">Año de nacimiento:</strong> {{ pilot.birth_year }}</p>
        <p><strong class="font-semibold">Género:</strong> {{ pilot.gender }}</p>
        <p><strong class="font-semibold">Mundo natal:</strong> {{ pilot.homeworld }}</p>
      </div>
    </div>
  </div>

  <Menu />
</template>

<style src="../starships/starwars.css" scoped></style>
