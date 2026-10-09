<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler
{
    /** Dùng trong bootstrap/app.php: ->withExceptions(fn ($e) => Handler::register($e)) */
    public static function register($exceptions): void
    {
        $exceptions->render(function (ModelNotFoundException $e) {
            return response()->json(['success' => false, 'message' => 'Không tìm thấy dữ liệu'], 404);
        });
        $exceptions->render(function (ValidationException $e) {
            return response()->json(['success' => false, 'message' => 'Dữ liệu không hợp lệ', 'errors' => $e->errors()], 422);
        });
    }
}
