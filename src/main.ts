import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import ArcoVue, {Message} from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue'
import router from './router'
import {getUserLoginDetail} from "@/api/user";
import {useUserStore} from "@/stores/userStore.ts";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ArcoVue)
const userUserStore = useUserStore();
const globalInit = async () => {
    let token = localStorage.getItem('token');
    if (token == null) {
        Message.error('请先登录');
        return;
    }
    let res = await getUserLoginDetail();
    console.log("检验登录");
    if (res.message === 'ok') {
        userUserStore.setUserInfo(res.data);
        console.log(userUserStore.user)
    }
}
await globalInit();
app.mount('#app')