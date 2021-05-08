import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: '/vip-analysis',
        // baseURL: 'https://api.lacknb.cn',
        timeout: 5000
    })

    return instance(config)
}
