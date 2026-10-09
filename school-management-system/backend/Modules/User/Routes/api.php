<?php

use Illuminate\Support\Facades\Route;
use Modules\User\Controllers\UserProfileController;

// Prefix tự động: /api/v1/user
Route::apiResource('user-profiles', UserProfileController::class);
