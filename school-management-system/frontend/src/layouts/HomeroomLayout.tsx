'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function HomeroomLayout({ children }: Props) {
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
            <aside className="w-64 bg-green-800 text-white flex flex-col">
                <div className="p-5 border-b border-green-700">
                    <h1 className="text-lg font-bold">Giáo viên Chủ nhiệm</h1>
                    <p className="text-sm text-green-200 mt-1">{user?.name}</p>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm">
                    <a href="/homeroom/dashboard" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Dashboard</a>
                    <a href="/homeroom/class-info" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Hồ sơ lớp</a>
                    <a href="/homeroom/attendance" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Chuyên cần</a>
                    <a href="/homeroom/grades" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Bảng điểm lớp</a>
                    <a href="/homeroom/conduct" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Rèn luyện</a>
                    <a href="/homeroom/notebook" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Sổ chủ nhiệm</a>
                    <a href="/homeroom/parents" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Liên hệ phụ huynh</a>
                    <a href="/homeroom/meetings" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Họp phụ huynh</a>
                    <a href="/homeroom/rewards" className="block px-4 py-2.5 rounded-lg hover:bg-green-700">Khen thưởng - Kỷ luật</a>
                </nav>

                <div className="p-4 border-t border-green-700">
                    <button onClick={() => router.push('/select-role')} className="w-full text-left px-4 py-2 text-sm hover:bg-green-700 rounded-lg">
                        Đổi vai trò
                    </button>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-green-700 rounded-lg mt-1">
                        Đăng xuất
                    </button>
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800">Sổ chủ nhiệm điện tử</h2>
                    <span className="text-sm text-gray-500">Năm học 2025 - 2026</span>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}