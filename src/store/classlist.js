import axios from "axios";
import {
  ADD_TEACHER_CLASSLIST,
  DELETE_TEACHER_CLASSLIST,
  GET_TEACHER_CLASSLIST,
  UPDATE_TEACHER_CLASSLIST,
} from "./mutation-types";

const classlist = {
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
      state.teacherClasslist = [
        ...state.teacherClasslist.filter(
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
    async getTeacherClasslist({ commit }) {
      try {
        const response = await axios.get("api/classlist");
        commit(GET_TEACHER_CLASSLIST, response.data);
      } catch (error) {
        console.error("Failed to get teacher classlist:", error);
        // Handle error appropriately
      }
    },
    async addTeacherClasslist({ commit }, teacherClasslist) {
      try {
        const response = await axios.post("api/classlist", teacherClasslist);
        commit(ADD_TEACHER_CLASSLIST, response.data);
      } catch (error) {
        console.error("Failed to add teacher classlist:", error);
        // Handle error appropriately
      }
    },
    async deleteTeacherClasslist({ commit }, id) {
      try {
        await axios.delete(`api/classlist/${id}`);
        commit(DELETE_TEACHER_CLASSLIST, id);
      } catch (error) {
        console.error("Failed to delete teacher classlist:", error);
        // Handle error appropriately
      }
    },
    async updateTeacherClasslist({ commit }, updatedClasslist) {
      try {
        const response = await axios.put(
          `api/classlist/${updatedClasslist.id}`,
          updatedClasslist
        );
        commit(UPDATE_TEACHER_CLASSLIST, response.data);
      } catch (error) {
        console.error("Failed to update teacher classlist:", error);
        // Handle error appropriately
      }
    },
  },
};

export default classlist;
