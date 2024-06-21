<template>
    <h2>This is an about page</h2>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { onUnmounted } from 'vue';

onUnmounted(()=>{
  console.log("unmounted")
})

</script>
