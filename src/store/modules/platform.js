import { platforms } from '@/api/platform'

const state = {
    platformNameList: [],
    platforms: {}
}

const mutations = {
    SET_PLATFORM: (state, platforms ) => {
        platforms.forEach(element => {
            state.platforms[element.name] = {page:1, list:element.platforms}
            state.platformNameList.push(element.name)
        })
    },
    CLEAN_PLATFORM:(state) => {
        state.platformNameList.length = 0
        state.platforms = {}

    }
}

const actions = {
    getPlatforms({commit}){
        return new Promise((resolve, reject) =>{
            platforms()
            .then(response =>{
                const { data } = response
                if(!data){
                    reject('获取平台数据失败')
                }
                const { platforms } = data
                commit('SET_PLATFORM', platforms)
                resolve(platforms)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    clean_platforms({ commit }){
        commit('CLEAN_PLATFORM')
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}