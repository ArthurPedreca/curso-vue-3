<template>

  <template v-if="showName">
    Mostrar o nome
  </template>

  <div :class="teste">teste</div>

  <img :src="image" alt="">

  <ul>
    <template v-for="(user, key) in users">

      <li v-if="user.is_admin == 1">
        {{ key }}: {{ user.userName }}
      </li>
      
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      image:"https://picsum.photos/200/300",
      teste:"class",
      showName:false,
      user: { name: "arthur", age: 10 },
      users: [
        {
          id: 1,
          userName: "Arthur",
          age: 25,
          is_admin: 1,
        },
        {
          id: 2,
          userName: "Rogridão",
          age: 17,
          is_admin: 0,
        },
        {
          id: 3,
          userName: "Marco",
          age: 16,
          is_admin: 0,
        },
        {
          id: 4,
          userName: "Raul",
          age: 18,
          is_admin: 0,
        },
        {
          id: 5,
          userName: "Mateus",
          age: 20,
          is_admin: 1,
        },
      ],
    };
  },
};
</script>

<style>
#myapp {
  background-color: aqua;
}
</style>
