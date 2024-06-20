<template>
    <h2>This is an about page</h2>
</template>

<script>

export default{

  data(){
    interval: ''
  },

  mounted(){
    this.interval = setInterval(() => {
      console.log("MOUNTED")
    }, 1000);
  },

  unmounted(){
   clearInterval(this.interval) 
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
