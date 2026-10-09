<?php

namespace Modules\Academic\Models;

use App\Core\Models\BaseModel;

class SchoolClass extends BaseModel
{
    protected $table = 'classes';

    protected $fillable = [
        'name',           // ví dụ: 10A1
        'grade_id',       // khối 10, 11, 12
        'school_year_id',
        'homeroom_teacher_id',
        'max_students',
        'status',
    ];

    public function students()
    {
        return $this->hasMany(\Modules\Student\Models\Student::class, 'class_id');
    }

    public function homeroomTeacher()
    {
        return $this->belongsTo(\Modules\Teacher\Models\Teacher::class, 'homeroom_teacher_id');
    }
}
