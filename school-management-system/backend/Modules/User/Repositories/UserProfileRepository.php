<?php

namespace Modules\User\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\User\Models\UserProfile;

class UserProfileRepository extends BaseRepository
{
    public function __construct(UserProfile $model)
    {
        parent::__construct($model);
    }
}
