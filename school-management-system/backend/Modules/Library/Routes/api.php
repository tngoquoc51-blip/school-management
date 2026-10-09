<?php

use Illuminate\Support\Facades\Route;
use Modules\Library\Controllers\BookController;

// Prefix tự động: /api/v1/library
Route::apiResource('books', BookController::class);
