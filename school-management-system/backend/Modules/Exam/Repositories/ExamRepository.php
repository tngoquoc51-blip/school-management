<?php

namespace Modules\Exam\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Exam\Models\Exam;

class ExamRepository extends BaseRepository
{
    public function __construct(Exam $model)
    {
        parent::__construct($model);
    }
}
