import type {User} from "@/api/user/type.ts";

export interface ArticleComment {
    /**
     * 评论id
     */
    id?: number;
    /**
     * 文章id
     */
    articleId: number;
    /**
     * 父评论id
     */
    parentId: number;
    /**
     * 用户id
     */

    userId: number;
    /**
     * 评论内容
     */
    content: string;
    /**
     * 点赞数
     */
    thumbNum: number;
    /**
     * 评论时间
     */
    createdTime: string;
    /**
     * 子评论列表
     */
    children: ArticleComment[];
    /**
     * 用户信息
     */
    userVO: User;

    /**
     * 展开子评论
     */
    showChildren: boolean;
}

export interface ArticleCommentAddRequest {
    /**
     * 评论id
     */
    id?: number;
    /**
     * 文章id
     */
    articleId: number;
    /**
     * 父评论id
     */
    parentId: number;
    /**
     * 用户id
     */
    userId: number;
    /**
     * 评论内容
     */
    content: string;
}
