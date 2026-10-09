'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function StudentLayout({ children }: Props) {
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
            <aside className="w-64 bg-sky-800 text-white flex flex-col">
                <div className="p-5 border-b border-sky-700">
                    <h1 className="text-lg font-bold">Học sinh</h1>
                    <p className="text-sm text-sky-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/student/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Dashboard</a>
                    <a href="/student/schedule" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Thời khóa biểu</a>
                    <a href="/student/grades" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Bảng điểm</a>
                    <a href="/student/attendance" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Chuyên cần</a>
                    <a href="/student/exams" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Lịch thi</a>
                    <a href="/student/homework" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Bài tập</a>
                    <a href="/student/notifications" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Thông báo</a>
                    <a href="/student/profile" className="block px-4 py-2.5 rounded-lg hover:bg-sky-700">Thông tin cá nhân</a>
                </nav>

                <div className="p-4 border-t border-sky-700">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-sky-700 rounded-lg">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Cổng thông tin Học sinh</h2>
                    <span className="text-sm text-gray-500">Năm học 2025 - 2026</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}