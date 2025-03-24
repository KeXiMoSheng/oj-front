import type {QuestionSubmitAddRequest} from "@/api/questionRun/type.ts";
import request from "@/utils/request.ts";
import type {MyResponse} from "@/api/getQuestion/type.ts";

enum API {
    QUESTION_RUN_URL = '/question/questionSubmit/do/test',
    QUESTION_SUBMIT = '/question/questionSubmit/do',
}

//运行代码

export const questionRun = (questionSubmitAddRequest: QuestionSubmitAddRequest) => request<any, MyResponse>({
    url: API.QUESTION_RUN_URL, method: 'post', data: questionSubmitAddRequest
})
export const questionSubmit = (questionSubmitAddRequest: QuestionSubmitAddRequest) => request<any, MyResponse>({
    url: API.QUESTION_SUBMIT, method: 'post', data: questionSubmitAddRequest
})