<?php

namespace Modules\Auth\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Auth\Requests\StoreRoleRequest;
use Modules\Auth\Resources\RoleResource;
use Modules\Auth\Services\RoleService;

class RoleController extends Controller
{
    use ApiResponse;

    public function __construct(private RoleService $service) {}

    public function index()
    {
        return $this->success(RoleResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreRoleRequest $request)
    {
        return $this->success(new RoleResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new RoleResource($this->service->show($id)));
    }

    public function update(StoreRoleRequest $request, int $id)
    {
        return $this->success(new RoleResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
