<?php

namespace Modules\Notification\Services;

use App\Core\Services\BaseService;
use Modules\Notification\Repositories\NoticeRepository;

class NoticeService extends BaseService
{
    public function __construct(NoticeRepository $repository)
    {
        parent::__construct($repository);
    }
}
