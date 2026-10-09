<?php

namespace Modules\Auth\Services;

use App\Core\Services\BaseService;
use Modules\Auth\Repositories\RoleRepository;

class RoleService extends BaseService
{
    public function __construct(RoleRepository $repository)
    {
        parent::__construct($repository);
    }
}
