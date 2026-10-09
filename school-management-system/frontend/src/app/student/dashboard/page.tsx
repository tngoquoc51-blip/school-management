'use client';

import StudentLayout from '@/layouts/StudentLayout';

export default function StudentDashboard() {
    return (
        <StudentLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Xin chào!</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Điểm trung bình HK1</p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">8.4</p>
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
                        <p className="text-sm text-gray-500">Số buổi nghỉ</p>
                        <p className="text-2xl font-bold text-orange-500 mt-1">1</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border p-5">
                    <h2 className="font-semibold text-lg mb-4">Thời khóa biểu hôm nay</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium">Tiết 1 - Ngữ văn</p>
                                <p className="text-sm text-gray-500">GV: Nguyễn Thị A - Phòng 102</p>
                            </div>
                            <span className="text-sm text-blue-600">07:00 - 07:45</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium">Tiết 2 - Toán</p>
                                <p className="text-sm text-gray-500">GV: Trần Văn B - Phòng 201</p>
                            </div>
                            <span className="text-sm text-blue-600">07:50 - 08:35</span>
                        </div>
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}