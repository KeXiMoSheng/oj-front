

<template>
  <ArticleHeader
      :title="article.title"
      :avatarUrl="article.avatarUrl"
      :authorName="article.authorName"
      :publishTime="article.publishTime"
      :tags="article.tags"
  />
</template>
<script setup lang="ts">
import {ref} from "vue";
import ArticleHeader from "@/components/article/ArticleHeader.vue";

const article = ref({
  title: '示例文章标题',
  avatarUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.aCW_Ax9FtUGhnDBetciYoQAAAA?w=224&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  authorName: '示例作者',
  publishTime: '2025-03-25 12:00:00',
  tags: ['标签1', '标签2'],
  articleContent: '这是一篇示例文章的内容。',
  viewCount: 100,
  likeCount: 20,
  commentCount: 10,
  favoriteCount: 15,
  comments: ['这是一条示例评论', '另一条示例评论']
});
</script>
<style scoped>

</style>