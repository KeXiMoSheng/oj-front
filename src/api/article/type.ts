import type {User} from "@/api/user/type.ts";
import type {PageRequest} from "@/api/pageRequest/type.ts";

export interface Article {
    /**
     * 文章id
     */
    id?: number;
    /**
     * 文章标题
     */
    title: string;
    /**
     * 文章内容
     */
    content: string;
    /**
     * 文章作者
     */

    authorId: number;
    /**
     * 文章标签
     */
    tagList?: string[];

    /**
     * 文章发布时间
     */

    publishTime?: Date;
    /**
     * 文章更新时间
     */
    updateTime?: Date;
    /**
     * 文章点赞数
     */

    thumbNum: number;
    /**
     * 文章评论数
     */
    commentNum: number;
    /**
     * 文章收藏人数
     */
    favourNum: number;
    /**
     * 文章阅读数
     */
    readNum: number;
    /**
     * 是否发布
     */
    isPublished?: number;
    /**
     * 文章作者
     */
    userVO?: User;
}
export interface ArticlePageRequest extends PageRequest {
    keyWords?: string;
}