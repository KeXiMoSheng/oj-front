export interface PageRequest {
    /**
     * 当前页号
     */
    current:number;

    /**
     * 页面大小
     */
    pageSize:number;
    /**
     * 排序字段
     */
    sortField?:string;
    /**
     * 总计页数
     */
    pages?:number;
    /**
     * 总共数据数
     */
    total?:number;
}
