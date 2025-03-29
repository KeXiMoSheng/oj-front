import request from "@/utils/request.ts";
import type {MyResponse} from "@/api/getQuestion/type.ts";
import type {ArticleThumbAddRequest} from "@/api/aritcleThumb/type.ts";

export enum API {
    ARTICLE_THUMB_ADD_URL = '/user/add/article/thumb',
    ARTICLE_THUMB_DELETE_URL = '/user/delete/article/thumb',
    ARTICLE_THUMB_GET_URL = '/user/get/article/thumb',
}
export const articleThumbAdd = (articleThumbAddRequest: ArticleThumbAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_THUMB_ADD_URL, method: 'post', data: articleThumbAddRequest
})
export const articleThumbDelete = (articleThumbAddRequest: ArticleThumbAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_THUMB_DELETE_URL, method: 'post', data: articleThumbAddRequest
})
export const articleThumbGet = (articleThumbAddRequest: ArticleThumbAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_THUMB_GET_URL, method: 'post', data: articleThumbAddRequest
})
