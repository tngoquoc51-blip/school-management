<?php

namespace Modules\Exam\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Exam\Requests\StoreExamRequest;
use Modules\Exam\Resources\ExamResource;
use Modules\Exam\Services\ExamService;

class ExamController extends Controller
{
    use ApiResponse;

    public function __construct(private ExamService $service) {}

    public function index()
    {
        return $this->success(ExamResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreExamRequest $request)
    {
        return $this->success(new ExamResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new ExamResource($this->service->show($id)));
    }

    public function update(StoreExamRequest $request, int $id)
    {
        return $this->success(new ExamResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
