<?php

namespace App\Core\Enums;

enum RoleEnum: string
{
    case ADMIN = 'admin';
    case TEACHER = 'teacher';
    case STUDENT = 'student';
    case PARENT = 'parent';
}
