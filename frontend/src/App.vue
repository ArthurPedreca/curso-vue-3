<template>
  <h2>Lista de users</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.lastname }}</li>
  </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

let users = reactive([])

import dados from './dados.json'

onMounted(()=>{
  users.push(...dados)
})
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
