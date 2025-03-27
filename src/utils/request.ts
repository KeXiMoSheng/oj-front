import {baseUrl} from "@/utils/baseUrl.ts";
import {Message} from '@arco-design/web-vue';
import axios, {type AxiosResponse} from "axios";


const request = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        'Authorization': localStorage.getItem('token')
    }
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(
    res => {
        // console.log(res)
        return res.data

    }, error => {
        Message.error("请求失败")
    })

export default request