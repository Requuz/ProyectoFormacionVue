<!-- StarshipPilots.vue -->
<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Menu from '../menu/menu.vue'

export default {
  components: {
    Menu,
  },
  setup() {
    const pilots = ref([]);
    const starships = ref([]);
    const starship_pilot = ref([]);
    const pilotId = ref(null);
    const starshipId = ref(null);
    const errorMessage = ref(null);
    const successMessage = ref(null);
    const selectedPilotToDelete = ref(null);
    const selectedPilotToLink = ref(null);
    const selectedPilotToUnlink = ref(null);
    const selectedStarshipToLink = ref(null);

    const fetchData = async () => {
      try {
        const [pilotResponse, starshipResponse, starshipPilotResponse] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/pilots'),
          axios.get('http://127.0.0.1:8000/api/starships'),
          axios.get('http://127.0.0.1:8000/api/starshipPilot'),
        ]);

        pilots.value = pilotResponse.data.sort((a, b) => a.name.localeCompare(b.name));
        starships.value = starshipResponse.data.sort((a, b) => a.name.localeCompare(b.name));
        starship_pilot.value = starshipPilotResponse.data;

        if (pilots.value.length > 0) {
          selectedPilotToDelete.value = pilots.value[0].id;
        }

        if (starships.value.length > 0) {
          starshipId.value = starships.value[0].id;
        }
      } catch (error) {
        errorMessage.value = 'Error: No se pudo completar la operación';
      }
    };

    const getStarshipName = (starship_id) => {
      const starship = starships.value.find(starship => starship.id === starship_id);
      return starship ? starship.name : null;
    };

    const getStarshipPrice = (starship_id) => {
      const starship = starships.value.find(starship => starship.id === starship_id);
      return starship ? starship.cost_in_credits : null;
    };

    const base10to15 = (number) => {
      const codes = "0123456789ßÞ¢μ¶";
      let result = "";
      do {
        result = codes[number % 15] + result;
        number = Math.floor(number / 15);
      } while (number > 0);
      return result;
    };

    const getPilotName = (pilot_id) => {
      const pilot = pilots.value.find(pilot => pilot.id === pilot_id);
      return pilot ? pilot.name : null;
    };

    const groupPilotsByStarship = () => {
      if (!starship_pilot.value) {
        return;
      }

      let grouped = {};

      for (let i = 0; i < starship_pilot.value.length; i++) {
        let entry = starship_pilot.value[i];
        let starshipId = entry.starship_id;

        if (!grouped[starshipId]) {
          grouped[starshipId] = {
            starship_id: starshipId,
            pilots: []
          };
        }
        grouped[starshipId].pilots.push(entry.pilot_id);
      }

      starship_pilot.value = Object.values(grouped);
    }

    const getPilotsByStarship = (starshipId) => {
      let starship = starship_pilot.value.find(ship => ship.starship_id === starshipId);
      return starship ? starship.pilots : [];
    }

    const getLastPilotForStarship = (starshipId) => {
      //Obtenemos todos los pilotos de la nave
      let pilotsOfStarship = getPilotsByStarship(starshipId);

      //Si esa nave tiene pilotos
      if (pilotsOfStarship.length > 0) {
        //Devolvemos el id del último piloto
        return pilotsOfStarship[pilotsOfStarship.length - 1];
      } else {
        //Si no hay pilotos para esta nave, devolvemos null
        return null;
      }
    }

    const linkPilot = async (pilotId, starshipId) => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/linkPilot/${pilotId}/${starshipId}`);
        if (response.data.success) {
          successMessage.value = response.data.success;
          errorMessage.value = null;
        } else {
          errorMessage.value = 'Error: ' + response.data.message;
          successMessage.value = null;
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          errorMessage.value = 'Error: ' + error.response.data.message;
        } else {
          errorMessage.value = 'Error: No se pudo completar la operación';
        }
        successMessage.value = null;
      }
      await fetchData();
      groupPilotsByStarship();
    };

    const unlinkPilot = async (pilotId, starshipId) => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/unlinkPilot/${pilotId}/${starshipId}`);
        if (response.data.success) {
          successMessage.value = response.data.success;
          errorMessage.value = null;
        } else {
          errorMessage.value = 'Error: ' + response.data.message;
          successMessage.value = null;
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          errorMessage.value = 'Error: ' + error.response.data.message;
        } else {
          errorMessage.value = 'Error: No se pudo completar la operación';
        }
        successMessage.value = null;
      }
      await fetchData();
      groupPilotsByStarship();
    };

    const deletePilot = async (pilotId) => {
      console.log('ID del piloto a eliminar:', pilotId);
      console.log('URL completa:', `http://127.0.0.1:8000/api/destroyById/${pilotId}`);

      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/destroyById/${pilotId}`);
        if (response.data.success) {
          console.log('Piloto eliminado correctamente');

          errorMessage.value = null;
          selectedPilotToDelete.value = null;
          successMessage.value = response.data.success;
        } else {
          errorMessage.value = 'Error: ' + response.data.message;
          successMessage.value = null;
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          errorMessage.value = 'Error: ' + error.response.data.message;
        } else {
          errorMessage.value = 'Error: No se pudo completar la operación';
        }
        successMessage.value = null;
      }

      await fetchData();
      groupPilotsByStarship(); // Llama a esta función después de fetchData()

      console.log('pilots:', pilots.value);
      console.log('starship_pilot:', starship_pilot.value);
    };

    onMounted(async () => {
        await fetchData();
        groupPilotsByStarship();
    });

    //devuelve todas las propiedades y métodos que necesite
    return {
      pilots,
      starships,
      starship_pilot,
      pilotId,
      starshipId,
      errorMessage,
      successMessage,
      selectedPilotToDelete,
      selectedPilotToLink,
      selectedStarshipToLink,
      selectedPilotToUnlink,
      fetchData,
      getStarshipName,
      getStarshipPrice,
      base10to15,
      getPilotName,
      groupPilotsByStarship,
      getPilotsByStarship,
      getLastPilotForStarship,
      linkPilot,
      unlinkPilot,
      deletePilot,
    };
  },
};
</script>
<template>
      <h1 class="text-4xl font-bold mb-4">Naves y pilotos</h1>

      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <!--Modal-->
      <div class="modal flex items-center justify-center h-screen w-screen">
      <div class="modal-box w-3/4 max-w-3xl m-4 grid grid-cols-2 gap-4">
          <h1 class="text-2xl font-bold col-span-2">Gestión</h1>
          <div id="borrar" class="mb-4 flex flex-col items-start">
              <h3 class="font-bold text-lg mb-2">Borrar piloto</h3>
              <p class="py-2">Seleccione un piloto</p>
              <select class="select select-error w-full max-w-xs mb-2" v-model="selectedPilotToDelete" required>
                  <option v-for="pilot in pilots" :key="pilot.id" :value="pilot.id">
                      {{ pilot.name }}
                  </option>
              </select>
             <label for="my-modal-5" class="btn btn-outline btn-error" @click="deletePilot(selectedPilotToDelete)">Borrar piloto</label>
          </div>
          <div id="vincular" class="mb-4 flex flex-col items-end">
              <h3 class="font-bold text-lg mb-2">Vincular o desvincular</h3>
              <p class="py-2">Seleccione un piloto</p>
              <select class="select select-info w-full max-w-xs mb-2" v-model="selectedPilotToLink" required>
                  <option v-for="pilot in pilots" :key="pilot.id" :value="pilot.id">
                      {{ pilot.name }}
                  </option>
              </select>
              <p class="py-2">Seleccione una nave</p>
              <select class="select select-info w-full max-w-xs mb-2" v-model="selectedStarshipToLink" required>
                  <option v-for="starship in starships" :key="starship.id" :value="starship.id">
                      {{ starship.name }}
                  </option>
              </select>
              <label for="my-modal-5" class="btn btn-outline btn-info" @click="linkPilot(selectedPilotToLink, selectedStarshipToLink)">Vincular piloto y nave</label>
              <label for="my-modal-5" class="btn btn-outline btn-warning" @click="unlinkPilot(selectedPilotToLink, selectedStarshipToLink)">Desvincular piloto y nave</label>
          </div>
          <div class="modal-action col-span-2">
              <label for="my-modal-5" class="btn">Cerrar</label>
          </div>
      </div>
  </div>
      <!---->

      <!--Tarjetas-->
      <div class="main flex flex-wrap justify-center">
        <div class="card w-96 bg-base-100 shadow-xl" v-for="starship in starships" :key="starship.id">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img :src="'../images/starships/' + starship.name + '.jpg'" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="text-2xl font-bold"><strong>{{ starship.name }}</strong></h2>
            <p><strong>Precio: </strong> {{ base10to15(getStarshipPrice(starship.id)) }}</p>
            <p><strong>Pilotos: </strong>
              <span class="badge-outline badge-secondary" v-for="(pilotId, index) in getPilotsByStarship(starship.id)" :key="pilotId">
                {{ getPilotName(pilotId) }}<span v-if="index < getPilotsByStarship(starship.id).length - 1">, </span>
              </span>
              <div 
              class="badge-outline badge-accent inline-block mr-2 mb-2" 
              v-if="!starship.pilots.length"
            >
              Sin pilotos asignados
            </div>
            </p>
            <div id="btnGestionar">
              <label for="my-modal-5" class="btn btn-active btn-primary" @click="selectedStarshipToLink = starship.id; selectedPilotToLink = getLastPilotForStarship(starship.id)">Gestionar</label>
            </div>
          </div>
        </div>
    </div>
  <Menu />
  </template>
  
<style src="./starshipPilot.css" scoped></style>
