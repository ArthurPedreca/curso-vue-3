<template>
  <hr />

  <h2>Lista de users</h2>

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.lastname }}
      <button v-if="user.is_admin">Admin</button>
      <button v-else>not admin</button>
    </li>
  </ul>
</template>

<script>
import dados from "./dados.json";
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      users: [],
      showHeader: true,
    };
  },

  mounted() {
    this.users = dados;
  },
};
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
