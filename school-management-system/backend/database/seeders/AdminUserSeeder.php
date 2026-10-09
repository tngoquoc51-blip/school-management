<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;                    // ← đổi thành dòng này
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::firstOrCreate(
            ['email' => 'admin@thpt.edu.vn'],
            [
                'name' => 'Quản trị viên',
                'username' => 'admin',
                'password' => Hash::make('123456'),
                'status' => 'active',
            ]
        );

        $role = Role::where('name', 'super_admin')->first();
        if ($role) {
            $user->assignRole($role);
        }
    }
}

