// import type {RouteRecordRaw} from 'vue-router';
//
// // 定义所有可能的路由
// const routes: RouteRecordRaw[] = [
//     {
//         path: '/login',
//         name: 'Login',
//         component: () => import('@/views/user/normal/UserLoginView.vue')
//     },
//     {
//         path: '/admin',
//         name: 'AdminDashboard',
//         component: () => import('@/views/user/admin/AdminDashboard.vue'),
//         children: [
//             // {
//             //     path: 'create-student',
//             //     name: 'TeacherCreateStudent',
//             //     component: () => import('@/views/CreateStudent.vue')
//             // }
//         ]
//     },
//     {
//         path: '/normal',
//         name: 'NormalDashboard',
//         component: () => import('@/views/user/normal/NormalDashboard.vue'),
//         children: [
//             // {
//             //     path: 'create-student',
//             //     name: 'TeacherCreateStudent',
//             //     component: () => import('@/views/CreateStudent.vue')
//             // }
//         ]
//     }
// ];
//
// // 根据用户角色生成动态路由
// export function generateRoutes(role: string): RouteRecordRaw[] {
//     const baseRoutes: RouteRecordRaw[] = [
//         // {
//         //     path: '/',
//         //     redirect: '/login'
//         // },
//         {
//             path: '/login',
//             name: 'Login',
//             component: () => import('@/views/user/normal/UserLoginView.vue')
//         }, {
//             path: '/register',
//             name: 'register',
//             component: () => import('@/views/user/normal/UserRegisterView.vue')
//         }
//     ];
//
//     if (role === 'admin') {
//         return [
//             ...baseRoutes,
//             {
//                 path: '/admin',
//                 name: 'AdminDashboard',
//                 component: () => import('@/views/user/admin/AdminDashboard.vue'),
//                 children: [
//                     // {
//                     //     path: 'create-teacher',
//                     //     name: 'CreateTeacher',
//                     //     component: () => import('@/views/CreateTeacher.vue')
//                     // },
//                     // {
//                     //     path: 'create-student',
//                     //     name: 'CreateStudent',
//                     //     component: () => import('@/views/CreateStudent.vue')
//                     // }
//                 ]
//             }
//         ];
//     }
//     return baseRoutes;
// }
//
// export default routes;