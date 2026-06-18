import { create } from 'zustand';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  isLoading: true,

  initializeAuth: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ isLoading: false });
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      set({ 
        user: { 
          id: payload.id, 
          username: payload.username, 
          role: payload.role 
        }, 
        token,
        isLoading: false 
      });
    } catch (err) {
      localStorage.removeItem('token');
      set({ user: null, token: null, isLoading: false });
      console.log(err)
    }
  },

  login: async (email, password) => {
    const res = await axios.post(`${API}/auth/login`, { email, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    set({ user, token, isLoading: false });
    return user;
  },

  register: async (username, email, password) => {
    const res = await axios.post(`${API}/auth/register`, { username, email, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    set({ user, token, isLoading: false });
    return user;
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, isLoading: false });
  },
}));