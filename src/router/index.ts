import {createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized} from 'vue-router'
import CodeEditView from "@/views/questionViews/CodeEditView.vue";
import TabBottomView from "@/views/questionViews/TabBottomView.vue";
import TabTopView from "@/views/questionViews/TabTopView.vue";
import UserLoginView from "@/views/user/normal/UserLoginView.vue";
import UserRegisterView from "@/views/user/normal/UserRegisterView.vue";
// import {generateRoutes} from "@/router/routes.ts";
import {useUserStore} from "@/stores/userStore.ts";
import AvatarView from "@/components/AvatarView.vue";
import MainView from "@/views/MainView.vue";
import HomeView from "@/views/HomeView.vue";
import CalendarView from "@/views/CalendarView.vue";
import QuestionMainView from "@/views/questionViews/QuestionMainView.vue";
import DiscussPreview from "@/components/DiscussPreview.vue";
import TestView from "@/components/TestView.vue";
import MdEditView from "@/views/questionViews/MdEditView.vue";
import TestSpecialColumnPreview from "@/components/TestSpecialColumnPreview.vue";
import TestQuestionPreview from "@/components/TestQuestionPreview.vue";
import QuestionPreview from "@/components/QuestionPreview.vue";
import QuestionListPreview from "@/views/questionViews/QuestionListPreview.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'mainView',
            component: MainView,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: HomeView
                }, {
                    path: 'questionList',
                    name: 'questionList',
                    component: QuestionListPreview
                }, {
                    path: 'articleEdit',
                    name: 'articleEdit',
                    component: MdEditView
                }
            ]
        }, {
            path: '/tabBottom',
            name: 'tabBottom',
            component: TabBottomView
        },
        {
            path: '/tabTop',
            name: 'tabTop',
            component: TabTopView
        },
        {
            path: '/question/:id',
            name: 'question',
            component: QuestionMainView
        },
        {
            path: '/codeEdit',
            name: 'codeEdit',
            component: CodeEditView
        }, {
            path: '/login',
            name: 'login',
            component: UserLoginView
        }, {
            path: '/register',
            name: 'register',
            component: UserRegisterView
        }, {
            path: '/avatar',
            name: 'avatar',
            component: AvatarView
        }, {
            path: '/calendar',
            name: 'calendar',
            component: CalendarView
        }, {
            path: '/discuss',
            name: 'discuss',
            component: DiscussPreview
        }, {
            path: '/test',
            name: 'test',
            component: TestView
        }, {
            path: '/testSc',
            name: 'testSc',
            component: TestSpecialColumnPreview
        }, {
            path: '/testQuestion',
            name: 'testQuestion',
            component: TestQuestionPreview
        }
    ],
})

// 导航守卫，根据用户角色动态生成路由
// router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//     const userStore = useUserStore();
//     const role = userStore.userRole;
//
//     if (role) {
//         const newRoutes = generateRoutes(role);
//         newRoutes.forEach(route => {
//             if (!router.hasRoute(route.name as string)) {
//                 router.addRoute(route);
//             }
//         });
//         next({ ...to, replace: true });
//     } else {
//         if (to.name === 'Login') {
//             next();
//         } else {
//             next({ name: 'Login' });
//         }
//     }
// });
export default router
