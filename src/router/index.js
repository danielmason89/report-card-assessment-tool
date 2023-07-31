import { createRouter, createWebHistory } from "vue-router";
import AddStudent from "../views/AddStudent.vue";
import { useLoginStore } from "@/store/loginStore";

const requireAuth = (to, from, next) => {
  const store = useLoginStore();
  if (store.loggedIn) {
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
    path: "/quiz",
    name: "Quiz",
    component: () => import("@/views/Quiz.vue"),
    meta: {
      permission: "any",
      fail: "/error",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login.vue"),
    fail: "/error",
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
    fail: "/error",
  },
  {
    path: "/teacher-classlist",
    name: "TeacherClasslist",
    component: () => import("@/views/teacher-classlists/TeacherClasslist.vue"),
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
    fail: "/error",
  },
  {
    path: "/teacher-classlist/:id(\\d+)",
    name: "TeacherClasslistDetails",
    component: () =>
      import("@/views/teacher-classlists/TeacherClasslistDetail.vue"),
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
    props: true,
    fail: "/error",
  },
  {
    path: "/update-student/:id(\\d+)",
    name: "UpdateStudent",
    component: () => import("@/views/UpdateStudent.vue"),
    props: true,
    beforeEnter: (to, from, next) => {
      requireAuth(to, from, () => {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      });
    },
    fail: "/error",
  },
  {
    path: "/all-teacher-classlist",
    redirect: "/teacher-classlist",
    fail: "/error",
  },
  {
    path: "/add-student",
    name: "AddStudent",
    component: AddStudent,
    beforeEnter: (to, from, next) => requireAuth(to, from, next),
    fail: "/error",
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
    fail: "/error",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
