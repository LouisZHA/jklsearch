import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import SERP from '../components/SERP.vue'

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
    {
        path:'/search',
        name:'SERP',
        component: SERP,
        props: true
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router