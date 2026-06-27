import { create } from "zustand";
import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "../services/auth.service";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,

  register: async (data) => {
    set({ loading: true });

    try {
      const res = await registerUser(data);

      set({ loading: false });

      return res;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  login: async (data) => {
    console.log("Store login called");
    console.log(data);
    set({ loading: true });

    try {
      const res = await loginUser(data);

      localStorage.setItem("token", res.token);

      set({
        user: res.user,
        token: res.token,
        loading: false,
      });

      return res;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  fetchUser: async () => {
    try {
      const res = await getCurrentUser();

      set({
        user: res.user,
      });
    } catch {
      localStorage.removeItem("token");
      set({
        token: null,
        user: null,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      user: null,
      token: null,
    });
  },
}));

export default useAuthStore;