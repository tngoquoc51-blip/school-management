<?php

namespace Modules\Report\Services;

use App\Core\Services\BaseService;
use Modules\Report\Repositories\ReportRepository;

class ReportService extends BaseService
{
    public function __construct(ReportRepository $repository)
    {
        parent::__construct($repository);
    }
}
