import Vue from 'vue'
import VueRouter from 'vue-router'
import Login  from '../components/login/Login'
import Home  from '../components/home/Home' 
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: "/login"
   },
  { 
    path: '/login', 
    component:Login 
  },
  { 
    path: '/home', 
    component:Home,
    children:[
      {
        path: 'front', 
        component:() => import('../components/front/Front')
      },
      {
        path: 'backend', 
        component:() => import('../components/backend/Backend')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//挂载路由导航守位
router.beforeEach(
  (to, from, next) => {
    // to将要访问的路径，
    // from 从哪个路径而来
    // next是一个函数，表示放行
    if(to.path ==='/login'){
      return next()
    }
    else{
        const tokenStr = getToken()
        if(!tokenStr){
           return next('/login')
        }
        else{
          next()
        }
    }
  }
)
export default router
