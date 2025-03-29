export interface UserRegisterRequest {
    userName: string;
    userEmail: string;
    userPassword: string;
    checkPassword: string;
    code: string;
}

export interface User {
    /**
     * id
     */
    id?: number;

    /**
     * 用户昵称
     */
    userName?: string;
    /**
     * 用户邮箱
     */
    userEmail?: string;

    /**
     * 用户头像
     */
    userAvatar?: string;

    /**
     * 用户简介
     */
    userProfile?: string;

    /**
     * 用户角色：user/admin/ban
     */
    userRole?: string;

    /**
     * 创建时间
     */
    createTime?: Date;
    /**
     * 更新时间
     */
    updateTime?: Date;
    /**
     * token
     */
    token?: string;
    /**
     * 登录状态
     */
    isLoggedIn?: boolean;
}

export interface UserLoginRequest {
    userEmail: string;
    userPassword: string;
}

