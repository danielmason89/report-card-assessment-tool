import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  namespaced: true,
  strict: import.meta.NODE_ENV === "production",
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  getters: {
    currentUser(state) {
      return state.user;
    },
    loggedIn(state) {
      return state.isAuthenticated;
    },
    username(state) {
      return state.user ? state.user.name : "";
    },
  },
  actions: {
    SET_USER(user) {
      this.$state.user = user;
      this.$state.isAuthenticated = true;
    },
    REMOVE_USER() {
      this.$state.user = null;
      this.$state.isAuthenticated = false;
    },
    SET_LOGIN_STATE(state) {
      this.$state.isAuthenticated = state;
    },
    loginAction(user) {
      this.SET_USER(user);
    },
    logoutAction() {
      this.REMOVE_USER(user);
    },
  },
});

export default useLoginStore;
