<?php

namespace Modules\Finance\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Finance\Requests\StoreTuitionFeeRequest;
use Modules\Finance\Resources\TuitionFeeResource;
use Modules\Finance\Services\TuitionFeeService;

class TuitionFeeController extends Controller
{
    use ApiResponse;

    public function __construct(private TuitionFeeService $service) {}

    public function index()
    {
        return $this->success(TuitionFeeResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreTuitionFeeRequest $request)
    {
        return $this->success(new TuitionFeeResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new TuitionFeeResource($this->service->show($id)));
    }

    public function update(StoreTuitionFeeRequest $request, int $id)
    {
        return $this->success(new TuitionFeeResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
