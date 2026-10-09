<?php

namespace Modules\Academic\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Academic\Models\ClassRoom;

class ClassRoomRepository extends BaseRepository
{
    public function __construct(ClassRoom $model)
    {
        parent::__construct($model);
    }
}
