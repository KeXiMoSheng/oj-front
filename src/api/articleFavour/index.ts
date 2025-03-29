import type {MyResponse} from "@/api/getQuestion/type.ts";
import request from "@/utils/request.ts";
import type {ArticleFavourAddRequest} from "@/api/articleFavour/type.ts";

export enum API {
    ARTICLE_FAVOUR_ADD_URL = '/user/add/article/favour',
    ARTICLE_FAVOUR_DELETE_URL = '/user/delete/article/favour',
    ARTICLE_THUMB_GET_URL = '/user/get/article/favour',
}
export const articleFavourAdd = (articleFavourAddRequest: ArticleFavourAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_FAVOUR_ADD_URL, method: 'post', data: articleFavourAddRequest
})
export const articleFavourGet = (articleFavourAddRequest: ArticleFavourAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_THUMB_GET_URL, method: 'post', data: articleFavourAddRequest
})
export const articleFavourDelete = (articleFavourAddRequest: ArticleFavourAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_FAVOUR_DELETE_URL, method: 'post', data: articleFavourAddRequest
})