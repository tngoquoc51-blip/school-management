<?php

namespace Modules\Auth\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Auth\Models\Role;

class RoleRepository extends BaseRepository
{
    public function __construct(Role $model)
    {
        parent::__construct($model);
    }
}
