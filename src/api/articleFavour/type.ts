export interface ArticleFavourAddRequest {
    /**
     * 收藏id
     */
    id?:number;
    /**
     * 文章id
     */
    articleId:number;
    /**
     * 收藏用户id
     */
    userId:number;
}