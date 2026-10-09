<?php

namespace Modules\Library\Repositories;

use App\Core\Repositories\BaseRepository;
use Modules\Library\Models\Book;

class BookRepository extends BaseRepository
{
    public function __construct(Book $model)
    {
        parent::__construct($model);
    }
}
