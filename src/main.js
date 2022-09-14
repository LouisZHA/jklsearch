import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)

app.use(router).mount('#app')
app.use(MasonryWall)
