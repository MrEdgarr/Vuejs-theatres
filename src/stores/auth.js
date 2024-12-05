// Utilities
import { defineStore } from "pinia";

export const authAppStore = defineStore("auth", {
  state: () => ({
    isLoading: false,
    isLoginDialogOpen: false,
    isRegisterDialogOpen: false,
  }),

  actions: {},
});
