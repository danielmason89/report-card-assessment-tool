import { createStore } from "vuex";
import classlist from "./classlist";

export default createStore({
  namespaced: true,
  strict: import.meta.NODE_ENV === "production",
  state: {
    user: null,
    isAuthenticated: false,
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    REMOVE_USER(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    loginAction({ commit, state }, user) {
      commit("SET_USER", user);
      // Set isAuthenticated to true after successful login
    },
    logoutAction({ commit, state }) {
      commit("REMOVE_USER");
      // Set isAuthenticated to true after successful logged out
    },
  },
  modules: {
    classlist,
  },
});
