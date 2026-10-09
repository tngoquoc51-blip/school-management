<?php

namespace Modules\Attendance\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Attendance\Models\Attendance;

class AttendanceRepository extends BaseRepository
{
    public function __construct(Attendance $model)
    {
        parent::__construct($model);
    }
}
