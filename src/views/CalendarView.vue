<template>
  <div class="calendar">
    <div class="header">
      <span>{{ year }} - {{ month + 1 }}</span> <!-- 注意这里加1来显示正确的月份 -->
      <button @click="prevMonth">上一月</button>
      <button @click="nextMonth">下一月</button>
    </div>
    <table>
      <thead>
      <tr>
        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(week, weekIndex) in weeks" :key="weekIndex">
        <td
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :class="{ 'today': isToday(day), 'active': isActive(day) }"
        >
          {{ day.day }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 星期几的英文缩写
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// 当前日期
const currentDate = new Date();
const year = ref(currentDate.getFullYear());
const month = ref(currentDate.getMonth());

// 计算每月的周数和每天的信息
const weeks = computed(() => {
  const firstDay = new Date(year.value, month.value, 1);
  const lastDay = new Date(year.value, month.value + 1, 0);
  const weeks = [];
  let currentWeek = [];
  let day = new Date(year.value, month.value, 1 - firstDay.getDay());
  while (day <= lastDay) {
    currentWeek.push({
      day: day.getDate(),
      date: new Date(day)
    });
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    day.setDate(day.getDate() + 1);
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
});

// 判断是否是今天
const isToday = (dayObj) => {
  const today = new Date();
  return (
      dayObj.date.getFullYear() === today.getFullYear() &&
      dayObj.date.getMonth() === today.getMonth() &&
      dayObj.date.getDate() === today.getDate()
  );
};

// 判断是否是当前选中的日期
const selectedDate = ref(null);
const isActive = (dayObj) => {
  return selectedDate.value &&
      dayObj.date.getFullYear() === selectedDate.value.getFullYear() &&
      dayObj.date.getMonth() === selectedDate.value.getMonth() &&
      dayObj.date.getDate() === selectedDate.value.getDate();
};



// 上一月
const prevMonth = () => {
  if (month.value === 0) {
    year.value--;
    month.value = 11;
  } else {
    month.value--;
  }
};

// 下一月
const nextMonth = () => {
  if (month.value === 11) {
    year.value++;
    month.value = 0;
  } else {
    month.value++;
  }
};
</script>

<style scoped>
/* 重置浏览器默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.calendar {
  width: 224px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  font-size: 12px; /* 适当调整字体大小 */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse; /* 合并边框 */
  color: #3c3c4399;
}

th,
td {
  text-align: center;
  padding: 0;
  width: 32px; /* 设置宽度为32px */
  height: 32px; /* 设置高度为32px */
  line-height: 32px; /* 确保文本垂直居中 */
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  border: 0; /* 将边框宽度设为0 */
}

th {
  color: #3c3c434d;
}

.today {
  background-color: #2DB55D;
  border-radius: 50%;
}

.active {
  background-color: #2DB55D;
  border-radius: 50%;
  color: white;
}

/* 鼠标悬停效果 */
td:hover {
  background-color: #000a200d;
  border-radius: 50%;
}
</style>