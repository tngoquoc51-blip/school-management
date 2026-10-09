import api from '@/services/api';

export const adminService = {
  getAll: () => api.get('/admin'),
};
