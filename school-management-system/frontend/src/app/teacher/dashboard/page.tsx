'use client';

import TeacherLayout from '@/layouts/TeacherLayout';

export default function TeacherDashboard() {
    return (
        <TeacherLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Xin chào, Giáo viên!</h1>

                {/* Thống kê nhanh */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Lớp đang dạy</p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">6</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Tiết hôm nay</p>
                        <p className="text-2xl font-bold text-green-600 mt-1">4</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Chưa nhập điểm</p>
                        <p className="text-2xl font-bold text-orange-500 mt-1">2</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Thông báo mới</p>
                        <p className="text-2xl font-bold text-purple-600 mt-1">3</p>
                    </div>
                </div>

                {/* Thời khóa biểu hôm nay */}
                <div className="bg-white rounded-xl shadow-sm border p-5">
                    <h2 className="font-semibold text-lg mb-4">Thời khóa biểu hôm nay</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium">Tiết 1 - Toán 12A1</p>
                                <p className="text-sm text-gray-500">Phòng 201</p>
                            </div>
                            <span className="text-sm text-blue-600">07:00 - 07:45</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium">Tiết 3 - Toán 11B2</p>
                                <p className="text-sm text-gray-500">Phòng 305</p>
                            </div>
                            <span className="text-sm text-blue-600">09:00 - 09:45</span>
                        </div>
                    </div>
                </div>
            </div>
        </TeacherLayout>
    );
}