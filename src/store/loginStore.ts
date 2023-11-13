import { defineStore } from "pinia";

interface User {
  name: string;
}

interface LoginState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useLoginStore = defineStore("login", {
  state: (): LoginState => ({
    user: null,
    isAuthenticated: false,
  }),
  getters: {
    currentUser(state: LoginState): User | null {
      return state.user;
    },
    loggedIn(state: LoginState): boolean {
      return state.isAuthenticated;
    },
    username(state: LoginState): string {
      return state.user ? state.user.name : "";
    },
  },
  actions: {
    async SET_USER(user: User): Promise<void> {
      this.user = user;
      this.isAuthenticated = true;
    },
    async REMOVE_USER(): Promise<void> {
      this.user = null;
      this.isAuthenticated = false;
    },
    async SET_LOGIN_STATE(isAuthenticated: boolean): Promise<void> {
      this.isAuthenticated = isAuthenticated;
    },
    async loginAction(user: User): Promise<void> {
      await this.SET_USER(user);
    },
    async logoutAction(): Promise<void> {
      await this.REMOVE_USER();
    },
  },
});

export default useLoginStore;
