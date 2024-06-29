<template>
  <h2>Lista de users</h2>

  <div>
    <button @dblclick="add('teste')">Clique aqui {{ count }}</button>
    <img
      :src="imageSrc"
      alt=""
      :class="{ myClass: is_admin, myOtherClass: !is_admin }"
    />
  </div>

  <ul>
    <li v-for="user in users" :key="user.id">{{ user.lastname }}</li>
  </ul>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

let users = reactive([]);
const imageSrc = ref("https://picsum.photos/200");
const is_admin = ref(false);
const count = ref(0);


function add(teste){
  count.value++
  console.log(teste + count.value)
}

import dados from "./dados.json";

onMounted(() => {
  users.push(...dados);
});
</script>

<style>
#myapp {
  background-color: aqua;
}

.myClass {
  border: solid 4px red;
}

.myOtherClass {
  border: solid 4px aqua;
}
</style>
