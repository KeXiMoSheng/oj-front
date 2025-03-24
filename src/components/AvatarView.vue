<template>
  <a-space size="large">
    <a-avatar trigger-type="mask">
      <img
          alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
      <template #trigger-icon>
        <IconEdit />
      </template>
    </a-avatar>
  </a-space>
</template>

<script setup lang="ts">
import { IconEdit } from '@arco-design/web-vue/es/icon';
</script>