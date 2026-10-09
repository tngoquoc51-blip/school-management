'use client';

import ParentLayout from '@/layouts/ParentLayout';

export default function ParentDashboard() {
    return (
        <ParentLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Xin chào Phụ huynh!</h1>
                    <div className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        Đang xem: Nguyễn Văn A - Lớp 10A1
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Điểm TB HK1</p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">8.2</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Học lực</p>
                        <p className="text-2xl font-bold text-green-600 mt-1">Giỏi</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Rèn luyện</p>
                        <p className="text-2xl font-bold text-indigo-600 mt-1">Tốt</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Buổi nghỉ</p>
                        <p className="text-2xl font-bold text-orange-500 mt-1">0</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-sm border p-5">
                        <h2 className="font-semibold text-lg mb-4">Thông báo gần đây</h2>
                        <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <p className="font-medium text-sm">Thông báo họp phụ huynh cuối kỳ</p>
                                <p className="text-xs text-gray-500 mt-1">2 giờ trước</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                                <p className="font-medium text-sm">Điểm kiểm tra 15 phút môn Toán đã có</p>
                                <p className="text-xs text-gray-500 mt-1">Hôm qua</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5">
                        <h2 className="font-semibold text-lg mb-4">Chuyên cần tuần này</h2>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Thứ 2</span>
                                <span className="text-green-600 font-medium">Có mặt</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Thứ 3</span>
                                <span className="text-green-600 font-medium">Có mặt</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Thứ 4</span>
                                <span className="text-green-600 font-medium">Có mặt</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Thứ 5</span>
                                <span className="text-green-600 font-medium">Có mặt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ParentLayout>
    );
}