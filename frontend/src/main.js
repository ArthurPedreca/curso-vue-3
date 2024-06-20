import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.component('teste',{
    template:"<h2>Teste</h2>"
})

app.mount('#app')