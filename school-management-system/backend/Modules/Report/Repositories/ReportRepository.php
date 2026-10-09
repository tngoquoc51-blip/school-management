<?php

namespace Modules\Report\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Report\Models\Report;

class ReportRepository extends BaseRepository
{
    public function __construct(Report $model)
    {
        parent::__construct($model);
    }
}
