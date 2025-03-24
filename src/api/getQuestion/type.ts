import type {PageRequest} from "@/api/pageRequest/type.ts";

export interface MyResponse {
    message: string;
    status: number;
    data: any;
}

export interface Question {
    id?: string;
    title?: string;
    background?: string;
    description?: string;
    passRate?: number;
    inputFormat?: string;
    outputFormat?: string;
    inputExample?: string[];
    outputExample?: string[];
    maxTime?: string;
    maxMemory?: string;
    notice?: string;
    submitNum?: string;
    acceptedNum?: string;
    tags?: [];
    answer?: string;
    thumbNum?: string;
    favourNum?: string;
    userId?: string;
    createdTime?: Date;
    updateTime?: Date;
}
export interface QuestionSimpleVO{
    /**
     * id
     */
    id?:number;
    /**
     * 标题
     */
    title?:string;
    /**
     * 难度
     */
    difficulty?:string;
    /**
     * 通过率
     */
    passRate?:number;
    /**
     * 提交数
     */
    submitNum?:number;
    /**
     * 通过数
     */
    acceptedNum?:number;
}


export interface QuestionListPageQueryRequest extends PageRequest{
}