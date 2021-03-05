import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardInfo from '../src/components/cards/CardInfo.vue'
import Appear from '../src/components/utils/Appear.vue'
import BackButton from '../src/components/utils/BackButton.vue'
import ButtonSee from '../src/components/utils/ButtonSee'




import router from './router'
import store from './store'

const app = createApp(App)


app.component('card-info', CardInfo)
app.component('appear', Appear)
app.component('back-button', BackButton)
app.component('button-see', ButtonSee)


app.use(store).use(router).mount('#app')
