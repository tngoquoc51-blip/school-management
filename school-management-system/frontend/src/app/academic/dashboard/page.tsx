'use client';

import AcademicLayout from '@/layouts/AcademicLayout';

export default function AcademicDashboard() {
    return (
        <AcademicLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Giáo vụ</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Tổng số học sinh</p>
                        <p className="text-2xl font-bold text-teal-600 mt-1">1.248</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Số lớp</p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">36</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Điểm chưa khóa</p>
                        <p className="text-2xl font-bold text-orange-500 mt-1">5</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Hồ sơ chờ xử lý</p>
                        <p className="text-2xl font-bold text-red-500 mt-1">3</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-5">
                    <h2 className="font-semibold text-lg mb-4">Công việc cần xử lý</h2>
                    <div className="space-y-3">
                        <div className="p-3 bg-orange-50 rounded-lg flex justify-between items-center">
                            <span>Khóa điểm giữa kỳ khối 12</span>
                            <button className="text-sm text-teal-600 font-medium">Xử lý</button>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg flex justify-between items-center">
                            <span>Xếp thời khóa biểu tuần 16</span>
                            <button className="text-sm text-teal-600 font-medium">Xử lý</button>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg flex justify-between items-center">
                            <span>Hồ sơ chuyển trường - Nguyễn Văn B</span>
                            <button className="text-sm text-teal-600 font-medium">Xử lý</button>
                        </div>
                    </div>
                </div>
            </div>
        </AcademicLayout>
    );
}