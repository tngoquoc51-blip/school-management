<?php

namespace Modules\Teacher\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Teacher\Models\Teacher;

class TeacherRepository extends BaseRepository
{
    public function __construct(Teacher $model)
    {
        parent::__construct($model);
    }
}
