<template>
  <div class="discover-view-container">
    <div v-for="i in 10">
      <ArticlePreview
          :avatarUrl="avatarUrl"
          :username="username"
          :publishTime="publishTime"
          :articleTitle="articleTitle"
          :articleDescription="articleDescription"
          :likeCount="likeCount"
          :viewCount="viewCount"
          :commentCount="commentCount"
          :favouredCount="favouredCount"
          :is-favoured="false"
          :is-liked="false"
          @like="handleLike"
          @favour="handleFavour"
          @comment="handleComment"
      />
    </div>
  </div>


</template>
<script setup lang="ts">
import ArticlePreview from "@/components/ArticlePreview.vue";
import {onMounted, reactive, ref} from "vue";
import {getArticleListPage} from "@/api/article";
import type {ArticlePageRequest} from "@/api/article/type.ts";

const avatarUrl = 'https://tse1-mm.cn.bing.net/th/id/OIP-C.aCW_Ax9FtUGhnDBetciYoQAAAA?w=224&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7';
const username = 'John Doe';
const publishTime = '2025-03-15 17:49';
const articleTitle = 'My Blog Article';
const articleDescription = '28届双非一本软件工程。web目前学了vue2，elementUI，springboot，Java项目目前就跟着B站里面的教程敲了个苍穹外卖。懂一点单片机，边缘计算正在学。初中和高中学了很久的unity和Blender（只会建模和打灯，不会画贴图，shader勉勉强强够用）并且unity大多是2d项目，也没有学引擎底层';
const likeCount = 10;
const viewCount = 100;
const commentCount = 5;
const favouredCount = 15;
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
const maxPage = ref<number>();

const articlePageRequest = reactive<ArticlePageRequest>({
  current: 1,
  pageSize: 10,
})
const toGetArticleListPage = async () => {
  console.log("get article list page");
  let res = await getArticleListPage(articlePageRequest);
  console.log("当前now为");
  console.log(articlePageRequest.current);
  if (res.message === "ok") {
    console.log(res.data);
  }
}


onMounted(async () => {
  await toGetArticleListPage();
})
</script>
<style scoped>
.discover-view-container {
  width: 1200px;
  margin: 20px;
  color: #181818;
}
</style>