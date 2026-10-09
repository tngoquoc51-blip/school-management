<?php

namespace Modules\Academic\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Academic\Requests\StoreClassRoomRequest;
use Modules\Academic\Resources\ClassRoomResource;
use Modules\Academic\Services\ClassRoomService;

class ClassRoomController extends Controller
{
    use ApiResponse;

    public function __construct(private ClassRoomService $service) {}

    public function index()
    {
        return $this->success(ClassRoomResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreClassRoomRequest $request)
    {
        return $this->success(new ClassRoomResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new ClassRoomResource($this->service->show($id)));
    }

    public function update(StoreClassRoomRequest $request, int $id)
    {
        return $this->success(new ClassRoomResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
