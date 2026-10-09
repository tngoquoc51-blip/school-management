<?php

namespace Modules\System\Services;

use App\Core\Services\BaseService;
use Modules\System\Repositories\AcademicYearRepository;

class AcademicYearService extends BaseService
{
    public function __construct(AcademicYearRepository $repository)
    {
        parent::__construct($repository);
    }
}
