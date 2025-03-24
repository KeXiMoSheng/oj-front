<template>
  <div class="data-row" :class="{ 'completed-row': status === '已完成' }">
    <div class="data-cell">{{ status }}</div>
    <div class="data-cell">{{ id }}</div>
    <div class="data-cell">{{ title }}</div>
    <div class="data-cell">{{ passRate }}</div>
    <div class="data-cell" :class="difficultyColorClass">{{ difficulty }}</div>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue';

const props = defineProps({

  status: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  passRate: {
    type: String,
    default: ''
  },
  difficulty: {
    type: String,
    default: ''
  }
});

const difficultyColorClass = computed(() => {
  switch (props.difficulty) {
    case '简单':
      return 'difficulty-easy';
    case '中等':
      return 'difficulty-medium';
    case '困难':
      return 'difficulty-hard';
    default:
      return '';
  }
});
</script>

<style scoped>
.data-row {
  display: flex;
  color: rgb(38, 38, 38);
  cursor: pointer;
  /*
  border-top: 1px solid #ccc;
  */
}

.data-cell {
  flex: 1;
  padding: 10px;
  /*
  border-right: 1px solid #ccc;
  */
}

.data-row:first-child {
  color: rgba(60, 60, 67, 0.6);
  border-right: none;
}

.data-row:nth-child(even) {
  background-color: rgb(247, 248, 250);
}

.difficulty-easy {
  color: green;
}

.difficulty-medium {
  color: orange;
}

.difficulty-hard {
  color: red;
}

.completed-row {
  color: green;
}
</style>