<template>
  <h2>App</h2>

  {{ count }}

  <button v-on:click="count++">Add</button>


  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <router-view></router-view>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

const count = ref(0)

onMounted(()=>{
  console.log("mounted")
})

onUpdated(() =>{
  console.log("updated")
})

onUnmounted(()=>{
  console.log("unmounted")
})
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
