import request from "@/utils/request.ts";
import type {Article, ArticlePageRequest} from "@/api/article/type.ts";
import type {MyResponse} from "@/api/getQuestion/type.ts";

export enum API {
    ARTICLE_GET_URL = '/user/get/article',
    ARTICLE_CREATE_URL = '/user/create/article',
    ARTICLE_UPDATE_URL = '/user/update/article',
    ARTICLE_DELETE_URL = '/user/delete/article',
    ARTICLE_LIST_PAGE = 'user/list/page/article'
}

export const createArticle = (article: Article) => request<any, MyResponse>({
    url: API.ARTICLE_CREATE_URL, method: 'post', data: article
})
export const updateArticle = (article: Article) => request<any, MyResponse>({
    url: API.ARTICLE_UPDATE_URL, method: 'post', data: article
})
export const getArticle = (id: number) => request<any, MyResponse>({
    url: API.ARTICLE_GET_URL, method: 'get', params: {id}
})
export const getArticleListPage = (articlePageRequest:ArticlePageRequest) => request<any, MyResponse>({
    url: API.ARTICLE_LIST_PAGE, method: 'post', data: articlePageRequest
})