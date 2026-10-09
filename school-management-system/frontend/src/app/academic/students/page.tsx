'use client';

import AcademicLayout from '@/layouts/AcademicLayout';
import { useState } from 'react';

const mockStudents = [
    { id: 1, student_code: 'HS2025001', full_name: 'Nguyễn Văn A', class_name: '10A1', gender: 'Nam', status: 'Đang học' },
    { id: 2, student_code: 'HS2025002', full_name: 'Trần Thị B', class_name: '10A1', gender: 'Nữ', status: 'Đang học' },
    { id: 3, student_code: 'HS2025003', full_name: 'Lê Văn C', class_name: '11B2', gender: 'Nam', status: 'Đang học' },
];

export default function StudentsPage() {
    const [search, setSearch] = useState('');

    const filtered = mockStudents.filter(
        (s) =>
            s.full_name.toLowerCase().includes(search.toLowerCase()) ||
            s.student_code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AcademicLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Quản lý Học sinh</h1>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                        + Thêm học sinh
                    </button>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border flex gap-4">
                    <input
                        type="text"
                        placeholder="Tìm theo tên hoặc mã học sinh..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <select className="px-4 py-2 border rounded-lg">
                        <option value="">Tất cả lớp</option>
                        <option value="10A1">10A1</option>
                        <option value="11B2">11B2</option>
                    </select>
                </div>

                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="text-left px-4 py-3">Mã HS</th>
                            <th className="text-left px-4 py-3">Họ và tên</th>
                            <th className="text-left px-4 py-3">Lớp</th>
                            <th className="text-left px-4 py-3">Giới tính</th>
                            <th className="text-left px-4 py-3">Trạng thái</th>
                            <th className="text-left px-4 py-3">Thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.map((student) => (
                            <tr key={student.id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-3">{student.student_code}</td>
                                <td className="px-4 py-3 font-medium">{student.full_name}</td>
                                <td className="px-4 py-3">{student.class_name}</td>
                                <td className="px-4 py-3">{student.gender}</td>
                                <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {student.status}
                    </span>
                                </td>
                                <td className="px-4 py-3 space-x-2">
                                    <button className="text-blue-600 hover:underline">Xem</button>
                                    <button className="text-teal-600 hover:underline">Sửa</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AcademicLayout>
    );
}