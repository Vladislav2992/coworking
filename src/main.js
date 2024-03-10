import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import MainPage from '../src/pages/MainPage.vue'
import CatalogPage from '../src/pages/CatalogPage.vue'

const app = createApp(App) 

const routes = [
    { path: '/', name: MainPage, component: MainPage },
    { path: '/catalog', name: CatalogPage, component: CatalogPage },
    
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
})


app.use(router)
app.mount('#app')
