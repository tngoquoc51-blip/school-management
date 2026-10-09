'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function AcademicLayout({ children }: Props) {
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
            <aside className="w-64 bg-teal-800 text-white flex flex-col">
                <div className="p-5 border-b border-teal-700">
                    <h1 className="text-lg font-bold">Giáo vụ</h1>
                    <p className="text-sm text-teal-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/academic/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Dashboard</a>
                    <a href="/academic/students" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Hồ sơ học sinh</a>
                    <a href="/academic/classes" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Quản lý lớp</a>
                    <a href="/academic/assignment" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Phân công giảng dạy</a>
                    <a href="/academic/schedule" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Thời khóa biểu</a>
                    <a href="/academic/exams" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Lịch thi</a>
                    <a href="/academic/grades" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Quản lý điểm</a>
                    <a href="/academic/promotion" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Xét lên lớp</a>
                    <a href="/academic/reports" className="block px-4 py-2.5 rounded-lg hover:bg-teal-700">Báo cáo thống kê</a>
                </nav>

                <div className="p-4 border-t border-teal-700">
                    <button onClick={() => router.push('/select-role')} className="w-full text-left px-4 py-2 text-sm hover:bg-teal-700 rounded-lg">
                        Đổi vai trò
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-teal-700 rounded-lg mt-1">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Phòng Giáo vụ</h2>
                    <span className="text-sm text-gray-500">Năm học 2025 - 2026</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}