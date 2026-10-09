<?php

namespace Modules\System\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\System\Requests\StoreAcademicYearRequest;
use Modules\System\Resources\AcademicYearResource;
use Modules\System\Services\AcademicYearService;

class AcademicYearController extends Controller
{
    use ApiResponse;

    public function __construct(private AcademicYearService $service) {}

    public function index()
    {
        return $this->success(AcademicYearResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreAcademicYearRequest $request)
    {
        return $this->success(new AcademicYearResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new AcademicYearResource($this->service->show($id)));
    }

    public function update(StoreAcademicYearRequest $request, int $id)
    {
        return $this->success(new AcademicYearResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
