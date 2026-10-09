'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (stored) setUser(JSON.parse(stored));
        else router.push('/login');
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-5 border-b border-gray-700">
                    <h1 className="text-lg font-bold">Quản trị hệ thống</h1>
                    <p className="text-sm text-gray-300 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/admin/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Dashboard</a>
                    <a href="/admin/users" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Quản lý tài khoản</a>
                    <a href="/admin/roles" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Vai trò & Phân quyền</a>
                    <a href="/admin/school-year" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Năm học - Học kỳ</a>
                    <a href="/admin/categories" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Danh mục hệ thống</a>
                    <a href="/admin/logs" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Nhật ký hệ thống</a>
                    <a href="/admin/backup" className="block px-4 py-2.5 rounded-lg hover:bg-gray-800">Sao lưu & Phục hồi</a>
                </nav>

                <div className="p-4 border-t border-gray-700">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 rounded-lg">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Quản trị hệ thống</h2>
                    <span className="text-sm text-gray-500">Super Admin</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}