import api from '@/services/api';

export const teacherService = {
  getAll: () => api.get('/teacher'),
};
