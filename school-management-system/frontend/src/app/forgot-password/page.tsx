'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Gọi API quên mật khẩu
        setSent(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-2">Quên mật khẩu</h1>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Nhập email hoặc mã định danh để nhận liên kết đặt lại mật khẩu
                </p>

                {sent ? (
                    <div className="text-center space-y-4">
                        <p className="text-green-600">Đã gửi hướng dẫn đặt lại mật khẩu đến email của bạn.</p>
                        <Link href="/login" className="text-blue-600 hover:underline text-sm">
                            Quay lại đăng nhập
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email / Mã định danh</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                            Gửi yêu cầu
                        </button>
                        <div className="text-center">
                            <Link href="/login" className="text-sm text-blue-600 hover:underline">
                                Quay lại đăng nhập
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}