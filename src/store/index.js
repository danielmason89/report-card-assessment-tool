import axios from "axios";
import { createStore } from "vuex";
import {
  ADD_TEACHER_CLASSLIST,
  DELETE_TEACHER_CLASSLIST,
  GET_TEACHER_CLASSLIST,
  UPDATE_TEACHER_CLASSLIST,
} from "./mutation-types";

export default createStore({
  namespaced: true,
  strict: process.env.NODE_ENV === "production",
  state: {
    teacherClasslist: [],
    studentId: null,
    mark: null,
    grade: null,
    gender: null,
    subject: null,
  },
  getters: {
    getTeacherClasslistById: (state) => (id) => {
      return state.teacherClasslist.find(
        (teacherClasslist) => teacherClasslist.id === id
      );
    },
  },
  mutations: {
    [GET_TEACHER_CLASSLIST](state, teacherClasslist) {
      state.teacherClasslist = teacherClasslist;
    },
    [ADD_TEACHER_CLASSLIST](state, teacherClasslist) {
      state.teacherClasslist.push(teacherClasslist);
    },
    [DELETE_TEACHER_CLASSLIST](state, teacherClasslist) {
      state.teacherClasslists = [
        ...state.teacherClasslists.filter(
          (classList) => classList.id !== teacherClasslist.id
        ),
      ];
    },
    [UPDATE_TEACHER_CLASSLIST](state, teacherClasslist) {
      const index = state.teacherClasslist.findIndex(
        (teacherClasslist) => teacherClasslist.id === id
      );
      state.teacherClasslist.splice(index, 1, teacherClasslist);
      state.teacherClasslist = [...state.teacherClasslist];
    },
  },
  actions: {
    async getTeacherClasslistAction({ commit }) {
      const teacherClasslist = await axios.get(
        "http://localhost:3000/teacherClasslist"
      );
      commit([GET_TEACHER_CLASSLIST], teacherClasslist);
    },
    async addTeacherClasslistAction({ commit }, teacherClasslist) {
      const addStudent = await fetch("http://localhost:3000/teacherClasslist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teacherClasslist),
      });
      commit([ADD_TEACHER_CLASSLIST], addStudent);
    },
    async deleteTeacherClasslistAction({ commit }, teacherClasslist) {
      const deleteStudentId = await fetch(
        "http://localhost:3000/teacherClasslist",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(teacherClasslist),
        }
      );
      commit([DELETE_TEACHER_CLASSLIST], deleteStudentId);
    },
    async updateTeacherClasslistAction({ commit }, teacherClasslist) {
      const updateStudent = await fetch(
        "http://localhost:3000/teacherClasslist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(teacherClasslist),
        }
      );
      commit([UPDATE_TEACHER_CLASSLIST], updateStudent);
    },
  },
  modules: {
    // teacher: teacherModule,
    // parent: parentModule,
  },
});
