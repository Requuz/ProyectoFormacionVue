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
  <div id="bg">
    <div class="title">
      <h1>Star Wars
        <span>Personajes</span>
      </h1>
    </div>
    <div class="main flex flex-wrap justify-center">
      <div class="card card-side glass" v-for="pilot in pilots" :key="pilot.name">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img :src="'../images/people/' + pilot.name + '.jpg'" />
          </div>
        </div>
        <div class="card-body text-black">
          <h3 class="text-2xl font-bold">{{ pilot.name }}</h3>
          <p><strong class="font-bold">ID:</strong> {{ pilot.id }}</p>
          <p><strong class="font-bold">Altura:</strong> {{ pilot.height }}</p>
          <p><strong class="font-bold">Peso:</strong> {{ pilot.mass }}</p>
          <p><strong class="font-bold">Color de pelo:</strong> {{ pilot.hair_color }}</p>
          <p><strong class="font-bold">Color de piel:</strong> {{ pilot.skin_color }}</p>
          <p><strong class="font-bold">Color de ojos:</strong> {{ pilot.eye_color }}</p>
          <p><strong class="font-bold">Año de nacimiento:</strong> {{ pilot.birth_year }}</p>
          <p><strong class="font-bold">Género:</strong> {{ pilot.gender }}</p>
          <p><strong class="font-bold">Mundo natal:</strong> {{ pilot.homeworld }}</p>
        </div>
      </div>
    </div>
  </div>
  <Menu />
</template>

<style src="./pilots.css" scoped></style>
