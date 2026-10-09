import api from '@/services/api';
import { useAuthStore } from '@/store/authStore';

export function useAuth() {
  const setAuth = useAuthStore((s) => s.setAuth);

  const login = async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password });
    const token = res.data.data.access_token;
    localStorage.setItem('token', token);
    setAuth(null, token);
  };

  return { login };
}
