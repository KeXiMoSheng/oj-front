<template>
  <div style="width: 60%">
    <!-- 使用 ColumnDisplay 组件 -->
    <SpecialColumnPreview
        imageUrl="https://pica.zhimg.com/v2-71a182f26fcca662fad5378517d27016_720w.jpg?source=172ae18b"
        columnName="技术前沿专栏"
        columnDescription="探索最新的技术趋势和创新应用"
    >
      <!-- 插入插槽内容 -->
      <template #articleCount>50</template>
      <template #totalViews>10000</template>
      <template #totalFavorites>200</template>
    </SpecialColumnPreview>
  </div>

</template>

<script setup>
// 导入 ColumnDisplay 组件
import SpecialColumnPreview from "@/components/SpecialColumnPreview.vue";

</script>

<style scoped>
/* 全局样式 */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>