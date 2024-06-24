<template></template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      users:[]
    }
  },

  async mounted(){
    try{
      const {data} = await axios.get('http://localhost:8000/api/users');
      console.log(data)
    }catch(error){
      console.error(error)
    }
  },

}
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
