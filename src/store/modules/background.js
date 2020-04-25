import { backgrounds } from '@/api/background'

const state = {
    backgrounds: []
}

const mutations = {
    SET_BACKGROUNDS:(state, items) => {
        state.backgrounds = items
    }
}

const actions = {
    getBackgrounds({ commit }){
        return new Promise((resolve, reject) => {
            backgrounds()
            .then(response => {
                const { data } = response
                if(!data){
                    reject('获取大屏展示数据失败')
                }
                const { items } = data
                window.console.log(items)
                commit('SET_BACKGROUNDS', items) 
                resolve(items)
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