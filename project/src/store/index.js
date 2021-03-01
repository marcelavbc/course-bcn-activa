import { createStore } from 'vuex'
import users from './modules/users'
import albums from './modules/albums'

export default createStore({
  modules: {
    users, 
    albums, 
  }
})
