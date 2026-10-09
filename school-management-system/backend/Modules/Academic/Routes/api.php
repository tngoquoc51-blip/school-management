<?php

use Illuminate\Support\Facades\Route;
use Modules\Academic\Controllers\ClassRoomController;

// Prefix tự động: /api/v1/academic
Route::apiResource('classes', ClassRoomController::class);
