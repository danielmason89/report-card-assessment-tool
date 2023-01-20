import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddStudent from "../views/AddStudent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/parent",
    name: "Parent",
    component: () => import("../views/Parent.vue"),
  },
  {
    path: "/teacher-classlist",
    name: "TeacherClasslist",
    component: () => import("../views/teacher-classlists/TeacherClasslist.vue"),
  },
  {
    path: "/teacher-classlist/:id",
    name: "TeacherClasslistDetails",
    component: () =>
      import("../views/teacher-classlists/TeacherClasslistDetail.vue"),
    props: true,
  },
  {
    path: "/teacher-classlist/:id",
    name: "UpdateStudent",
    component: () => import("../views/UpdateStudent.vue"),
    props: true,
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
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
