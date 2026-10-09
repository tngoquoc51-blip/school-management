<?php

namespace Modules\Notification\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Notification\Requests\StoreNoticeRequest;
use Modules\Notification\Resources\NoticeResource;
use Modules\Notification\Services\NoticeService;

class NoticeController extends Controller
{
    use ApiResponse;

    public function __construct(private NoticeService $service) {}

    public function index()
    {
        return $this->success(NoticeResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreNoticeRequest $request)
    {
        return $this->success(new NoticeResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new NoticeResource($this->service->show($id)));
    }

    public function update(StoreNoticeRequest $request, int $id)
    {
        return $this->success(new NoticeResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
