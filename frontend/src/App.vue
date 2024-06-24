<template>
  <h2>App</h2>

  {{ count }}
  {{ userName }}
  <ul>
    <li v-for="user in users">{{user.userName}} - Tamanho do penis: {{user.penis}}cm - Idade: {{user.age}} Anos</li>
  </ul>

  <button v-on:click="count++">Add</button>


  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <router-view></router-view>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue';

const count = ref(0)
const userName = ref('Arthur')

const users = reactive([
  {
    id: 1, 
    userName: "Arthur",
    age: 25
  },
  {
    id: 2,
    userName: "Rogridão",
    age: 17
  },
  {
    id: 3,
    userName: "Marco",
    age: 16
  },
  {
    id: 4,
    userName: "Raul",
    age: 18
  },
  {
    id: 5,
    userName: "Mateus",
    age: 20
  }
])

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
