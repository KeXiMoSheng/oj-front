<template>
  <div class="main-layout">
    <a-layout>
      <a-layout-header>
        <div class="flex x-center y-center black-font">
          <div class="tab-button x-center" @click="handleRun">
            <div class="svg-div bottom-child margin x-center">
              <svg t="1740399892539" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="7464">
                <path
                    d="M228.97664 141.85472A25.6 25.6 0 0 0 225.28 155.10528v713.79456a25.6 25.6 0 0 0 38.85056 21.90336l546.51392-330.60864c26.61376-16.1024 35.13856-50.72896 19.03616-77.34272a56.32 56.32 0 0 0-19.03616-19.03616L264.13056 133.20192a25.6 25.6 0 0 0-35.15392 8.6528zM174.08 868.89984V155.10528a76.8 76.8 0 0 1 11.08992-39.75168c21.95456-36.29056 69.1712-47.91296 105.46176-25.9584l546.51392 330.61376a107.52 107.52 0 0 1 36.34688 36.34176c30.73536 50.80576 14.464 116.9152-36.34688 147.65056l-546.5088 330.61376A76.8 76.8 0 0 1 250.88 945.69984c-42.41408 0-76.8-34.3808-76.8-76.8z"
                    fill="currentColor" p-id="7465"></path>
              </svg>
            </div>
            <div class="tab-text bottom-child margin">
              运行
            </div>
          </div>
          <div class="tab-button x-center" @click="handleSubmit">
            <div class="svg-div bottom-child margin x-center">
              <svg t="1740399961462" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="9407">
                <path
                    d="M565.66 961.83c-2.32 0-4.67-0.14-7.03-0.43-25.17-3.06-44.94-21.91-49.19-46.91l-56.35-331.34-331.34-56.35c-25-4.25-43.85-24.02-46.9-49.19-3.06-25.17 10.52-48.88 33.77-58.99L876.73 84.7l13.95 32.1-13.95-32.1c21.56-9.37 46.24-4.69 62.87 11.94 16.63 16.63 21.31 41.3 11.94 62.86L617.62 927.63c-9.17 21.08-29.5 34.2-51.96 34.2zM177.03 465.21l296.98 50.51c23.78 4.04 42.47 22.74 46.52 46.52l50.51 296.98 303-697.01-697.01 303z"
                    p-id="9408" fill="currentColor"></path>
              </svg>
            </div>
            <div class="tab-text bottom-child margin">
              提交
            </div>
          </div>
          <div style="position: absolute;right: 0;margin: 5px 20px">
            <UserStatusBar
                :isLoggedIn="false"
                :avatarUrl="userAvatarUrl"
                @goToRegister="handleRegisterClick"
                @goToLogin="handleLoginClick"
            />
          </div>
        </div>

      </a-layout-header>
      <a-layout>
        <a-layout-sider
            :resize-directions="['right']"
            :width="siderWidth"
            @resize="onResize"
            class="custom-sider">
          <!-- 给 question-view 添加一个包裹层，设置内边距 -->
          <div class="sider-content-wrapper">
            <a-tabs default-active-key="1" trigger="hover">
              <!--              -->
              <a-tab-pane key="1">
                <template #title>
                  <div class="tab-button x-center">
                    <div class="svg-div bottom-child margin">
                      <svg t="1741692905481" class="icon" viewBox="0 0 1024 1024" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" p-id="5178">
                        <path
                            d="M576 742.4H324.267c-12.8 0-21.334 8.533-21.334 21.333s8.534 21.334 21.334 21.334H576c12.8 0 21.333-8.534 21.333-21.334S584.533 742.4 576 742.4zM699.733 576H324.267c-12.8 0-21.334 8.533-21.334 21.333 0 12.8 8.534 21.334 21.334 21.334h375.466c12.8 0 21.334-8.534 21.334-21.334 0-12.8-8.534-21.333-21.334-21.333zM324.267 281.6h102.4c12.8 0 21.333-8.533 21.333-21.333 0-12.8-8.533-21.334-21.333-21.334h-102.4c-12.8 0-21.334 8.534-21.334 21.334 0 12.8 8.534 21.333 21.334 21.333zM678.4 55.467H221.867c-46.934 0-85.334 38.4-85.334 85.333v750.933c0 46.934 38.4 85.334 85.334 85.334H806.4c46.933 0 85.333-38.4 85.333-85.334V281.6L678.4 55.467z m166.4 832c0 21.333-17.067 42.666-42.667 42.666H221.867c-21.334 0-42.667-17.066-42.667-42.666V136.533c0-21.333 17.067-42.666 42.667-42.666h375.466v209.066c0 21.334 17.067 42.667 42.667 42.667h209.067v541.867zM635.733 302.933V93.867h21.334L844.8 302.933H635.733z m-332.8 123.734c0 12.8 8.534 21.333 21.334 21.333h375.466c12.8 0 21.334-8.533 21.334-21.333 0-12.8-8.534-21.334-21.334-21.334H324.267c-12.8 4.267-21.334 12.8-21.334 21.334z"
                            p-id="5179" fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="tab-text bottom-child margin">
                      题目描述
                    </div>
                  </div>
                </template>
                <!--                <a-tabs default-active-key="1" trigger='hover'>-->
                <a-tab-pane key="1">
                  <div class="scrollable-content">
                    <QuestionView
                        :title="question.title"
                        :background="question.background"
                        :description="question.description"
                        :input-format="question.inputFormat"
                        :output-format="question.outputFormat"
                        :time-limit="question.maxTime"
                        :memory-limit="question.maxMemory"
                        :notice="question.notice"
                    />
                  </div>
                </a-tab-pane>
                <!--                </a-tabs>-->
              </a-tab-pane>
              <!--              -->
              <!--              -->
              <a-tab-pane key="2">
                <template #title>
                  <div class="tab-button x-center">
                    <div class="svg-div bottom-child margin">
                      <svg t="1741692905481" class="icon" viewBox="0 0 1024 1024" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" p-id="5178">
                        <path
                            d="M576 742.4H324.267c-12.8 0-21.334 8.533-21.334 21.333s8.534 21.334 21.334 21.334H576c12.8 0 21.333-8.534 21.333-21.334S584.533 742.4 576 742.4zM699.733 576H324.267c-12.8 0-21.334 8.533-21.334 21.333 0 12.8 8.534 21.334 21.334 21.334h375.466c12.8 0 21.334-8.534 21.334-21.334 0-12.8-8.534-21.333-21.334-21.333zM324.267 281.6h102.4c12.8 0 21.333-8.533 21.333-21.333 0-12.8-8.533-21.334-21.333-21.334h-102.4c-12.8 0-21.334 8.534-21.334 21.334 0 12.8 8.534 21.333 21.334 21.333zM678.4 55.467H221.867c-46.934 0-85.334 38.4-85.334 85.333v750.933c0 46.934 38.4 85.334 85.334 85.334H806.4c46.933 0 85.333-38.4 85.333-85.334V281.6L678.4 55.467z m166.4 832c0 21.333-17.067 42.666-42.667 42.666H221.867c-21.334 0-42.667-17.066-42.667-42.666V136.533c0-21.333 17.067-42.666 42.667-42.666h375.466v209.066c0 21.334 17.067 42.667 42.667 42.667h209.067v541.867zM635.733 302.933V93.867h21.334L844.8 302.933H635.733z m-332.8 123.734c0 12.8 8.534 21.333 21.334 21.333h375.466c12.8 0 21.334-8.533 21.334-21.333 0-12.8-8.534-21.334-21.334-21.334H324.267c-12.8 4.267-21.334 12.8-21.334 21.334z"
                            p-id="5179" fill="currentColor"></path>
                      </svg>
                    </div>
                    <div class="tab-text bottom-child margin">
                      提交记录
                    </div>
                  </div>
                </template>
                <!--                <a-tabs default-active-key="1" trigger='hover'>-->
                <a-tab-pane key="2">
                  <div class="scrollable-content">
                    ddd
                  </div>
                </a-tab-pane>
                <!--                </a-tabs>-->
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-layout-sider>
        <a-layout-content>
          <div class="parent">
            <div class="top" :style="{ height: `${topHeight}px` }">
              <code-edit-view ref="editorRef"/>
            </div>
            <div class="separator" @mousedown="startDrag"></div>
            <div class="bottom" :style="{ height: `${totalHeight - topHeight}px` }">
              <div v-if="(totalHeight - topHeight) > 50" class="icon-wrapper" @click="setBottomHeight(50)"
                   style="position: relative">
                <!-- 这里后续填入图标1的svg代码 -->
                <svg t="1741680348560" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="12471" id="mx_n_1741680348561">
                  <path
                      d="M919.841244 513.334391c0-225.25016-182.591595-407.841755-407.842779-407.841755-225.25016 0-407.841755 182.592618-407.841755 407.841755 0 225.251184 182.591595 407.841755 407.841755 407.841755 92.471065 0 177.138396-31.458479 245.553579-83.303264 2.809999-3.187599 4.65502-7.257288 4.65502-11.828396 0-9.985422-8.093329-18.079774-18.077727-18.079774-5.180999 0-9.794064 2.054799-13.087063 5.536087l-0.232291 0c-61.217247 45.049009-136.576585 72.021314-218.412428 72.021314-203.961298 0-369.335766-165.393911-369.335766-369.334743 0-203.983811 165.373445-369.335766 369.335766-369.335766 203.984834 0 369.335766 165.351955 369.335766 369.335766 0 62.289672-14.617929 120.931257-41.881876 172.440397l0 0.293689c-0.503467 1.719154-1.049912 3.39533-1.049912 5.242398 0 9.983375 8.096399 18.079774 18.080797 18.079774 7.780197 0 14.281261-4.990664 16.820084-11.872399l0 0.125867C902.74896 644.373867 919.841244 580.866461 919.841244 513.334391zM681.294243 433.509345 522.738064 594.165348 367.955838 437.305811c-9.647731-9.709129-24.287149-10.654664-32.718169-2.201132-8.43102 8.472975-7.467065 23.195282 2.181689 32.906457l166.105109 168.225399c5.497201 5.494131 12.627598 8.094352 19.294438 7.842619 6.627954 0.209778 13.675464-2.367931 19.169595-7.884574L711.830723 464.23616c9.647731-9.709129 10.613732-24.411993 2.180666-32.906457C705.581392 422.856727 690.942997 423.821705 681.294243 433.509345z"
                      fill="#707070" p-id="12472"></path>
                </svg>
              </div>
              <div v-else class="icon-wrapper" @click="setBottomHeight(totalHeight / 3)">
                <!-- 这里后续填入图标2的svg代码 -->
                <svg t="1741680486421" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="12698">
                  <path
                      d="M923.095357 513.334391c0-225.794559-183.03264-408.827199-408.827199-408.827199-225.794559 0-408.827199 183.031617-408.827199 408.827199S288.473599 922.160567 514.269181 922.160567c92.692099 0 177.567161-31.534204 246.146073-83.506902 2.816139-3.193739 4.666276-7.272637 4.666276-11.856026 0-10.006911-8.114818-18.121729-18.121729-18.121729-5.192256 0-9.8176 2.058892-13.118785 5.548366l-0.232291 0C672.241053 859.383802 596.703659 886.421598 514.668271 886.421598c-204.455555 0-370.227066-165.794024-370.227066-370.228089 0-204.477045 165.772534-370.227066 370.227066-370.227066 204.474998 0 370.228089 165.750021 370.228089 370.227066 0 62.439074-14.653745 121.222899-41.984207 172.857906l0 0.293689c-0.505513 1.723248-1.051959 3.405563-1.051959 5.256724 0 10.006911 8.115841 18.121729 18.124799 18.121729 7.79964 0 14.31503-5.004991 16.85897-11.900028l0 0.127913C905.962142 644.691091 923.095357 581.03019 923.095357 513.334391zM525.096784 382.314359c-6.685259-0.274246-13.834076 2.333138-19.34151 7.863085L339.267449 558.809095c-9.670244 9.711176-10.616802 24.471344-2.186805 32.983205 8.429996 8.473999 23.105231 7.506974 32.775474-2.206248L525.01185 432.349939l158.937872 161.021324c9.69378 9.713222 24.367991 10.679223 32.797987 2.186805 8.452509-8.494465 7.483438-23.254633-2.185782-32.965809L544.332894 390.19791C538.824437 384.689453 531.740088 382.083092 525.096784 382.314359z"
                      fill="#707070" p-id="12699"></path>
                </svg>
              </div>
              <!--              666-->
              <a-tabs trigger="hover">
                <a-tab-pane key="1">
                  <template #title>
                    <div class="tab-button x-center">
                      <div class="svg-div bottom-child margin">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square-check"
                             class="svg-inline--fa fa-square-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor"
                                d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                      </div>
                      <div class="tab-text bottom-child margin">
                        测试用例
                      </div>
                    </div>
                  </template>
                  <a-tabs default-active-key="1" trigger="hover" style="color: black">
                    <!-- 利用 v-for 遍历 question.inputExample 数组 -->
                    <a-tab-pane
                        v-for="(example, index) in question.inputExample"
                        :key="(index + 1).toString()"
                        :title="'用例' + (index + 1)"
                    >
                      <div class="scrollable-content">
                        <div >输入样例:
                          <MdPreview :id="id" :modelValue="example"/>
                        </div>
                        <div>输出样例:
                          <MdPreview :id="id" :modelValue="question.outputExample[index]"/>
                        </div>
                      </div>

                    </a-tab-pane>
                  </a-tabs>
                </a-tab-pane>
                <a-tab-pane key="2">
                  <template #title>
                    <div class="tab-button x-center">
                      <div class="svg-div bottom-child margin">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="terminal"
                             class="svg-inline--fa fa-terminal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor"
                                d="M6.3 72.2c-9-9.8-8.3-24.9 1.4-33.9s24.9-8.3 33.9 1.4l184 200c8.5 9.2 8.5 23.3 0 32.5l-184 200c-9 9.8-24.2 10.4-33.9 1.4s-10.4-24.2-1.4-33.9L175.4 256 6.3 72.2zM248 432H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                        </svg>
                      </div>
                      <div class="tab-text bottom-child margin">
                        测试结果
                      </div>
                    </div>
                  </template>
                  <a-tabs default-active-key="1" trigger='hover'>
                    <a-tab-pane key="1" title="Tab 1"> Content of Tab Panel 1</a-tab-pane>
                  </a-tabs>
                </a-tab-pane>
                <a-tab-pane key="3">
                  <template #title>
                    <div class="tab-button x-center">
                      <div class="svg-div bottom-child margin">
                        <svg t="1740399961462" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             p-id="9407">
                          <path
                              d="M565.66 961.83c-2.32 0-4.67-0.14-7.03-0.43-25.17-3.06-44.94-21.91-49.19-46.91l-56.35-331.34-331.34-56.35c-25-4.25-43.85-24.02-46.9-49.19-3.06-25.17 10.52-48.88 33.77-58.99L876.73 84.7l13.95 32.1-13.95-32.1c21.56-9.37 46.24-4.69 62.87 11.94 16.63 16.63 21.31 41.3 11.94 62.86L617.62 927.63c-9.17 21.08-29.5 34.2-51.96 34.2zM177.03 465.21l296.98 50.51c23.78 4.04 42.47 22.74 46.52 46.52l50.51 296.98 303-697.01-697.01 303z"
                              p-id="9408" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div class="tab-text bottom-child margin">
                        提交结果
                      </div>
                    </div>
                  </template>
                  <a-tabs default-active-key="1" trigger='hover'>
                    <a-tab-pane key="1" title="Tab 1"> Content of Tab Panel 1</a-tab-pane>
                    <a-tab-pane key="2" title="Tab 2"> Content of Tab Panel 2</a-tab-pane>
                    <a-tab-pane key="3">
                      <template #title>Tab 3</template>
                      Content of Tab Panel 3
                    </a-tab-pane>
                  </a-tabs>
                </a-tab-pane>
              </a-tabs>
            </div>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import {onMounted, onUnmounted, reactive, ref} from 'vue';
import {Message} from "@arco-design/web-vue";
import type {Question} from "@/api/getQuestion/type.ts";
import {getQuestion} from "@/api/getQuestion";
import {MdPreview} from "md-editor-v3";
import CodeEditView from "@/views/questionViews/CodeEditView.vue";
import type {QuestionSubmitAddRequest} from "@/api/questionRun/type.ts";
import router from "@/router";

import {useRoute} from "vue-router";
import UserStatusBar from "@/components/UserStatusBar.vue";
import QuestionInteractionBar from "@/views/questionViews/QuestionInteractionBar.vue";
import QuestionView from "@/views/questionViews/QuestionView.vue";

const route = useRoute();
const handleRegisterClick = () => {
  router.push({name: 'register'});
};

const handleLoginClick = () => {
  router.push({name: 'login'});
};
let questionId: number = Number(route.params.id);
// 初始化侧边栏宽度为 400px
const siderWidth = ref(400);

// 处理侧边栏 resize 事件
const onResize = (width: number) => {
  // 允许宽度调整到 0
  siderWidth.value = Math.max(0, width);
};


const likeCount = ref(10);
const commentCount = ref(5);
const collectCount = ref(3);

const handleLikeClick = () => {
  // 处理点赞点击事件，例如更新点赞数量
  console.log('点赞被点击');
};

const handleCommentClick = () => {
  // 处理评论点击事件，例如跳转到评论页面
  console.log('评论被点击');
};

const handleCollectClick = () => {
  // 处理收藏点击事件，例如更新收藏状态
  console.log('收藏被点击');
};
/////////////////////////////////////////////////
/////////////////////////////////////////////////


// 计算总高度
const totalHeight = ref(window.innerHeight - 64);
// 上半部分初始高度为总高度的 2/3
const topHeight = ref(totalHeight.value - 50);

// 标记是否正在拖动
const isDragging = ref(false);
// 鼠标按下时的初始 Y 坐标
const startY = ref(0);
// 鼠标按下时上半部分子 div 的初始高度
const startHeight = ref(0);

// 开始拖动处理函数
const startDrag = (e: MouseEvent) => {
  isDragging.value = true;
  startY.value = e.clientY;
  startHeight.value = topHeight.value;
  document.body.style.cursor = 'ns-resize';
};

// 拖动过程处理函数
const handleDrag = (e: MouseEvent) => {
  if (isDragging.value) {
    const deltaY = e.clientY - startY.value;
    const newHeight = startHeight.value + deltaY;
    // 确保高度在合理范围内（最小 50px，最大为总高度减去 50px）
    topHeight.value = Math.min(Math.max(50, newHeight), totalHeight.value - 50);
  }
};

// 结束拖动处理函数
const endDrag = () => {
  isDragging.value = false;
  document.body.style.cursor = 'default';
};

// 设置bottom高度的函数
const setBottomHeight = (height: number) => {
  topHeight.value = totalHeight.value - height;
  // 确保topHeight在合理范围内
  topHeight.value = Math.min(Math.max(50, topHeight.value), totalHeight.value - 50);
};


onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', endDrag);
});

/////////////////////////////////////////////////

// 初始化题目数据
let question = reactive<Question>({});

// 题目 ID
const id = 'preview-only';

// 生命周期钩子，在组件挂载后执行操作
onMounted(async () => {
  try {
    // 根据 ID 获取题目数据
    const res = await getQuestion(questionId);
    console.log(res);
    if(res.message === "ok") {
      Object.assign(question, res.data);
    }
    console.log(question);
    // if (res.status === 200) {
    //   const data = res.data;
    //   // 将获取到的数据合并到 question 对象中
    //   Object.assign(question, data);
    //   console.log("----------------");
    //   console.log(question);
    //   console.log("----------------");
    //   // 显示成功消息
    //   Message.success("题目加载成功");
    // } else {
    //   // 显示失败消息
    //   Message.error("题目加载失败");
    // }
  } catch (error) {
    console.error("题目加载过程中出现错误:", error);
    // 显示错误消息
    Message.error("题目加载过程中出现错误");
  }
  // 添加事件监听
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', endDrag);
});
const editorRef = ref<InstanceType<typeof CodeEditView> | null>(null);
// 代码运行部分
// 运行部分的记录保存起来
const handleRun = () => {
  if (editorRef.value) {
    let content = editorRef.value.getVal();
    let language = editorRef.value.getLanguage();
    console.log('当前编辑器内容:', content);
    console.log('当前编辑器语言:', language);
    let questionSubmitAddRequest: QuestionSubmitAddRequest = {
      questionId: 3,
      language: "java",
      code: content,
    }

    // 这里可以添加实际的运行代码逻辑，比如发送请求到后端执行代码等
  }
}
// 代码提交部分
const handleSubmit = () => {
  if (editorRef.value) {
    let content = editorRef.value.getVal();
    let language = editorRef.value.getLanguage();
    console.log('当前编辑器内容:', content);
    console.log('当前编辑器语言:', language);
    let questionSubmitAddRequest: QuestionSubmitAddRequest = {
      questionId: 3,
      language: "java",
      code: content
    }
  }
}

</script>
<style scoped>
/* 设置根元素高度为视口高度 */
.main-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 设置布局容器高度为 100% */
.main-layout :deep(.arco-layout) {
  height: 100%;
}

.main-layout :deep(.arco-layout-header),
.main-layout :deep(.arco-layout-footer),
.main-layout :deep(.arco-layout-sider-children),
.main-layout :deep(.arco-layout-content) {
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  overflow: hidden;
}

.main-layout :deep(.arco-layout-header),
.main-layout :deep(.arco-layout-footer) {
  height: 64px;
  /*  background-color: var(--color-primary-light-4);*/
}

.main-layout :deep(.arco-layout-sider.custom-sider) {
  /* background-color: var(--color-primary-light-3);*/
  height: calc(100vh - 64px); /* 计算侧边栏高度，减去头部高度 */
  position: relative; /* 为了让绝对定位的元素相对于侧边栏定位 */
}

/* 给 question-view 的包裹层添加内边距，预留底部 div 的空间 */
.sider-content-wrapper {
  padding-bottom: 40px;
}

.sider-bottom-div {
  position: absolute;
  height: 40px;
  width: 100%;
  background-color: rgb(224, 224, 224);
  bottom: 0;
  display: flex;
  justify-content: space-around; /* 使三个 div 均匀分布 */
  align-items: center; /* 垂直居中 */
}

.main-layout :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}


.parent {
  width: 100%;
  height: calc(100vh - 64px);
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}

.top {
  background-color: #f0f0f0;
}

.separator {
  height: 5px;
  background-color: #ccc;
  cursor: ns-resize;
}

.bottom {
  background-color: white;
  position: relative;

}

.icon-wrapper {
  position: absolute;
  left: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 999;
}


.margin {
  margin: 2px 5px;
}

.x-center {
  align-items: center;
}

.svg-div {
  width: 16px;
  height: 16px;
}

.bottom-child svg {
  color: hsl(133 98% 35%);
}


.bottom-child {
  float: left;
  box-sizing: border-box; /* 确保内边距和边框包含在宽度内 */
}

.tab-button {
  cursor: pointer;
}

.scrollable-content {
  margin: 15px;
  overflow-y: scroll;
  height: 650px;
  color: black;
}

/*flex布局*/
.flex {
  width: 100%;
  height: 100%;
  display: flex;
}

/*垂直居中*/
.y-center {
  justify-content: center;
}

.black-font {
  color: black;
}
</style>

