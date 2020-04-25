import axios from 'axios'

export function request(config){
    const instance = axios.create({
            timeout: 5000
    })
    //axios 请求拦截器
    instance.interceptors.request.use(
        config => {
            config.headers.Authorization = 'JWT ' + window.sessionStorage.getItem('token')
            return config
        }
    )

    return instance(config)       
}

