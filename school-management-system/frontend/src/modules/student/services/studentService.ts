import api from '@/services/api';

export const studentService = {
  getAll: () => api.get('/student'),
};
