<template>
  <div class="discover-view-container">
    <div class="search-container">
      <input type="text" placeholder="搜索文章" class="search-input" v-model="inputValue">
      <button class="search-button" @click="handleSearch">
        <i></i>
        搜索
      </button>
    </div>
    <div v-for="(item) in articleList">
      <ArticlePreview
          :avatarUrl="item.userVO?.userAvatar"
          :username="item.userVO?.userName"
          :publishTime="item.publishTime"
          :articleTitle="item.title"
          :articleDescription="item.content"
          :likeCount="item.thumbNum"
          :readNum="item.readNum"
          :commentCount="item.commentNum"
          :favouredCount="item.favourNum"
          :is-favoured="false"
          :is-liked="false"
          @like="handleLike"
          @favour="handleFavour"
          @comment="handleComment"
          @click="toGoToArticleDetail(item.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticlePreview from "@/components/ArticlePreview.vue";
import {onMounted, reactive, ref} from "vue";
import {getArticleListPage, getListArticlePageByKeyWords, getListArticlePageByReadNum} from "@/api/article";
import type {Article, ArticlePageRequest} from "@/api/article/type.ts";
import router from "@/router";

const inputValue = ref('');
// 处理点赞事件
const handleLike = () => {
  console.log('点赞事件处理');
};

// 处理收藏事件
const handleFavour = () => {
  console.log('收藏事件处理');
};

const handleComment = () => {
  console.log('评论事件处理');
}

const articlePageRequest = reactive<ArticlePageRequest>({
  current: 0,
  pageSize: 10,
  sortOrder: 'desc',
  sortField: 'read_num',
  keyWords: '',
})
const articleList = reactive<Article[]>([]);
const toGetArticleListPage = async () => {
  console.log("get article list page");
  let res = await getArticleListPage(articlePageRequest);
  console.log("当前now为");
  console.log(articlePageRequest.current);
  if (res.message === "ok") {

  }
}
const handleSearch = () => {
  console.log("search");
  console.log(inputValue.value);
  articlePageRequest.keyWords = inputValue.value;
  articlePageRequest.current = 0;
  toGetListArticlePageByKeyWords();
}
const toGetListArticlePageByReadNum = async () => {
  console.log("get article list page by read num");
  let res = await getListArticlePageByReadNum(articlePageRequest);
  // console.log(res);
  if (res.message === "ok") {
    console.log(res.data.records);
    Object.assign(articleList, res.data.records)
  }
}
const toGetListArticlePageByKeyWords = async () => {
  console.log("get article list page by keywords");
  let res = await getListArticlePageByKeyWords(articlePageRequest);
  if (res.message === "ok") {
    console.log(res.data.records);
    Object.assign(articleList, res.data.records)
  }
  console.log(res.data);
}
const toGoToArticleDetail = (id: number) => {
  console.log("to go to article detail");
  console.log(id);
  router.push({
    name: 'article',
    params: {id}
  });
}
onMounted(async () => {
  await toGetListArticlePageByReadNum();
})
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
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

.search-input:focus {
  border-color: #fc5531;
}

.search-button {
  padding: 8px 16px;
  background-color: #fc5531;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 16px 16px 0;
}

.search-button:hover {
  background-color: #fc1944;
}

.search-button i {
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

.discover-view-container {
  width: 1200px;
  margin: 20px;
  color: #181818;
}
</style>