import request from '@/utils/request'


export function backgrounds(){
    return request({
        url:'/v1/home/backgrounds/',
        method:'post'
    })
}