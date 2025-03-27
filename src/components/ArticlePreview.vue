<template>
  <div class="article-preview-container">
    <!-- 左边模块：头像 -->
    <div class="left-module">
      <img :src="avatarUrl" alt="Avatar" class="avatar">
    </div>
    <!-- 右边模块 -->
    <div class="right-module">
      <!-- 1. 用户名和发布时间 -->
      <div class="user-info">
        <span>{{ username }}</span>
        <span>{{ displayTime }}</span>
      </div>
      <!-- 2. 文章标题 -->
      <div class="comment-detail">
        <h2>{{ articleTitle }}</h2>
      </div>
      <!-- 3. 文章简略描述 -->
      <div class="article-description">
        <p>{{ displayArticleDescription }}</p>
      </div>
      <!-- 4. 观看、点赞、收藏、评论信息 -->
      <InteractionInfo
          :viewCount="viewCount"
          :likeCount="likeCount"
          :favouredCount="favouredCount"
          :commentCount="commentCount"
          :isLiked="isLiked"
          :isFavoured="isFavoured"
          @like="handleLike"
          @favour="handleFavour"
          @comment="handleComment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { formatPublishTime } from "@/utils/computedTime.ts";
import InteractionInfo from './InteractionInfo.vue';

// 定义组件的 props
const props = defineProps<{
  // 头像地址
  avatarUrl: string;
  // 用户名
  username: string;
  // 发布时间
  publishTime: string;
  // 文章标题
  articleTitle: string;
  // 文章简略描述
  articleDescription: string;
  // 点赞数量
  likeCount: number;
  // 观看用户数量
  viewCount: number;
  // 评论数量
  commentCount: number;
  // 收藏数量
  favouredCount: number;
  // 是否点赞
  isLiked: boolean;
  // 是否收藏
  isFavoured: boolean;
}>();

// 计算属性，使用工具函数处理发布时间
const displayTime = computed(() => {
  return formatPublishTime(props.publishTime);
});

// 计算属性，处理文章简略描述，超过 100 字用 ... 表示
const displayArticleDescription = computed(() => {
  if (props.articleDescription.length > 100) {
    return props.articleDescription.slice(0, 100) + '...';
  }
  return props.articleDescription;
});
// 暴露事件
const emits = defineEmits(['like', 'favour', 'comment']);
const handleLike =()=>{
  emits('like');
}
const handleComment =()=>{
  emits('comment');
}
const handleFavour =()=>{
  emits('favour');
}
</script>

<style scoped>
.article-preview-container {
  display: flex;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.left-module {
  flex: 0 0 32px; /* 调整宽度为 32px */
  margin: 16px 16px 16px 16px;
}

.avatar {
  display: block;
  width: 32px; /* 设置宽度为 32px */
  height: 32px; /* 设置高度为 32px */
  border-radius: 50%; /* 让头像显示为圆形 */
  object-fit: cover; /* 保证图片内容覆盖整个区域 */
}

.right-module {
  flex: 1;
}

.user-info {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.user-info span + span {
  margin-left: 8px;
}

.comment-detail {
  margin-bottom: 8px;
}

.comment-detail h2 {
  font-size: 18px;
  margin: 0;
}

.article-description {
  color: #888;
  font-size: 14px;
  margin-bottom: 16px;
}
</style>