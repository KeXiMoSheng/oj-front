import request from "@/utils/request.ts";
import type {SpecialColumn} from "@/api/specialColumn/type.ts";
import type {MyResponse} from "@/api/getQuestion/type.ts";

export enum API {
    // 获取专栏列表
    GET_SPECIALCOLUMN_URL = '/user/get/specialColumn/list',
    // 获取专栏详情
    GET_SPECIALCOLUMN_DETAIL_URL = '/user/get/specialColumn/detail',
}


export const getSpecialColumn = () => request<any, MyResponse>({
    url: API.GET_SPECIALCOLUMN_URL, method: 'get'
})
export const getSpecialColumnDetail = (specialColumn: SpecialColumn) => request<any, MyResponse>({
    url: API.GET_SPECIALCOLUMN_DETAIL_URL, method: 'post', data: specialColumn
})