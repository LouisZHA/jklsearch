import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import SearchTopNav from '../components/SearchTopNav.vue'

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
        name:'SearchTopNav',
        component: SearchTopNav,
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