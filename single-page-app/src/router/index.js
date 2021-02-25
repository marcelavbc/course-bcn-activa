import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Suppliers from '../views/Suppliers.vue'
import Clients from '../views/clients/Clients.vue'
import ClientDetails from '../views/clients/ClientDetails.vue'
import Stock from '../views/Stock.vue'
import NotFound from '../views/NotFound.vue'
import Freezen from '../views/shop/Freezen.vue'
import Food from '../views/shop/Food.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/clients/:id',
    name: 'ClientDetails',
    component: ClientDetails,
    props: true
  },
  {
    path: '/proveidors',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/magatzem',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/botiga/congelats',
    name: 'Freezen',
    component: Freezen
  },
  ,
  {
    path: '/botiga/alimentacio',
    name: 'Food',
    component: Food
  },
  //404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
