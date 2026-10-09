'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function BGHLayout({ children }: Props) {
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
            <aside className="w-64 bg-indigo-900 text-white flex flex-col">
                <div className="p-5 border-b border-indigo-700">
                    <h1 className="text-lg font-bold">Ban Giám hiệu</h1>
                    <p className="text-sm text-indigo-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/bgh/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Dashboard</a>
                    <a href="/bgh/overview" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Tổng quan toàn trường</a>
                    <a href="/bgh/approval" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Phê duyệt</a>
                    <a href="/bgh/teaching-assignment" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Phân công giảng dạy</a>
                    <a href="/bgh/schedule" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Thời khóa biểu</a>
                    <a href="/bgh/lesson-plans" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Duyệt giáo án</a>
                    <a href="/bgh/observation" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Dự giờ</a>
                    <a href="/bgh/reports" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Báo cáo thống kê</a>
                    <a href="/bgh/staff" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Hồ sơ cán bộ</a>
                    <a href="/bgh/notifications" className="block px-4 py-2.5 rounded-lg hover:bg-indigo-800">Thông báo</a>
                </nav>

                <div className="p-4 border-t border-indigo-700">
                    <button onClick={() => router.push('/select-role')} className="w-full text-left px-4 py-2 text-sm hover:bg-indigo-800 rounded-lg">
                        Đổi vai trò
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-indigo-800 rounded-lg mt-1">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Ban Giám hiệu</h2>
                    <span className="text-sm text-gray-500">Năm học 2025 - 2026 | Học kỳ 1</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}