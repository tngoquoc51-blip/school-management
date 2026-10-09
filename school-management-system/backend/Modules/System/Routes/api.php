<?php

use Illuminate\Support\Facades\Route;
use Modules\System\Controllers\AcademicYearController;

// Prefix tự động: /api/v1/system
Route::apiResource('academic-years', AcademicYearController::class);
