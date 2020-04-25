import { sso_login, login, logout, userinfo} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
    token: getToken(),
    username: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
        setToken(token)
    },
    SET_USERNAME:(state, username) =>{
        state.username = username
    }
}

const actions = {
    //用户登陆
    login({ commit }, userinfo){
        const { username, password } = userinfo
        return new Promise((resolve, reject) => {
            login({username:username.trim(), password:password.trim()})
            .then( response => {
                const  { data } = response
                commit('SET_TOKEN', data)
                setToken(data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // eslint-disable-next-line
    sso_login({ commit }, userinfo){
        const { username, password, app_url } = userinfo
        return new Promise((resolve, reject) => {
            sso_login({username:username.trim(), password:password.trim(), app_url:app_url.trim()})
            .then( response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit }){
        return new Promise((resolve, reject) => {
            logout()
            .then(() => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    userinfo({ commit }){
        return new Promise((resolve, reject) => {
            userinfo()
            .then(( response ) => {
                window.console.log(response)
                const { data } = response
                if(!data){
                    reject('认证失败，请重新登陆')
                }
                const { username } = data
                commit('SET_USERNAME', username)
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  