<?php

use Illuminate\Support\Facades\Route;
use Modules\Report\Controllers\ReportController;

// Prefix tự động: /api/v1/report
Route::apiResource('reports', ReportController::class);
