export interface SpecialColumn {
    /**
     * 专栏id
     */
    id?: number;

    /**
     * 专栏标题
     */
    title?: string;
    /**
     * 专栏描述
     */
    description?: string;
    /**
     * 专栏图片地址
     */
    imageUrl?: string;
    /**
     * 创建用户id
     */
    userId?: number;
    /**
     * 创建时间
     */
    createTime?: Date;

    /**
     * 更新时间
     */
    updateTime?: Date;
}