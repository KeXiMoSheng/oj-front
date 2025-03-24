import { defineStore } from 'pinia';

// 定义 User 接口
export interface User {
    id: number;
    userEmail: string;
    userName: string;
    userAvatar: string;
    userRole: string;
    userToken: string;
    createTime?: Date;
}

// 定义用户状态管理的 store
export const useUserStore = defineStore('user', {
    // 初始化 state，返回符合 User 接口的对象
    state: (): User => ({
        id: 0,
        userEmail: '',
        userName: '',
        userAvatar: '',
        userRole: '',
        userToken: ''
    }),
    actions: {
        // 登录操作，更新用户角色
        login(role: string) {
            this.userRole = role;
        },
        // 登出操作，清空用户角色
        logout() {
            this.userRole = '';
        }
    }
});