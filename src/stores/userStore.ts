import {defineStore} from 'pinia';
import type {User} from "@/api/user/type.ts";


// 定义用户状态管理的 store
export const useUserStore = defineStore('user', {
    // 初始化 state，返回符合 User 接口的对象
    state: () => ({
        user: null as User | null
    }),
    actions: {
        // 登录操作，更新用户角色
        setUserInfo(user: User) {
            this.user = user;
        },
        // 登出操作，清空用户角色
        clearUserInfo() {
            this.user = null;
        }
    }
});