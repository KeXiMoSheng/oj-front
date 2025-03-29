<template>
  <div class="main-layout">
    <a-layout>
      <a-layout-header style="  border: 1px solid rgba(0, 0, 0, 0.08);">
        <div class="menu-demo">
          <a-menu mode="horizontal" :default-selected-keys="['1']" :selected-keys="selectedKeys"
                  @menu-item-click="handleMenuItemClick">

            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div class="horizontal-div-container">
                <div class="single-div">
                  <div>
                    <svg t="1741789524314" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         p-id="6047">
                      <path
                          d="M672.63412 954.357909l-138.898389-138.898389a1850.524151 1850.524151 0 0 1-116.262611 69.317972l-278.354472-278.354472a1556.587077 1556.587077 0 0 1 68.465031-117.115553l-138.045447-138.045447a32.805477 32.805477 0 0 1 0-46.41975l115.967361-115.967361a262.443816 262.443816 0 0 1 332.877175-31.493258c206.936949-146.902926 417.876166-192.043262 478.959963-130.893853s16.009073 272.088626-130.893853 478.959964a262.443816 262.443816 0 0 1-31.493258 332.877175L718.988259 954.292298a32.805477 32.805477 0 0 1-46.354139 0.065611zM440.666593 212.068381a131.221908 131.221908 0 0 0-185.580584 0L162.31212 304.84227a32.805477 32.805477 0 0 0 0 46.41975l69.580417 69.580417z m487.128527-115.967361c-29.524929-29.524929-112.42437-19.880119-210.315913 21.61881l188.697104 188.697103c41.597345-97.891543 51.406182-180.659762 21.717226-210.315913z m-51.537404 273.204013L654.591108 147.638425a921.63707 921.63707 0 0 0-216.155288 159.467423 1580.305437 1580.305437 0 0 0-218.123616 287.704033l208.774055 208.774056a1720.48324 1720.48324 0 0 0 287.704033-218.123617 921.63707 921.63707 0 0 0 159.56584-216.155287zM811.827759 768.810131a131.221908 131.221908 0 0 0 0-185.580583l-208.774055 208.774055 69.580416 69.580417a32.805477 32.805477 0 0 0 46.41975 0z m-324.774222-231.967527a131.221908 131.221908 0 1 1 185.580583 0 131.221908 131.221908 0 0 1-185.482167 0z m139.193639-139.193639a65.610954 65.610954 0 1 0 0 92.773889 65.610954 65.610954 0 0 0 0.098416-92.773889z"
                          fill="#1E59E4" p-id="6048"></path>
                      <path
                          d="M0.121842 1023.872715s-4.855211-180.725373 46.386945-231.967528a131.221908 131.221908 0 1 1 185.580583 185.580583C180.748798 1028.826342 0.121842 1023.872715 0.121842 1023.872715z m185.580584-185.580584a65.610954 65.610954 0 0 0-92.773889 0c-25.621078 25.621078-46.41975 139.193639-46.41975 139.193639s113.572561-20.798672 139.193639-46.41975a65.610954 65.610954 0 0 0-0.098417-92.675472z"
                          fill="#FF5A06" p-id="6049"></path>
                    </svg>
                  </div>

                </div>
                <div class="single-div">jun-code</div>
              </div>
            </a-menu-item>
            <a-menu-item key="1" @click="handleToHome">
              首页
            </a-menu-item>
            <a-menu-item key="2" @click="handleToQuestionList">
              题目
            </a-menu-item>
            <a-menu-item key="3" @click="handleToArticleEdit">
              写文章
            </a-menu-item>
            <a-menu-item key="4" @click="handleToDiscover">
              发现
            </a-menu-item>
          </a-menu>
        </div>
        <div class="my">
          <UserStatusBar
              :isLoggedIn="userUserStore.user?.isLoggedIn"
              :userAvatar="userUserStore.user?.userAvatar"
              @goToRegister="handleRegisterClick"
              @goToLogin="handleLoginClick"
          />
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import UserStatusBar from "@/components/UserStatusBar.vue";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/userStore.ts";
const userUserStore = useUserStore()
const selectedKeys = ref(['1']);
const routeMapKey = new Map<string, string>([
  ['/home', '1'],
  ['/questionList', '2'],
  ['/articleEdit', '3'],
  ['/discover', '4'],
])
const handleMenuItemClick = (key: string) => {
  selectedKeys.value = [key];
};
const activeRoute = ref(router.currentRoute.value);
const handleToHome = () => {
  router.push({name: 'home'});
};
const handleToQuestionList = () => {
  router.push({name: 'questionList'});
}
const handleToArticleEdit = () => {
  router.push({name: 'articleEdit'});
}
const handleToDiscover = () => {
  router.push({name: 'discover'});
}
const handleRegisterClick = () => {
  router.push({name: 'register'});
};

const handleLoginClick = () => {
  router.push({name: 'login'});
};

const handleActiveRoute = () => {
  console.log(activeRoute.value.fullPath);
  if (routeMapKey.has(activeRoute.value.fullPath)) {
    let str = routeMapKey.get(activeRoute.value.fullPath)
    if (str != undefined)
      selectedKeys.value = [str];
  }
};

onMounted(() => {
  handleActiveRoute();
})
</script>
<style scoped>
.main-layout {
  height: 100vh;
  display: flex;
}

.main-layout :deep(.arco-layout-sider-children),
.main-layout :deep(.arco-layout-content) {
  display: flex;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  justify-content: center;
}

.main-layout :deep(.arco-layout-header) {
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}


.main-layout :deep(.arco-layout-content) {
  /*
  background-color: rgb(var(--arcoblue-6));
  */
}


.menu-demo {
  box-sizing: border-box;
  width: 80%;
  background-color: var(--color-neutral-2);
}

.horizontal-div-container {
  display: flex;
  flex-direction: row;
  width: 160px;
  height: 100%;
  border-radius: 2px;
  cursor: pointer;
}

.single-div {
  width: 80px;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.single-div div {
  display: block;
  width: 24px;
  height: 24px;
}

.my {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
