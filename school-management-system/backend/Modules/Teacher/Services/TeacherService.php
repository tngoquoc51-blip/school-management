<?php

namespace Modules\Teacher\Services;

use App\Core\Services\BaseService;
use Modules\Teacher\Repositories\TeacherRepository;

class TeacherService extends BaseService
{
    public function __construct(TeacherRepository $repository)
    {
        parent::__construct($repository);
    }
}
