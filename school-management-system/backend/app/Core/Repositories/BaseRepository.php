<?php

namespace App\Core\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    public function __construct(protected Model $model) {}

    public function all() { return $this->model->all(); }
    public function paginate(int $perPage = 15) { return $this->model->paginate($perPage); }
    public function find(int $id) { return $this->model->findOrFail($id); }
    public function create(array $data) { return $this->model->create($data); }

    public function update(int $id, array $data)
    {
        $record = $this->find($id);
        $record->update($data);
        return $record;
    }

    public function delete(int $id): bool { return (bool) $this->find($id)->delete(); }
}
