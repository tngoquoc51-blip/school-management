'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChangePasswordPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        current_password: '',
        new_password: '',
        confirm_password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.new_password !== form.confirm_password) {
            alert('Mật khẩu xác nhận không khớp');
            return;
        }
        // TODO: Gọi API đổi mật khẩu
        alert('Đổi mật khẩu thành công');
        router.back();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Đổi mật khẩu</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Mật khẩu hiện tại</label>
                        <input
                            type="password"
                            value={form.current_password}
                            onChange={(e) => setForm({ ...form, current_password: e.target.value })}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mật khẩu mới</label>
                        <input
                            type="password"
                            value={form.new_password}
                            onChange={(e) => setForm({ ...form, new_password: e.target.value })}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Xác nhận mật khẩu mới</label>
                        <input
                            type="password"
                            value={form.confirm_password}
                            onChange={(e) => setForm({ ...form, confirm_password: e.target.value })}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                        Đổi mật khẩu
                    </button>
                </form>
            </div>
        </div>
    );
}