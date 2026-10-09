'use client';

import TeacherLayout from '@/layouts/TeacherLayout';
import { useState } from 'react';

const mockStudents = [
    { id: 1, name: 'Nguyễn Văn A', code: 'HS001' },
    { id: 2, name: 'Trần Thị B', code: 'HS002' },
    { id: 3, name: 'Lê Văn C', code: 'HS003' },
    { id: 4, name: 'Phạm Thị D', code: 'HS004' },
];

export default function AttendancePage() {
    const [attendance, setAttendance] = useState<Record<number, string>>({});

    const setStatus = (id: number, status: string) => {
        setAttendance((prev) => ({ ...prev, [id]: status }));
    };

    return (
        <TeacherLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Điểm danh</h1>
                        <p className="text-gray-500 text-sm mt-1">Lớp 10A1 - Tiết 1 - Môn Toán - 09/10/2025</p>
                    </div>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                        Lưu điểm danh
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left px-4 py-3">STT</th>
                            <th className="text-left px-4 py-3">Mã HS</th>
                            <th className="text-left px-4 py-3">Họ và tên</th>
                            <th className="text-center px-4 py-3">Có mặt</th>
                            <th className="text-center px-4 py-3">Vắng (P)</th>
                            <th className="text-center px-4 py-3">Vắng (K)</th>
                            <th className="text-center px-4 py-3">Đi muộn</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mockStudents.map((s, index) => (
                            <tr key={s.id} className="border-t">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{s.code}</td>
                                <td className="px-4 py-3 font-medium">{s.name}</td>
                                {['present', 'excused', 'absent', 'late'].map((status) => (
                                    <td key={status} className="px-4 py-3 text-center">
                                        <input
                                            type="radio"
                                            name={`att-${s.id}`}
                                            checked={attendance[s.id] === status}
                                            onChange={() => setStatus(s.id, status)}
                                            className="w-4 h-4"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </TeacherLayout>
    );
}