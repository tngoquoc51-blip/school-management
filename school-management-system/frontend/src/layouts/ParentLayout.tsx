'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function ParentLayout({ children }: Props) {
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
        <div className="min-h-screen bg-gray-50 flex">
            <aside className="w-64 bg-purple-800 text-white flex flex-col">
                <div className="p-5 border-b border-purple-700">
                    <h1 className="text-lg font-bold">Phụ huynh</h1>
                    <p className="text-sm text-purple-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/parent/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Dashboard</a>
                    <a href="/parent/children" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Chọn con</a>
                    <a href="/parent/grades" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Bảng điểm</a>
                    <a href="/parent/attendance" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Chuyên cần</a>
                    <a href="/parent/conduct" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Rèn luyện</a>
                    <a href="/parent/schedule" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Thời khóa biểu</a>
                    <a href="/parent/notifications" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Thông báo</a>
                    <a href="/parent/messages" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Nhắn tin GVCN</a>
                    <a href="/parent/fees" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Học phí</a>
                    <a href="/parent/leave" className="block px-4 py-2.5 rounded-lg hover:bg-purple-700">Xin nghỉ phép</a>
                </nav>

                <div className="p-4 border-t border-purple-700">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-purple-700 rounded-lg">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Cổng thông tin Phụ huynh</h2>
                    <span className="text-sm text-gray-500">Năm học 2025 - 2026</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}