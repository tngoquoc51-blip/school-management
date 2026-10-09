<?php

namespace Modules\Student\Services;

use App\Core\Services\BaseService;
use Modules\Student\Repositories\StudentRepository;

class StudentService extends BaseService
{
    public function __construct(StudentRepository $repository)
    {
        parent::__construct($repository);
    }
}
