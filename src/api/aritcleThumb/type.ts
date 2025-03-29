export interface ArticleThumbAddRequest {
    /**
     * 点赞id
     */
    id?: number;
    /**
     * 文章id
     */
    articleId: number;
    /**
     * 点赞用户id
     */
    userId: number;
}
