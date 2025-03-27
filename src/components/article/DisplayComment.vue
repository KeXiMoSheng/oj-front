<template>
  <div class="display-comment-container">
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
      <!-- 2. 评论标题 -->
      <div class="comment-detail">
        <span>{{ commentContent }}</span>
      </div>
      <!-- 4. 点赞、评论信息 -->
      <CommentInteraction
          :likeCount="likeCount"
          :commentCount="commentCount"
          :isLiked="isLiked"
          @like="handleLike"
          @comment="handleComment"
          @reply="handleReply"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { formatPublishTime } from "@/utils/computedTime.ts";
import CommentInteraction from "@/components/article/CommentInteraction.vue";

// 定义组件的 props
const props = defineProps<{
  // 头像地址
  avatarUrl: string;
  // 用户名
  username: string;
  // 发布时间
  publishTime: string;
  // 点赞数量
  likeCount: number;
  // 评论数量
  commentCount: number;
  // 是否点赞
  isLiked: boolean;
  // 评论内容
  commentContent: string;
}>();

// 计算属性，使用工具函数处理发布时间
const displayTime = computed(() => {
  return formatPublishTime(props.publishTime);
});


// 暴露事件
const emits = defineEmits(['like', 'comment','reply']);
const handleLike =()=>{
  emits('like');
}
const handleComment =()=>{
  emits('comment');
}
const handleReply =()=>{
  emits('reply');
}

</script>

<style scoped>
.display-comment-container {
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


</style>