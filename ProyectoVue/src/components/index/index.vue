<script setup>
import Menu from '../menu/menu.vue'
</script>

<template>

 <div id="fondo" class="relative h-screen w-screen">
    <img src="../../assets/index.jpg" alt="Background Image" class="absolute h-full w-full object-cover">
    <h1 class="text-5xl font-bold absolute top-20 left-1/2 transform -translate-x-1/2">Welcome to the Star Wars website</h1>
    <Menu />
  </div>


</template>

<style src="./index.css" scoped>

</style>
