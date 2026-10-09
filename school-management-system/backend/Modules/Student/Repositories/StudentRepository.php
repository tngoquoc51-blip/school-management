<?php

namespace Modules\Student\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Student\Models\Student;

class StudentRepository extends BaseRepository
{
    public function __construct(Student $model)
    {
        parent::__construct($model);
    }
}
