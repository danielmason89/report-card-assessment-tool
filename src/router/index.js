import { createRouter, createWebHistory } from "vue-router";
import AddStudent from "../views/AddStudent.vue";
import store from "../store"; // Replace this with your actual authentication method or store

const requireAuth = (to, from, next) => {
  if (store.getters["isAuthenticated"]) {
    next();
  } else {
    next({ name: "Home" });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      permission: "any",
      fail: "/error",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      permission: "any",
      fail: "/error",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      permission: "any",
      fail: "/error",
    },
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
    meta: {
      permission: "any",
      fail: "/error",
    },
  },
  {
    path: "/parent",
    name: "Parent",
    component: () => import("@/views/Parent.vue"),
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
  },
  {
    path: "/teacher-classlist",
    name: "TeacherClasslist",
    component: () => import("@/views/teacher-classlists/TeacherClasslist.vue"),
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
  },
  {
    path: "/teacher-classlist/:id(\\d+)",
    name: "TeacherClasslistDetails",
    component: () =>
      import("@/views/teacher-classlists/TeacherClasslistDetail.vue"),
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
    props: true,
  },
  {
    path: "/teacher-classlist/:id(\\d+)",
    name: "UpdateStudent",
    component: () => import("@/views/UpdateStudent.vue"),
    props: true,
    beforeEnter: (to, from, next) => {
      requireAuth;
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: "/all-teacher-classlist",
    redirect: "/teacher-classlist",
  },
  {
    path: "/add",
    name: "AddStudent",
    component: AddStudent,
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
