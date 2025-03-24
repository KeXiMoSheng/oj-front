<template>
  <div v-if="hasContent" class="question-preview">
    <h2 v-if="title">{{ title }}</h2>
    <div v-if="background" class="section">
      <h3>背景</h3>
      <MdPreview :id="`background-${id}`" :modelValue="background"/>
    </div>
    <div v-if="description" class="section">
      <h3>描述</h3>
      <MdPreview :id="`description-${id}`" :modelValue="description"/>
    </div>
    <div v-if="inputFormat" class="section">
      <h3>输入格式</h3>
      <MdPreview :id="`inputFormat-${id}`" :modelValue="inputFormat"/>
    </div>
    <div v-if="outputFormat" class="section">
      <h3>输出格式</h3>
      <MdPreview :id="`outputFormat-${id}`" :modelValue="outputFormat"/>
    </div>
    <div v-if="notice" class="section">
      <h3>提示/说明</h3>
      <MdPreview :id="`notice-${id}`" :modelValue="notice"/>
    </div>
    <div v-if="timeLimit" class="section">
      <h3>时间限制</h3>
      <p>{{ timeLimit }}ms</p>
    </div>
    <div v-if="memoryLimit" class="section">
      <h3>内存限制</h3>
      <p>{{ memoryLimit }}MB</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps, onMounted, ref} from 'vue';
import {MdPreview} from 'md-editor-v3';
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  inputFormat: {
    type: String,
    default: ''
  },
  outputFormat: {
    type: String,
    default: ''
  },
  notice: {
    type: String,
    default: ''
  },
  timeLimit: {
    type: String,
    default: ''
  },
  memoryLimit: {
    type: String,
    default: ''
  }
});

const id = ref('preview-only');
onMounted(() => {
});

// 判断是否有内容传入
const hasContent = computed(() => {
  return (
      props.title ||
      props.background ||
      props.description ||
      props.inputFormat ||
      props.outputFormat ||
      props.timeLimit ||
      props.memoryLimit
  );
});
</script>

<style scoped>
.question-preview {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  margin-top: 16px;
}

.section {
  margin-top: 16px;
}
</style>