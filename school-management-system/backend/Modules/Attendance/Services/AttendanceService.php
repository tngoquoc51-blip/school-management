<?php

namespace Modules\Attendance\Services;

use App\Core\Services\BaseService;
use Modules\Attendance\Repositories\AttendanceRepository;

class AttendanceService extends BaseService
{
    public function __construct(AttendanceRepository $repository)
    {
        parent::__construct($repository);
    }
}
