<?php

use Illuminate\Support\Facades\Route;
use Modules\Attendance\Controllers\AttendanceController;

// Prefix tự động: /api/v1/attendance
Route::apiResource('attendances', AttendanceController::class);
