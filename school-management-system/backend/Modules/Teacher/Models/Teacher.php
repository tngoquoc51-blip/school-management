<?php

namespace Modules\Teacher\Models;

use App\Core\Models\BaseModel;

class Teacher extends BaseModel
{
    protected $table = 'teachers';

    protected $fillable = [
        'user_id',
        'teacher_code',
        'full_name',
        'phone',
        'email',
        'department_id',   // tổ chuyên môn
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(\Modules\User\Models\User::class);
    }

    public function subjects()
    {
        return $this->belongsToMany(
            \Modules\Academic\Models\Subject::class,
            'teacher_subjects',
            'teacher_id',
            'subject_id'
        );
    }
}
