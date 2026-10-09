<?php

namespace Modules\System\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\System\Models\AcademicYear;

class AcademicYearRepository extends BaseRepository
{
    public function __construct(AcademicYear $model)
    {
        parent::__construct($model);
    }
}
