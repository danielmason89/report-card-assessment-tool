import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddStudent from "../views/AddStudent.vue";

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
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/assessment",
    name: "Assessment",
    component: () => import("@/views/Assessment.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/parent",
    name: "Parent",
    component: () => import("@/views/Parent.vue"),
  },
  {
    path: "/teacher-classlist",
    name: "TeacherClasslist",
    component: () => import("@/views/teacher-classlists/TeacherClasslist.vue"),
  },
  {
    path: "/teacher-classlist/:id",
    name: "TeacherClasslistDetails",
    component: () =>
      import("@/views/teacher-classlists/TeacherClasslistDetail.vue"),
    props: true,
  },
  {
    path: "/teacher-classlist/:id",
    name: "UpdateStudent",
    component: () => import("@/views/UpdateStudent.vue"),
    props: true,
    beforeEnter: (to, from, next) => {
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
