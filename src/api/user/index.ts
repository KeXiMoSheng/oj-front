import request from "@/utils/request.ts";
import type {UserRegisterRequest} from "@/api/user/type.ts";

enum API {
    USER_REGISTER_URL = '/user/register',
    USER_LOGIN_URL = '/question/questionSubmit/do',
    CODE_URL = '/user/get/code',
}

//运行代码

export const userRegister = (userRegisterRequest: UserRegisterRequest) => request<any, Response>({
    url: API.USER_REGISTER_URL, method: 'post', data: userRegisterRequest
})
export const getCode = (userEmail: string) => request<any, Response>({
    url: API.CODE_URL, method: 'get', params: {userEmail}
})