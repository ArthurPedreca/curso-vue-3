<template></template>

<script setup>
import { onMounted, reactive, } from 'vue';

const users = reactive([])

import http from '@/services/http'

onMounted(async()=>{
  try{
    const {data} = await http.get('api/users')
    console.log(data)
  }catch(error){
    console.log(error)
  }
})
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
