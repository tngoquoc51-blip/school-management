'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function TeacherLayout({ children }: Props) {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            router.push('/login');
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        router.push('/login');
    };

    const switchRole = () => {
        router.push('/select-role');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-900 text-white flex flex-col">
                <div className="p-5 border-b border-blue-700">
                    <h1 className="text-lg font-bold">Giáo viên bộ môn</h1>
                    <p className="text-sm text-blue-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <a href="/teacher/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Dashboard</a>
                    <a href="/teacher/schedule" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Thời khóa biểu</a>
                    <a href="/teacher/attendance" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Điểm danh</a>
                    <a href="/teacher/lesson-log" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Sổ đầu bài</a>
                    <a href="/teacher/grades" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Nhập điểm</a>
                    <a href="/teacher/lesson-plan" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Kế hoạch bài dạy</a>
                    <a href="/teacher/exams" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Kiểm tra</a>
                    <a href="/teacher/profile" className="block px-4 py-2.5 rounded-lg hover:bg-blue-800">Hồ sơ cá nhân</a>
                </nav>

                <div className="p-4 border-t border-blue-700 space-y-2">
                    <button onClick={switchRole} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-800 rounded-lg">
                        Đổi vai trò
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-800 rounded-lg">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            {/* Nội dung chính */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Hệ thống Quản lý Trường THPT</h2>
                    <div className="text-sm text-gray-600">
                        Năm học 2025 - 2026 | Học kỳ 1
                    </div>
                </header>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}