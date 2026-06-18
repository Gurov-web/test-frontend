import { create } from 'zustand';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const useTestStore = create((set, get) => ({
  tests: [],
  currentTest: null,
  userResults: [],
  loading: false,

  fetchTests: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(`${API}/tests`);
      set({ tests: res.data, loading: false });
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },

  fetchTestById: async (id) => {
    try {
      const res = await axios.get(`${API}/tests/${id}`);
      set({ currentTest: res.data });
    } catch (err) {
      console.error(err);
    }
  },

  submitTest: async (testId, answers) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${API}/tests/${testId}/submit`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      await get().fetchUserResults();

      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  fetchUserResults: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await axios.get(`${API}/tests/my-results`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      set({ userResults: res.data });
    } catch (err) {
      console.error('Ошибка загрузки результатов:', err);
    }
  },
}));