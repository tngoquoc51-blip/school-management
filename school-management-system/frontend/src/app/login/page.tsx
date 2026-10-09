'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await api.post('/auth/login', { email, password });
            const { token, user, roles } = res.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('roles', JSON.stringify(roles));

            // Nếu chỉ có 1 vai trò → vào thẳng
            if (roles.length === 1) {
                redirectByRole(roles[0]);
            } else {
                // Có nhiều vai trò → cho chọn
                router.push('/select-role');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Đăng nhập thất bại');
        } finally {
            setLoading(false);
        }
    };

    const redirectByRole = (role: string) => {
        const map: Record<string, string> = {
            super_admin: '/admin/dashboard',
            principal: '/bgh/dashboard',
            vice_principal: '/bgh/dashboard',
            teacher: '/teacher/dashboard',
            homeroom_teacher: '/homeroom/dashboard',
            academic: '/academic/dashboard',
            student: '/student/dashboard',
            parent: '/parent/dashboard',
        };
        router.push(map[role] || '/');
    };

    return (
        <div className="min-h-screen flex">
            {/* Bên trái - Hình ảnh / Branding */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-800 to-indigo-900 text-white flex-col justify-center items-center p-12">
                <div className="max-w-md text-center">
                    <h1 className="text-4xl font-bold mb-4">Hệ thống Quản lý Trường THPT</h1>
                    <p className="text-lg opacity-90">
                        Quản lý toàn diện hoạt động dạy và học – Kết nối nhà trường, giáo viên, học sinh và phụ huynh
                    </p>
                </div>
            </div>

            {/* Bên phải - Form đăng nhập */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Đăng nhập</h2>
                        <p className="text-gray-500 mt-2">Vui lòng đăng nhập để tiếp tục</p>
                    </div>

                    <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email hoặc Mã định danh</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Nhập email hoặc mã GV/HS"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded" />
                                <span>Ghi nhớ đăng nhập</span>
                            </label>
                            <a href="/forgot-password" className="text-blue-600 hover:underline">
                                Quên mật khẩu?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
                        >
                            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Hệ thống quản lý trường Trung học Phổ thông
                    </p>
                </div>
            </div>
        </div>
    );
}