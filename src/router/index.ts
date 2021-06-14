import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.name = 'Login' || localStorage.getItem('token')){

  }else{
    router.push('Login');
  }
  next();
})

export default router
