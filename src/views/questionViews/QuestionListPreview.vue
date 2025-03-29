<template>
  <div style="width: 80%; margin: 50px">
    <div class="search-question-container">
      <input type="text" placeholder="搜索题目" class="search-question-input">
      <button class="search-question-button" @click="handleQuestionSearch">
        <i></i>
        搜索
      </button>
    </div>
    <QuestionPreview
        status="状态"
        id="题号"
        title="题目"
        solution="题解"
        passRate="通过率"
        difficulty="难度"
    />
    <QuestionPreview v-for="(item, index) in questionSimpleVOList" :key="index"
                     status="未完成"
                     :id="item.id"
                     :title="item.title"
                     solution="使用哈希表"
                     passRate="80%"
                     :difficulty="item.difficulty"
                     @click="toGoToQuestionDetail(Number(item.id))"
    />
    <div style="display: flex;align-items: center;justify-content: center; margin: 30px 30px">
      <a-pagination :total="Number(questionListPageQueryRequest.total)" :current="questionListPageQueryRequest.current"
                    :page-size="questionListPageQueryRequest.pageSize" :page-size-options="[10,15,20]"
                    show-total show-jumper show-page-size
                    @change="handlePageChange"
                    @page-size-change="handlePageSizeChange"

      />
    </div>
  </div>

</template>
<script setup lang="ts">
import QuestionPreview from "@/components/QuestionPreview.vue";
import {onMounted, reactive} from "vue";
import {getQuestionList} from "@/api/getQuestion";
import type {QuestionListPageQueryRequest, QuestionSimpleVO} from "@/api/getQuestion/type.ts";
import router from "@/router";

const questionListPageQueryRequest: QuestionListPageQueryRequest = reactive<QuestionListPageQueryRequest>({
  current: 1,
  pageSize: 10,
  sortField: "id"
})
const questionSimpleVOList = reactive<QuestionSimpleVO[]>([]);
const toGetQuestionList = async () => {
  let res = await getQuestionList(questionListPageQueryRequest);
  if (res.message === "ok") {
    // console.log(res.data)
    Object.assign(questionListPageQueryRequest, res.data);
    // console.log(666)
    console.log(questionListPageQueryRequest);
    // console.log(res.data);
    questionSimpleVOList.length = 0; // 清空原数组
    questionSimpleVOList.push(...res.data.records);
    // console.log(questionSimpleVOList)
  }
}
onMounted(() => {
  toGetQuestionList();
})
const handlePageChange = (current: number) => {
  questionListPageQueryRequest.current = current;
  toGetQuestionList();
}
const handlePageSizeChange = (pageSize: number) => {
  questionListPageQueryRequest.pageSize = pageSize;
  toGetQuestionList();
}
const toGoToQuestionDetail = (id: number) => {
  router.push({
    name: 'question',
    params: {id}
  })
}
const handleQuestionSearch = () => {
  console.log("searchQuestion")
}
</script>

<style scoped>
.search-question-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-question-input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
  display: inline-block;
  width: calc(100% - 104px);
  height: 100%;
  line-height: inherit;
  outline: 0;
  background: #f5f6f7;
  color: #222226;
  vertical-align: top;
  text-indent: 32px;
  border: 1px solid #e8e8ed;
  border-right: none;
  box-sizing: border-box;
  border-radius: 16px 0 0 16px;
}

.search-question-input:focus {
  border-color: #fc5531;
}

.search-question-button {
  padding: 8px 16px;
  background-color: #fc5531;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 16px 16px 0;
}

.search-question-button:hover {
  background-color: #fc1944;
}

.search-question-button i {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-white-search.png) no-repeat center center;
  background-size: 100%;
  vertical-align: middle;
  position: relative;
  top: -1px;
  margin-left: 8px;
}
</style>