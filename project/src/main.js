import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardInfo from '../src/components/cards/CardInfo.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.component('card-info', CardInfo)

app.use(store).use(router).mount('#app')
