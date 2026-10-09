'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const roleLabels: Record<string, string> = {
    super_admin: 'Quản trị hệ thống',
    principal: 'Hiệu trưởng',
    vice_principal: 'Phó Hiệu trưởng',
    teacher: 'Giáo viên bộ môn',
    homeroom_teacher: 'Giáo viên Chủ nhiệm',
    department_head: 'Tổ trưởng chuyên môn',
    academic: 'Giáo vụ',
    student: 'Học sinh',
    parent: 'Phụ huynh',
};

export default function SelectRolePage() {
    const router = useRouter();
    const [roles, setRoles] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('roles');
        if (stored) {
            setRoles(JSON.parse(stored));
        } else {
            router.push('/login');
        }
    }, []);

    const chooseRole = (role: string) => {
        localStorage.setItem('current_role', role);
        const map: Record<string, string> = {
            super_admin: '/admin/dashboard',
            principal: '/bgh/dashboard',
            vice_principal: '/bgh/dashboard',
            teacher: '/teacher/dashboard',
            homeroom_teacher: '/homeroom/dashboard',
            department_head: '/department/dashboard',
            academic: '/academic/dashboard',
            student: '/student/dashboard',
            parent: '/parent/dashboard',
        };
        router.push(map[role] || '/');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center mb-2">Chọn vai trò làm việc</h1>
                <p className="text-center text-gray-500 mb-8">
                    Tài khoản của bạn có nhiều vai trò. Vui lòng chọn vai trò muốn sử dụng.
                </p>

                <div className="space-y-3">
                    {roles.map((role) => (
                        <button
                            key={role}
                            onClick={() => chooseRole(role)}
                            className="w-full text-left px-5 py-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition flex justify-between items-center"
                        >
                            <span className="font-medium">{roleLabels[role] || role}</span>
                            <span className="text-blue-600">→</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}