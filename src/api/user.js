import request from '@/utils/request'

export function login(data){
    return request({
        url:'/v1/login/api-token-auth/',
        method:'post',
        data
    })
}

export function sso_login(data){
    return request({
        url:'/v1/login/sso_login/',
        method:'post',
        data
    })
}

export function logout(){
    return request({
        url: '/v1/logout/api-token-auth/',
        method:'post'
    })
}

export function userinfo(){
    return request({
        url:'/v1/user/info/',
        method:'get'
    })
}
