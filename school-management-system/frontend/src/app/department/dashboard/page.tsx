'use client';

import DepartmentLayout from '@/layouts/DepartmentLayout';

export default function DepartmentDashboard() {
    return (
        <DepartmentLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">Dashboard Tổ chuyên môn</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Giáo viên trong tổ</p>
                        <p className="text-2xl font-bold text-cyan-600 mt-1">12</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Giáo án chờ duyệt</p>
                        <p className="text-2xl font-bold text-orange-500 mt-1">5</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Lịch dự giờ tuần này</p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">3</p>
                    </div>
                </div>
            </div>
        </DepartmentLayout>
    );
}