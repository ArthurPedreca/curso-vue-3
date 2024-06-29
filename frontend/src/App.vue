<template>

  <img :src="imagemSrc" alt="" class="my-class" :class="{'my-other-class':is_admin}">
  <button @click="count++">Clique aqui {{count}}</button>

  <!-- <input type="number" placeholder="QUalquer coisa "@keyup="add"> -->
  <!-- <input type="text" placeholder="QUalquer coisa "@keyup="myName"> -->
   <input type="text" placeholder="Qualquer coisa" v-model="userName">

  {{userName}}

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
      count:0,
      userName:'',
      is_admin:false,
      imagemSrc:"https://picsum.photos/200",
    };
  },

  mounted() {
    this.users = dados;
  },

  updated(){
    console.log('updated')
  },

  methods:{
    myName(event){
      this.userName = event.target.value
      // this.count+=Number(event.target.value);
      // console.log(event.target.value)
    }
  }
};
</script>

<style scoped>
.my-class{
  border: solid 3px red;
}

.my-other-class{
  border: solid 3px blue;
}
</style>
