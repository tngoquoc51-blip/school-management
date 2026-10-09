'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function DepartmentLayout({ children }: Props) {
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
            <aside className="w-64 bg-cyan-800 text-white flex flex-col">
                <div className="p-5 border-b border-cyan-700">
                    <h1 className="text-lg font-bold">Tổ chuyên môn</h1>
                    <p className="text-sm text-cyan-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/department/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-cyan-700">Dashboard</a>
                    <a href="/department/teachers" className="block px-4 py-2.5 rounded-lg hover:bg-cyan-700">Giáo viên trong tổ</a>
                    <a href="/department/lesson-plans" className="block px-4 py-2.5 rounded-lg hover:bg-cyan-700">Duyệt giáo án</a>
                    <a href="/department/observation" className="block px-4 py-2.5 rounded-lg hover:bg-cyan-700">Dự giờ</a>
                    <a href="/department/statistics" className="block px-4 py-2.5 rounded-lg hover:bg-cyan-700">Thống kê chuyên môn</a>
                    <a href="/department/meetings" className="block px-4 py-2.5 rounded-lg hover:bg-cyan-700">Sinh hoạt tổ</a>
                </nav>

                <div className="p-4 border-t border-cyan-700">
                    <button onClick={() => router.push('/select-role')} className="w-full text-left px-4 py-2 text-sm hover:bg-cyan-700 rounded-lg">
                        Đổi vai trò
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-cyan-700 rounded-lg mt-1">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Tổ chuyên môn</h2>
                    <span className="text-sm text-gray-500">Năm học 2025 - 2026</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}