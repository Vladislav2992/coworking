import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import MainPage from '../src/pages/MainPage.vue'
import CatalogPage from '../src/pages/CatalogPage.vue'
import CoworkingPage from '../src/pages/CoworkingPage.vue'
import Advertising from '../src/pages/Advertising.vue'
import Registration from '../src/pages/Registration.vue'
import Profile from '../src/pages/Profile.vue'
import Editing from '../src/pages/Editing.vue'
import Notification from './pages/NotificationMobile.vue'
import MyOrdersMobile from './pages/MyOrdersMobile.vue';
import MyObjectsMobile from './pages/MyObjectsMobile.vue';
import Articles from './pages/ArticlesPage.vue';
import Article from './components/Articles/Article.vue';
import Event from './pages/Event.vue';


const app = createApp(App) 

const routes = [
    { path: '/', name: MainPage, component: MainPage },
    { path: '/catalog', name: CatalogPage, component: CatalogPage },
    { path: '/coworking', name: CoworkingPage, component: CoworkingPage },
    { path: '/advertising', name: Advertising, component: Advertising },
    { path: '/registration', name: Registration, component: Registration },
    { path: '/profile', name: Profile, component: Profile },
    { path: '/editing', name: Editing, component: Editing },
    { path: '/notification', name: Notification, component: Notification },
    { path: '/orders', name: MyOrdersMobile, component: MyOrdersMobile },
    { path: '/objects', name: MyObjectsMobile, component: MyObjectsMobile },
    { path: '/articles', name: Articles, component: Articles },
    { path: '/article', name: Article, component: Article },
    { path: '/event', name: Event, component: Event },
    
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
})


app.use(router)
app.mount('#app')
