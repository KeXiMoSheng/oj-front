<script setup lang="ts">

</script>
<template>
  <a-tabs>
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
      Content of Tab Panel 1
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
            测试用例
          </div>
        </div>
      </template>
      Content of Tab Panel 2
    </a-tab-pane>
  </a-tabs>

</template>

<style scoped lang="css">
.margin {
  margin: 5px 5px;
}

.x-center {
  display: flex;
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
</style>