<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            'super_admin',
            'principal',
            'vice_principal',
            'teacher',
            'homeroom_teacher',
            'department_head',
            'academic',
            'accountant',
            'librarian',
            'medical',
            'supervisor',
            'student',
            'parent',
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role, 'guard_name' => 'web']);
        }
    }
}
