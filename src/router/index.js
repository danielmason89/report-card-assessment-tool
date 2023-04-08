import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddStudent from "../views/AddStudent.vue";
import { isAuthenticated } from "../store/auth"; // Replace this with your actual authentication method or store

const requireAuth = (to, from, next) => {
  if (!isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      permission: "any",
      fail: "/error",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
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
    path: "/assessment",
    name: "Assessment",
    component: () => import("@/views/Assessment.vue"),
    beforeEnter: requireAuth,
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
    beforeEnter: requireAuth,
  },
  {
    path: "/teacher-classlist",
    name: "TeacherClasslist",
    component: () => import("@/views/teacher-classlists/TeacherClasslist.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/teacher-classlist/:id(\\d+)",
    name: "TeacherClasslistDetails",
    component: () =>
      import("@/views/teacher-classlists/TeacherClasslistDetail.vue"),
    beforeEnter: requireAuth,
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
    beforeEnter: requireAuth,
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
