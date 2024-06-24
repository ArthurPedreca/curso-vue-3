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
    userName: "Arthur",
    penis: 39,
    age: 25
  },
  {
    userName: "Rogridão",
    penis: 29,
    age: 14
  },
  {
    userName: "Alex",
    penis: 79,
    age: 84
  }
])

let myname = ref("Penis")

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
