<template>

  {{ count }}

  {{ userName }}

  <ul>
    <li v-for="user in users">{{user.primeiroNome}} {{ user.segundoNome }} - {{user.age}} Anos</li>
  </ul>

  <div v-if="showHeader">
    <Header />
  </div>

  <button v-on:click="showHeader = !showHeader">Toggle Header</button>

  <h2>App</h2>

  <button v-on:click="count++">Add 1</button>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <router-view></router-view>
</template>

<script>

import Header from "@/components/Header.vue"

export default{

  components:{Header},

  data(){
    return{
      count:0,
      showHeader:false,
      userName: "Arthur",
      users:[
        {
          primeiroNome:"Arhtur",
          segundoNome:"pedreca",
          age:12
        },
        {
          primeiroNome:"Maria",
          segundoNome:"vc nao sai da minha cabeça",
          age:19
        }
      ]
    }
  },

  mounted(){
    console.log(this.count)
  },

  updated(){
    console.log("updated")
  }
}
</script>
