import { createRouter, createWebHashHistory} from 'vue-router'
import LayOut from '../views/LayOut/LayOut'

const routes = [

    // 登陆页面
    // {
    //   path:"/result",
    //   name:"result",
    //   component:()=>import("../views/pages/ResultPage")
    // },

  {
    path:"/",
    name:"layout",
    component:LayOut,
    redirect:"/index",
    children:[

      {
        path:"/index",
        name:"index",
        component:()=>import("../views/pages/ResultPage")
      },
      
    

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})




export default router
