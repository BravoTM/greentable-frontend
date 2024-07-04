import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Community from '../views/Community.vue'
import experiment from '../views/experiment.vue'
import Login from '../views/Login.vue'
import Orderfood from '../views/Oderfood.vue'
import Restaurants from '../views/Restaurants.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/experiment',
    name: 'experiment',
    component: experiment,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
    
  {
    path: '/Orderfood',
    name: 'Orderfood',
    component: Orderfood,
  },
  {
    path: '/Restaurants',
    name: 'Restaurants',
    component: Restaurants,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
