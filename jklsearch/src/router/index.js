import {createRouter, createWebHistory} from 'vue-router'
import MobileHome from '@/views/MobileHome.vue'
import SearchPage from '@/views/SERP.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: MobileHome,
        props: true
    },
    {
        path:'/search',
        name:'Search',
        component: SearchPage,
        props: true
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;