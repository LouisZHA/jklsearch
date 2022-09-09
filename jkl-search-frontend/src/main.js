import { createApp, ref} from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'			/* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'		/* import font awesome icon component */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'	/* import specific icons */
library.add(faUserSecret)											/* add icons to the library */


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

