<?php

namespace Modules\Report\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Report\Requests\StoreReportRequest;
use Modules\Report\Resources\ReportResource;
use Modules\Report\Services\ReportService;

class ReportController extends Controller
{
    use ApiResponse;

    public function __construct(private ReportService $service) {}

    public function index()
    {
        return $this->success(ReportResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreReportRequest $request)
    {
        return $this->success(new ReportResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new ReportResource($this->service->show($id)));
    }

    public function update(StoreReportRequest $request, int $id)
    {
        return $this->success(new ReportResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
