<?php

use Illuminate\Support\Facades\Route;
use Modules\Finance\Controllers\TuitionFeeController;

// Prefix tự động: /api/v1/finance
Route::apiResource('tuition-fees', TuitionFeeController::class);
