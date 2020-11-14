import http from 'http'

//implementation middleware on asynchronous mode
export default function({ route }){
    return http.post('https://stats.free.beeceptor.com/stats',{
        url: route.fullPath
    })
}