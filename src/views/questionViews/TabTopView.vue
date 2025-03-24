<script setup lang="ts">

</script>

<template>
  <div style="display: flex;align-content: center; justify-content: center;color: #282828">
    <div class="tab-button x-center" style="float: left;">
      <div class="svg-div bottom-child margin x-center" style="float: left">
        <svg t="1740399892539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="7464" width="200" height="200">
          <path
              d="M228.97664 141.85472A25.6 25.6 0 0 0 225.28 155.10528v713.79456a25.6 25.6 0 0 0 38.85056 21.90336l546.51392-330.60864c26.61376-16.1024 35.13856-50.72896 19.03616-77.34272a56.32 56.32 0 0 0-19.03616-19.03616L264.13056 133.20192a25.6 25.6 0 0 0-35.15392 8.6528zM174.08 868.89984V155.10528a76.8 76.8 0 0 1 11.08992-39.75168c21.95456-36.29056 69.1712-47.91296 105.46176-25.9584l546.51392 330.61376a107.52 107.52 0 0 1 36.34688 36.34176c30.73536 50.80576 14.464 116.9152-36.34688 147.65056l-546.5088 330.61376A76.8 76.8 0 0 1 250.88 945.69984c-42.41408 0-76.8-34.3808-76.8-76.8z"
              fill="currentColor" p-id="7465"></path>
        </svg>
      </div>
      <div class="tab-text bottom-child margin">
        运行
      </div>
    </div>
    <div class="tab-button x-center" style="float: left">
      <div class="svg-div bottom-child margin x-center">
        <svg t="1740399961462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="9407" width="200" height="200">
          <path
              d="M565.66 961.83c-2.32 0-4.67-0.14-7.03-0.43-25.17-3.06-44.94-21.91-49.19-46.91l-56.35-331.34-331.34-56.35c-25-4.25-43.85-24.02-46.9-49.19-3.06-25.17 10.52-48.88 33.77-58.99L876.73 84.7l13.95 32.1-13.95-32.1c21.56-9.37 46.24-4.69 62.87 11.94 16.63 16.63 21.31 41.3 11.94 62.86L617.62 927.63c-9.17 21.08-29.5 34.2-51.96 34.2zM177.03 465.21l296.98 50.51c23.78 4.04 42.47 22.74 46.52 46.52l50.51 296.98 303-697.01-697.01 303z"
              p-id="9408" fill="currentColor"></path>
        </svg>
      </div>
      <div class="tab-text bottom-child margin">
        提交
      </div>
    </div>
  </div>
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

svg {
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