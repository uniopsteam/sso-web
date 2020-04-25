import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if(store.getters.token){
            config.headers.Authorization = 'JWT ' + getToken()
        }
        return config
    },
    error => {
        window.console.log(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data
      // if the custom code is not 20000, it is judged as an error.
      if (res.code !== 20000) {
          Message({
            message: res.message || '报错',
            type: 'error',
            duration: 5 * 1000
          })
    
          // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
          if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
              // to re-login
              MessageBox.confirm('您已经退出，点击取消停留在当前页面，或者点击重新登陆', '确认退出', {
                confirmButtonText: '重新登陆',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                  store.dispatch('user/resetToken').then(() => {
                  location.reload()
                })
              })
          }
          return Promise.reject(new Error(res.message || '报错'))
      } 
      else {
        return res
      }
    },
    error => {
      window.console.log(error.response)
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )

  export default service