<?php

namespace App\Core\Services;

use App\Core\Repositories\BaseRepository;

abstract class BaseService
{
    public function __construct(protected BaseRepository $repository) {}

    public function list(int $perPage = 15) { return $this->repository->paginate($perPage); }
    public function show(int $id) { return $this->repository->find($id); }
    public function store(array $data) { return $this->repository->create($data); }
    public function update(int $id, array $data) { return $this->repository->update($id, $data); }
    public function destroy(int $id): bool { return $this->repository->delete($id); }
}
