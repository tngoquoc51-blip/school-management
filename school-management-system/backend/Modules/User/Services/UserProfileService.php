<?php

namespace Modules\User\Services;

use App\Core\Services\BaseService;
use Modules\User\Repositories\UserProfileRepository;

class UserProfileService extends BaseService
{
    public function __construct(UserProfileRepository $repository)
    {
        parent::__construct($repository);
    }
}
