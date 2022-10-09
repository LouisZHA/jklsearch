import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/MobileHome.vue'
import Search from '../views/SERP.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/search',
        name:'Search',
        component: Search,
        props: true
    },

]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router