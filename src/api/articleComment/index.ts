import request from "@/utils/request.ts";
import type {MyResponse} from "@/api/getQuestion/type.ts";
import type {ArticleCommentAddRequest} from "@/api/articleComment/type.ts";

export enum API {
    // 根据id获取评论
    ARTICLE_COMMENT_GET = "/user/get/article/comment",
    // 新增评论
    ARTICLE_COMMENT_ADD = "/user/add/article/comment",
    // 删除评论
    ARTICLE_COMMENT_DELETE = "/delete/article/comment",
}

export const getArticleCommentList = (articleId: number) => request<any, MyResponse>({
    url: API.ARTICLE_COMMENT_GET, method: 'get', params: {articleId}
})
export const addArticleComment = (articleCommentAddRequest:ArticleCommentAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_COMMENT_ADD, method: 'post', data: articleCommentAddRequest
})
export const deleteArticleComment = (articleCommentAddRequest:ArticleCommentAddRequest) => request<any, MyResponse>({
    url: API.ARTICLE_COMMENT_DELETE, method: 'post', data: articleCommentAddRequest
})