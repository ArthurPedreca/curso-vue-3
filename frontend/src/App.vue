<template>

  <h2>Lista de users</h2>

  <ul>
    <li v-for="user in users" :key="user.id">{{user.lastname}}</li>
  </ul>
</template>

<script>
import dados from "./dados.json";
export default {
  data() {
    return {
      users: [],
    };
  },

 mounted(){
  this.users = dados
 }
};
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
