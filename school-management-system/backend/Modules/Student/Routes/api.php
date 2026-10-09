<?php

use Illuminate\Support\Facades\Route;
use Modules\Student\Controllers\StudentController;

// Prefix tự động: /api/v1/student
Route::apiResource('students', StudentController::class);
