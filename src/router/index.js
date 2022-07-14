import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout";
import User from "@/views/user";
const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "HomePage",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "hall",
        name: "HallPage",
        component: () => import("@/views/home/Hall"),
      },
      {
        path: "level",
        name: "LevelPage",
        component: () => import("@/views/home/Level"),
      },
      {
        path: "task",
        name: "TaskPage",
        component: () => import("@/views/home/Task"),
      },
      {
        path: "my",
        name: "MyPage",
        component: () => import("@/views/home/My"),
      },
    ],
  },
  {
    path: "/article",
    name: "Article",
    component: () => import("@/views/article"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/register"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/chat"),
  },
  {
    path: "/share",
    name: "Share",
    component: () => import("@/views/share"),
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/views/help"),
  },
  {
    path: "/task-list",
    name: "TaskList",
    component: () => import("@/views/task-list"),
  },
  {
    path: "/vip-pay",
    name: "VipPay",
    component: () => import("@/views/vip-pay"),
  },
  {
    path: "/vip-usdt",
    name: "VipUsdt",
    component: () => import("@/views/vip-usdt"),
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("@/views/notice"),
  },
  {
    path: "/task-detail",
    name: "TaskDetail",
    component: () => import("@/views/task-detail"),
  },
  {
    path: "/my-wallet",
    name: "MyWallet",
    component: () => import("@/views/wallet"),
  },
  {
    path: "/user",
    name: "userInfo",
    redirect: "/user/info",
    component: User,
    children: [
      {
        path: "info",
        name: "Info",
        component: () => import("@/views/user/info"),
      },
      {
        path: "report",
        name: "Report",
        component: () => import("@/views/user/report"),
      },
      {
        path: "set-bank",
        name: "SetBank",
        component: () => import("@/views/user/set/bank"),
      },
      {
        path: "set-usdt",
        name: "SetUSDT",
        component: () => import("@/views/user/set/usdt"),
      },
      {
        path: "record",
        name: "record",
        component: () => import("@/views/user/record"),
      },
      {
        path: "team",
        name: "Team",
        component: () => import("@/views/user/team"),
      },
      {
        path: "credit",
        name: "credit",
        component: () => import("@/views/user/credit"),
      },
    ],
  },
  // {
  //   path: '/infoUser',
  //   name: 'InfoUser',
  //   // 独享路由守卫
  //   beforeEnter: (to, from, next) => {
  //     // pinia要在这里定义
  //     const store = FooterMusicStore()
  //     if (store.isLogin || store.token || localStorage.getItem('token')) {
  //       next()
  //     } else {
  //       next('/login')
  //     }
  //   },
  //   component: () => import('../views/InfoUser.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
