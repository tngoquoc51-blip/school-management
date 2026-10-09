<?php

namespace Modules\Attendance\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Attendance\Requests\StoreAttendanceRequest;
use Modules\Attendance\Resources\AttendanceResource;
use Modules\Attendance\Services\AttendanceService;

class AttendanceController extends Controller
{
    use ApiResponse;

    public function __construct(private AttendanceService $service) {}

    public function index()
    {
        return $this->success(AttendanceResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreAttendanceRequest $request)
    {
        return $this->success(new AttendanceResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new AttendanceResource($this->service->show($id)));
    }

    public function update(StoreAttendanceRequest $request, int $id)
    {
        return $this->success(new AttendanceResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
