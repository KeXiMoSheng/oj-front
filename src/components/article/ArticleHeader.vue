<template>
  <div class="article-header">
    <div class="comment-detail">{{ title }}</div>
    <div class="article-author">
      <div class="author-avatar">
        <img :src="avatarUrl" alt="Author Avatar">
      </div>
      <div class="author-info">
        <div class="author-name">{{ authorName }}</div>
        <div class="publish-time">{{ displayTime }}</div>
      </div>
    </div>
    <div class="article-tags">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps} from 'vue';
import {formatPublishTime} from "@/utils/computedTime.js";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  avatarUrl: {
    type: String,
    default: ''
  },
  authorName: {
    type: String,
    default: ''
  },
  publishTime: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  }
});
// 计算属性，使用工具函数处理发布时间
const displayTime = computed(() => {
  return formatPublishTime(props.publishTime);
});
</script>

<style scoped>
.article-header {
  padding: 16px;
  margin: 10px;
}

.comment-detail {
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
}

.article-author {
  display: flex;
  align-items: center;
  margin: 5px;
}

.author-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
}

.author-info {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.author-name {
  font-weight: bold;
}

.publish-time {
  color: #777;
}

.article-tags {
  margin: 5px;

}

.article-tags span {
  color: rgb(115, 115, 115);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 4px 8px;
  margin-right: 5px;
  border-radius: 9999px;
}

.article-tags span:hover {
  color: hsl(0 0% 10%);
}
</style>