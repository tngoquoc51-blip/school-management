'use client';

import TeacherLayout from '@/layouts/TeacherLayout';
import { useState } from 'react';

const mockStudents = [
    { id: 1, name: 'Nguyễn Văn A', code: 'HS001', tx1: 8, tx2: 7, tx3: 9, mid: 8, final: null },
    { id: 2, name: 'Trần Thị B', code: 'HS002', tx1: 9, tx2: 8, tx3: 8, mid: 9, final: null },
    { id: 3, name: 'Lê Văn C', code: 'HS003', tx1: 6, tx2: 7, tx3: 7, mid: 6.5, final: null },
];

export default function GradesPage() {
    return (
        <TeacherLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Nhập điểm</h1>
                        <p className="text-gray-500 text-sm mt-1">Lớp 10A1 - Môn Toán - Học kỳ 1</p>
                    </div>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                        Lưu điểm
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 py-3 text-left">STT</th>
                            <th className="px-3 py-3 text-left">Họ tên</th>
                            <th className="px-3 py-3 text-center">ĐTX 1</th>
                            <th className="px-3 py-3 text-center">ĐTX 2</th>
                            <th className="px-3 py-3 text-center">ĐTX 3</th>
                            <th className="px-3 py-3 text-center">Giữa kỳ</th>
                            <th className="px-3 py-3 text-center">Cuối kỳ</th>
                            <th className="px-3 py-3 text-center">TB môn</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mockStudents.map((s, index) => {
                            const avg = (
                                (s.tx1 + s.tx2 + s.tx3 + s.mid * 2) / 6
                            ).toFixed(1);
                            return (
                                <tr key={s.id} className="border-t">
                                    <td className="px-3 py-2">{index + 1}</td>
                                    <td className="px-3 py-2 font-medium">{s.name}</td>
                                    <td className="px-3 py-2 text-center">
                                        <input type="number" defaultValue={s.tx1} className="w-16 border rounded px-1 py-1 text-center" step="0.1" min="0" max="10" />
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <input type="number" defaultValue={s.tx2} className="w-16 border rounded px-1 py-1 text-center" step="0.1" min="0" max="10" />
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <input type="number" defaultValue={s.tx3} className="w-16 border rounded px-1 py-1 text-center" step="0.1" min="0" max="10" />
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <input type="number" defaultValue={s.mid} className="w-16 border rounded px-1 py-1 text-center" step="0.1" min="0" max="10" />
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        <input type="number" className="w-16 border rounded px-1 py-1 text-center" step="0.1" min="0" max="10" />
                                    </td>
                                    <td className="px-3 py-2 text-center font-semibold text-blue-600">{avg}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>

                <p className="text-sm text-gray-500">
                    * Công thức theo Thông tư 22: TB = (ĐTX1 + ĐTX2 + ĐTX3 + Giữa kỳ×2 + Cuối kỳ×3) / 8 (khi có điểm cuối kỳ)
                </p>
            </div>
        </TeacherLayout>
    );
}