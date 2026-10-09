<?php

namespace Modules\User\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\User\Requests\StoreUserProfileRequest;
use Modules\User\Resources\UserProfileResource;
use Modules\User\Services\UserProfileService;

class UserProfileController extends Controller
{
    use ApiResponse;

    public function __construct(private UserProfileService $service) {}

    public function index()
    {
        return $this->success(UserProfileResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreUserProfileRequest $request)
    {
        return $this->success(new UserProfileResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new UserProfileResource($this->service->show($id)));
    }

    public function update(StoreUserProfileRequest $request, int $id)
    {
        return $this->success(new UserProfileResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
