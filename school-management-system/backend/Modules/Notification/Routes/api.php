<?php

use Illuminate\Support\Facades\Route;
use Modules\Notification\Controllers\NoticeController;

// Prefix tự động: /api/v1/notification
Route::apiResource('school-notifications', NoticeController::class);
