<?php

use Illuminate\Support\Facades\Route;

// Route của từng module nằm trong Modules/<Tên>/Routes/api.php và được nạp tự động
// bởi App\Core\ModuleLoaderServiceProvider (prefix: /api/v1/<module>).
Route::get('/health', fn () => response()->json(['status' => 'ok']));
