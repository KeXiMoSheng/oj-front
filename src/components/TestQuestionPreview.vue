<script setup lang="ts">

import QuestionPreview from "@/components/QuestionPreview.vue";
</script>

<template>
  <div class="exercise-container">
    <QuestionPreview
        status="状态"
        title="题目"
        solution="题解"
        passRate="通过率"
        difficulty="难度"
    />
    <QuestionPreview
        status="已完成"
        title="两数之和"
        solution="使用哈希表"
        passRate="80%"
        difficulty="简单"
    />
  </div>

</template>

<style scoped>
.exercise-container {
  width: 1200px;
  display: flex;
  flex-direction: column;
}
</style>