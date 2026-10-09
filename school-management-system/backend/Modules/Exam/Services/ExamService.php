<?php

namespace Modules\Exam\Services;

use App\Core\Services\BaseService;
use Modules\Exam\Repositories\ExamRepository;

class ExamService extends BaseService
{
    public function __construct(ExamRepository $repository)
    {
        parent::__construct($repository);
    }
}
