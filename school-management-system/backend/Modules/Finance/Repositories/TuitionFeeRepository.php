<?php

namespace Modules\Finance\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Finance\Models\TuitionFee;

class TuitionFeeRepository extends BaseRepository
{
    public function __construct(TuitionFee $model)
    {
        parent::__construct($model);
    }
}
