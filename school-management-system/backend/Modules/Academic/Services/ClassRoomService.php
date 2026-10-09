<?php

namespace Modules\Academic\Services;

use App\Core\Services\BaseService;
use Modules\Academic\Repositories\ClassRoomRepository;

class ClassRoomService extends BaseService
{
    public function __construct(ClassRoomRepository $repository)
    {
        parent::__construct($repository);
    }
}
