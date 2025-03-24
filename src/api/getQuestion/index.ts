import type {MyResponse, QuestionListPageQueryRequest} from "./type"
import request from "@/utils/request.ts";


enum API {
    QUESTION_PAGE_LIST_URL = '/question/get/page/vo/list', //分页获取题目列表
    QUESTION_VO_URL = '/question/get/vo' //请求具体题目接口,GET,需要附带题目id
}

// 根据id获取题目内容
export const getQuestion = (id: number) => request<any, MyResponse>({
    url: API.QUESTION_VO_URL, method: 'get', params: {id}
})
// 分页获取题目列表
export const getQuestionList = (questionListPageQueryRequest: QuestionListPageQueryRequest) => request<any, MyResponse>({
    url: API.QUESTION_PAGE_LIST_URL, method: 'post', data: questionListPageQueryRequest
})