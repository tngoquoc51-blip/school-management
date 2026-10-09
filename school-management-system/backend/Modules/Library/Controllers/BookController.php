<?php

namespace Modules\Library\Controllers;

use App\Core\Traits\ApiResponse;
use Illuminate\Routing\Controller;
use Modules\Library\Requests\StoreBookRequest;
use Modules\Library\Resources\BookResource;
use Modules\Library\Services\BookService;

class BookController extends Controller
{
    use ApiResponse;

    public function __construct(private BookService $service) {}

    public function index()
    {
        return $this->success(BookResource::collection($this->service->list(paginate_limit())));
    }

    public function store(StoreBookRequest $request)
    {
        return $this->success(new BookResource($this->service->store($request->validated())), 'Tạo thành công', 201);
    }

    public function show(int $id)
    {
        return $this->success(new BookResource($this->service->show($id)));
    }

    public function update(StoreBookRequest $request, int $id)
    {
        return $this->success(new BookResource($this->service->update($id, $request->validated())), 'Cập nhật thành công');
    }

    public function destroy(int $id)
    {
        $this->service->destroy($id);
        return $this->success(null, 'Xóa thành công');
    }
}
