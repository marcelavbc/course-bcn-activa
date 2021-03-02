import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/UsersList.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import(/* webpackChunkName: "about" */ '../views/pictures/AllAlbums.vue')
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/UserDetails.vue'),
    props: true
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/pictures/AlbumDetails.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
