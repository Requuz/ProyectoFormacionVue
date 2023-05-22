<!--Navegacion-->
<script setup>
import Rocket from '../../assets/rocket_launch.svg'
import Person from '../../assets/person.svg'
import Settings from '../../assets/settings.svg'
</script>
   
   <template>
       <ul class="menu menu-horizontal bg-neutral rounded-box">
           <li>
             <router-link to="/index">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
             </router-link>
           </li>
           <li>
             <router-link to="/starships">
               <Rocket class="h-5 w-5" style="fill: white;"/>
             </router-link>
           </li>
           <li>
             <router-link to="/pilots">
                <Person class="h-5 w-5" style="fill: white;"/>
             </router-link>
           </li>
           <li>
             <router-link to="/starshipPilot">
               <Settings class="h-5 w-5" style="fill: white;"/>
             </router-link>
           </li>
         </ul>
   </template>

<style scoped>

.menu {
    position: fixed;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
}


</style>
   