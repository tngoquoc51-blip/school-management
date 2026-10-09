'use client';

import BGHLayout from '@/layouts/BGHLayout';

export default function BGHDashboard() {
    return (
        <BGHLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">Bảng điều khiển toàn trường</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Tổng số học sinh</p>
                        <p className="text-2xl font-bold text-blue-600 mt-1">1.248</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Sĩ số hôm nay</p>
                        <p className="text-2xl font-bold text-green-600 mt-1">1.189</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Tỷ lệ chuyên cần</p>
                        <p className="text-2xl font-bold text-indigo-600 mt-1">95.3%</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border">
                        <p className="text-sm text-gray-500">Chờ phê duyệt</p>
                        <p className="text-2xl font-bold text-orange-500 mt-1">7</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-sm border p-5">
                        <h2 className="font-semibold text-lg mb-4">Tỷ lệ học lực toàn trường</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Giỏi</span>
                                <div className="w-48 bg-gray-200 rounded-full h-3">
                                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                                </div>
                                <span className="text-sm font-medium">28%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Khá</span>
                                <div className="w-48 bg-gray-200 rounded-full h-3">
                                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <span className="text-sm font-medium">45%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Trung bình</span>
                                <div className="w-48 bg-gray-200 rounded-full h-3">
                                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '22%' }}></div>
                                </div>
                                <span className="text-sm font-medium">22%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Yếu</span>
                                <div className="w-48 bg-gray-200 rounded-full h-3">
                                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                                </div>
                                <span className="text-sm font-medium">5%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5">
                        <h2 className="font-semibold text-lg mb-4">Việc cần phê duyệt</h2>
                        <div className="space-y-3">
                            <div className="p-3 bg-orange-50 rounded-lg flex justify-between items-center">
                                <span>Phân công giảng dạy học kỳ 2</span>
                                <button className="text-sm text-blue-600 font-medium">Xem</button>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg flex justify-between items-center">
                                <span>Thời khóa biểu tuần 15</span>
                                <button className="text-sm text-blue-600 font-medium">Xem</button>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-lg flex justify-between items-center">
                                <span>Đề xuất khen thưởng tháng 10</span>
                                <button className="text-sm text-blue-600 font-medium">Xem</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BGHLayout>
    );
}