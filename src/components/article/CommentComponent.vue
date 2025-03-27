<template>
  <div class="comment-component-container">
    <div class="textarea-container">
      <textarea v-model="comment" placeholder="请输入评论内容"></textarea>
    </div>
    <div class="button-container">
      <button
          class="comment-button"
          :class="{ 'disabled':!comment.trim() }"
          @click="handleComment"
          :disabled="!comment.trim()"
      >
        评论
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// 定义 props
const props = defineProps({
  // 这里可以根据需要添加更多的 props
});

// 定义 emits
const emits = defineEmits(['comment']);

// 定义评论内容的响应式变量
const comment = ref('');

// 处理评论事件
const handleComment = () => {
  if (comment.value.trim() !== '') {
    emits('comment', comment.value);
    comment.value = '';
  }
};

// 获取评论内容的方法
const getCommentContent = () => {
  return comment.value;
};

// 暴露方法供父组件调用
defineExpose({
  getCommentContent
});
</script>

<style scoped>
.comment-component-container {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.textarea-container {
  margin: 10px;
}

.textarea-container textarea {
  width: 100%;
  height: 100px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 13px;
  resize: none;
}

/* 去除 textarea 聚焦时的边框变色效果 */
.textarea-container textarea:focus {
  outline: none;
  border: 1px solid #ccc;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.comment-button {
  background-color: #2DB55D;
  margin: 10px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

}

.comment-button.disabled {
  background-color: gray;
  cursor: not-allowed;
}

.comment-button:hover:not(.disabled) {
  background-color: darkgreen;
}
</style>