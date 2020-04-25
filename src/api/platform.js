import request from '@/utils/request'


export function platforms(){
    return request({
        url:'/v1/home/platforms/',
        method:'post'
    })
}