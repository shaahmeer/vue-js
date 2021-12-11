import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "todo-list",
      layout: "main-layout",
    },
    component: () => import("@/pages/HomePage"),
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      title: "information",
      layout: "main-layout",
    },
    component: () => import("@/pages/InfoPage"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "exit",
      layout: "auth-layout",
    },
    component: () => import("@/pages/LoginPage"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: {
      title: "registration",
      layout: "auth-layout",
    },
    component: () => import("@/pages/RegistrationPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
