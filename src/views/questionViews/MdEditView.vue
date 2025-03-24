<template>
  <div class="md-editor-container">
    <div class="publish-button-container">
      <input
          v-model="article.title"
          type="text"
          placeholder="请输入文章标题，最多 100 字"
          maxlength="100"
          class="article-title-input"
      />
      <button class="save_btn" @click="toSaveArticle">保存草稿</button>
      <button class="publish_btn" @click="toPublishArticle">发布文章</button>
    </div>
    <MdEditor
        v-model="article.content"
        catalogLayout="flat"
        :toolbars-exclude="['revoke', 'next', 'github','save', 'htmlPreview']"
        :toolbars="toolbars"
        ref="editorRef"
    >
    </MdEditor>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue';
import {type ExposeParam, MdEditor} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {getArticle, updateArticle} from "@/api/article/index.ts";
import type {Article} from "@/api/article/type.ts";
import {Message} from "@arco-design/web-vue";


const article: Article = reactive<Article>({});
const toFetchArticle = async () => {
  try {
    const res = await getArticle(280) as any;
    if (res) {
      // 假设文章内容在 res.content 中，根据实际情况修改
      // console.log(res);
      Object.assign(article, res.data);
    }
    if (res.message === "ok") {
        Message.success("文章加载成功");
    }
  } catch (error) {
    console.error('获取文章数据失败:', error);
  }
};
const toSaveArticle = async () => {
  try {
    if (!article.title) {
      console.error('请输入文章标题');
      return;
    }
    const res = await updateArticle(article);
    console.log(res);
  } catch (error) {
    console.error('更新文章数据失败:', error);
  }
};
const toPublishArticle = async () => {
  try {
    if (!article.title) {
      console.error('请输入文章标题');
      return;
    }
    const res = await updateArticle(article);
    console.log(res);
  } catch (error) {
    console.error('更新文章数据失败:', error);
  }
};
const editorRef = ref<ExposeParam>();

onMounted(() => {
  toFetchArticle();
  editorRef.value?.toggleCatalog(true);
  editorRef.value?.on('catalog', (status) => console.log(status));
});

const toolbars = [
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  'katex',
  '-',
  'revoke',
  'next',
  'save',
  '=',
  'catalog',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'previewOnly',
  'htmlPreview',
  'github',
];
</script>

<style lang="css">
.md-editor-container {
  width: 80%;
  position: relative;
  margin-bottom: 20px; /* 为按钮预留空间 */
}

.publish-button-container {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  cursor: pointer;
}

.save_btn {
  height: 50%;
  margin-right: 16px;
  padding: 0 16px;
  font-size: 16px;
  color: #fc5531;
  border: 1px solid #fc5531;
  border-radius: 18px;
  white-space: nowrap;
  background-color: #fff;
}

.save_btn:hover {
  background-color: #fff5f2;
}

.publish_btn {
  height: 50%;
  padding: 0 16px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 18px;
  white-space: nowrap;
  background: #fc5531;
}

.publish_btn:hover {
  background: #fc1944;
}

.article-title-input {
  flex: 1;
  margin-right: 10px;
  margin-left: 4px;
  border-radius: 18px;
  padding: 8px;
  border: 1px solid #ccc;
}

svg.md-editor-icon {
  padding: 0;
}

.md-editor-toolbar-wrapper .md-editor-toolbar-item{
  margin: 0 12px;
}

</style>