<?php

namespace Modules\Library\Services;

use App\Core\Services\BaseService;
use Modules\Library\Repositories\BookRepository;

class BookService extends BaseService
{
    public function __construct(BookRepository $repository)
    {
        parent::__construct($repository);
    }
}
