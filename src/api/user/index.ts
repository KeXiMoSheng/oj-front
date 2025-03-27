import request from "@/utils/request.ts";
import type {UserLoginRequest, UserRegisterRequest} from "@/api/user/type.ts";
import type {MyResponse} from "@/api/getQuestion/type.ts";

enum API {
    USER_REGISTER_URL = '/user/register',
    USER_LOGIN_URL = '/user/login',
    CODE_URL = '/user/get/code',
    GET_USER_LOGIN_DETAIL = '/user/get/login',
}

//运行代码

export const userRegister = (userRegisterRequest: UserRegisterRequest) => request<any, MyResponse>({
    url: API.USER_REGISTER_URL, method: 'post', data: userRegisterRequest
})
export const getCode = (userEmail: string) => request<any, MyResponse>({
    url: API.CODE_URL, method: 'get', params: {userEmail}
})
export const userLogin = (userLoginRequest: UserLoginRequest) => request<any, MyResponse>({
    url: API.USER_LOGIN_URL, method: 'post', data: userLoginRequest
})
export const getUserLoginDetail = () => request<any, MyResponse>({
    url: API.GET_USER_LOGIN_DETAIL, method: 'get'
})