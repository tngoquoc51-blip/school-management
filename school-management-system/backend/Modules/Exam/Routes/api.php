<?php

use Illuminate\Support\Facades\Route;
use Modules\Exam\Controllers\ExamController;

// Prefix tự động: /api/v1/exam
Route::apiResource('exams', ExamController::class);
