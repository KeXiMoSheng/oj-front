<template>
  <div class="wrapper">
    <div class="top">
      <div class="left">
        <a-carousel
            :style="{
      width: '600px',
      height: '240px',}"
            :auto-play="true"
            indicator-type="dot"
            show-arrow="hover"
        >
          <a-carousel-item v-for="image in images">
            <img
                :src="image"
                :style="{
          width: '100%',
        }"
            />
          </a-carousel-item>
        </a-carousel>
      </div>
      <div class="right">
        <!-- 添加一个容器用于包裹日历并设置缩放 -->
        <calendar-view/>
      </div>
    </div>
    <!--    -->
    <div class="bottom">
      <a-tabs default-active-key="1" lazy-load>
        <a-tab-pane v-for="(item,index) in titleList" :key="(index+1).toString()" :title="item">
          <SpecialColumnPreview v-for="(it,index) in specialColumnDetails.get(item)"
              :imageUrl="it.imageUrl"
              :columnName="it.title"
              :columnDescription="it.description"
           >
            <!-- 插入插槽内容 -->
            <template #articleCount>50</template>
            <template #totalViews>10000</template>
            <template #totalFavorites>200</template>
          </SpecialColumnPreview>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarView from "@/views/CalendarView.vue";
import {onMounted, reactive, ref} from "vue";
import {getSpecialColumn, getSpecialColumnDetail} from "@/api/specialColumn";
import type {SpecialColumn} from "@/api/specialColumn/type.ts";
import {Message} from "@arco-design/web-vue";
import SpecialColumnPreview from "@/components/SpecialColumnPreview.vue";

const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
];
const specialColumns = reactive<SpecialColumn[]>([]);
const titleList = ref<string[]>([]);
// 创建一个 Map 对象
const specialColumnDetails = new Map<string, SpecialColumn[]>();
const init = async () => {
  const res = await getSpecialColumn();
  // console.log(res)
  if (res.message === "ok") {
    Message.success("获取专栏列表成功")
    titleList.value = res.data;
    // console.log(titleList.value)
    for (const item of titleList.value) {
      // console.log(item)
      let result = await toGetSpecialColumnDetail(item);
      // console.log(result.message)
      if (result.message === "ok" && result.data.length > 0) {
        specialColumnDetails.set(item, result.data);
      }
      // console.log(specialColumnDetails)
    }
  }
}
const toGetSpecialColumnDetail = async (title: string) => {
  let specialColumn: SpecialColumn = {
    title: title,
  };
  return await getSpecialColumnDetail(specialColumn);
}

onMounted(async () => {
  await init();
})
</script>

<style scoped>
.wrapper {
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.left {
  flex: 1;
}

.right {
  flex: 1;
}

/* 新增日历容器样式 */
.calendar-container {
  /* 缩小为原来的一半 */
  /* 调整缩放的原点，使其居中显示 */
  transform-origin: top left;
}

.top {
  display: flex;
  flex: 4;
}

.bottom {
  /*width: 1200px;*/
  /*
  background-color: #2DB55D;
  */
  flex: 6;
}
</style>