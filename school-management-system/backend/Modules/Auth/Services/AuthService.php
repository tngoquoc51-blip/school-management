<?php

namespace Modules\Auth\Services;

use Illuminate\Support\Facades\Auth;

/** Cần cài: composer require php-open-source-saver/jwt-auth */
class AuthService
{
    public function login(array $credentials): ?string
    {
        return Auth::guard('api')->attempt($credentials) ?: null;
    }

    public function logout(): void
    {
        Auth::guard('api')->logout();
    }
}
