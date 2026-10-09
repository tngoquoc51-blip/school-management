<?php

namespace Modules\Finance\Services;

use App\Core\Services\BaseService;
use Modules\Finance\Repositories\TuitionFeeRepository;

class TuitionFeeService extends BaseService
{
    public function __construct(TuitionFeeRepository $repository)
    {
        parent::__construct($repository);
    }
}
