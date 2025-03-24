<template>
  <div class="page-container">
    <div class="language-selector">
      <label for="language">language:</label>
      <select id="language" v-model="selectedLanguage" @change="changeLanguage">
        <option value="java">Java8</option>
        <option value="cpp">C++11</option>
        <option value="python">Python 3.8</option>
      </select>
      <label for="theme">theme:</label>
      <select id="theme" v-model="selectedTheme" @change="changeTheme">
        <option value="vs">vs</option>
        <option value="hc-black">hc-black</option>
        <option value="vs-dark">vs-dark</option>
      </select>
    </div>
    <div class="code-editor-container">
      <div id="codeEditBox"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor';
import {ref, onMounted, toRaw} from 'vue';
// 定义 editor 的类型
const editor = ref<monaco.editor.IStandaloneCodeEditor | null>(null);
// 定义选中的语言
const selectedLanguage = ref<string>('java');
// 定义选中的主题
const selectedTheme = ref<string>('vs');

// 确保 monaco-editor 资源加载完成后再初始化编辑器
const loadMonaco = () => {
  return new Promise<void>((resolve) => {
    if (typeof monaco === 'undefined') {
      // 若 monaco 未定义，这里可以添加加载 monaco 的逻辑
      // 但通常在引入 monaco 时就已经完成加载，所以这里一般不会执行
    } else {
      resolve();
    }
  });
};

// 初始化编辑器的函数
const initEditor = async () => {
  await loadMonaco();
  // 初始化编辑器，确保dom已经渲染
  editor.value = monaco.editor.create(document.getElementById('codeEditBox') as HTMLElement, {
    value: '', // 编辑器初始显示文字
    language: selectedLanguage.value, // 语言支持自行查阅demo
    theme: selectedTheme.value, // 使用选中的主题
    selectOnLineNumbers: true, // 显示行号
    roundedSelection: false,
    readOnly: false, // 只读
    cursorStyle: 'line', // 光标样式
    automaticLayout: true, // 开启自动布局
    glyphMargin: true, // 字形边缘
    useTabStops: false,
    fontSize: 18, // 字体大小
    autoIndent: "full", // 自动布局
    quickSuggestionsDelay: 10, // 代码提示延时
  });

  // 监听值的变化
  if (editor.value) {
    editor.value.onDidChangeModelContent((event) => {
      console.log(event);
    });
  }
};

// 改变语言的函数
const changeLanguage = () => {
  if (editor.value) {
    // 使用 toRaw 获取原始的 editor 对象
    const rawEditor = toRaw(editor.value);
    const model = rawEditor.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, selectedLanguage.value);
    }
  }
  console.log(selectedLanguage.value);
};

// 改变主题的函数
const changeTheme = () => {
  if (editor.value) {
    monaco.editor.setTheme(selectedTheme.value);
  }
  console.log(selectedTheme.value);
};

// 在组件挂载后初始化编辑器
onMounted(async () => {
  await initEditor();
});

// 获取编辑器内容的函数
const getVal = () => {
  return toRaw(editor.value)?.getValue(); //获取编辑器中的文本
};

// 处理点击按钮获取编辑器内容的函数
const handleGetVal = () => {
  const value = getVal();
  console.log('编辑器内容:', value);
};
// 获取编辑器的语言
const getLanguage = () => {
  const rawEditor = toRaw(editor.value);
  // 检查 rawEditor 是否存在
  if (rawEditor) {
    const model = rawEditor.getModel();
    // 检查 model 是否存在
    if (model) {
      return model.getLanguageId();
    }
  }
  // 如果 model 不存在，返回 null 或其他默认值
  return null;
};
defineExpose({
  getVal, getLanguage
})

</script>

<style scoped lang="css">
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.language-selector {
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
}

.code-editor-container {
  flex: 1;
  position: relative;
}

#codeEditBox {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
/* 新增的 CSS 规则，去掉 option 的边框 */
select {
  border: none;
}
</style>