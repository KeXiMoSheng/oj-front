<template>
  <div class="column-display">
    <div class="left-section">
      <img :src="imageUrl" alt="专栏图片">
    </div>
    <div class="right-section">
      <div class="right-top">{{ columnName }}</div>
      <div class="right-middle">{{ columnDescription }}</div>
      <div class="right-bottom">
        <span>文章数: <slot name="articleCount"></slot></span>
        <span>文章总阅读量: <slot name="totalViews"></slot></span>
        <span>文章总收藏量: <slot name="totalFavorites"></slot></span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 传入的图片地址
const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  columnName: {
    type: String,
    required: true
  },
  columnDescription: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.column-display {
  color: rgb(78, 89, 105);
  display: flex;
  align-items: start;
}

.left-section {
  display: flex;
  width: 20%;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.left-section img {
  width: 150px; /* 修改图片宽度为 120px */
  height: 120px; /* 修改图片高度为 150px */
  border-radius: 4px;
}

.right-section {
  width: 80%;
  padding: 10px;
}

.right-top {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.right-middle {
  margin-bottom: 10px;
}

.right-bottom span {
  margin-right: 20px;
}
</style>