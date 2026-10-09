<?php

namespace Modules\Student\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Student\Requests\StoreStudentRequest;
use Modules\Student\Resources\StudentResource;
use Modules\Student\Services\StudentService;

class StudentController extends Controller
{
    use ApiResponse;

    public function __construct(private StudentService $service) {}

    public function index()
    {
        return $this->success(StudentResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreStudentRequest $request)
    {
        return $this->success(new StudentResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new StudentResource($this->service->show($id)));
    }

    public function update(StoreStudentRequest $request, int $id)
    {
        return $this->success(new StudentResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
