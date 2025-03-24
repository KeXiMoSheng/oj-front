<template>
  <div class="user-status-bar">
    <div v-if="isLoggedIn" class="logged-in">
      <img :src="avatarUrl" alt="用户头像" class="avatar">
      <!-- 这里可以添加更多已登录状态下要显示的信息，如用户名等 -->
    </div>
    <div v-else class="not-logged-in">
      <div @click="goToRegister" class="register-login-item">注册</div>
      或
      <div @click="goToLogin" class="register-login-item">登录</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  avatarUrl: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['goToRegister', 'goToLogin']);

const goToRegister = () => {
  emits('goToRegister');
};

const goToLogin = () => {
  emits('goToLogin');
};
</script>

<style scoped>
.user-status-bar {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.logged-in {
  display: flex;
  align-items: center;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.not-logged-in {
  display: flex;
  color: rgba(0, 0, 0, 0.55);
}

.register-login-item {
  cursor: pointer;
  margin: 0 20px;
}
</style>