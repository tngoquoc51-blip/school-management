<?php

namespace Modules\Notification\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Notification\Models\Notice;

class NoticeRepository extends BaseRepository
{
    public function __construct(Notice $model)
    {
        parent::__construct($model);
    }
}
