<?php

namespace Modules\Teacher\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Teacher\Requests\StoreTeacherRequest;
use Modules\Teacher\Resources\TeacherResource;
use Modules\Teacher\Services\TeacherService;

class TeacherController extends Controller
{
    use ApiResponse;

    public function __construct(private TeacherService $service) {}

    public function index()
    {
        return $this->success(TeacherResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreTeacherRequest $request)
    {
        return $this->success(new TeacherResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new TeacherResource($this->service->show($id)));
    }

    public function update(StoreTeacherRequest $request, int $id)
    {
        return $this->success(new TeacherResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
