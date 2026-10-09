<?php

namespace Modules\Student\Models;

use App\Core\Models\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends BaseModel
{
    protected $table = 'students';

    protected $fillable = [
        'user_id',
        'student_code',
        'full_name',
        'date_of_birth',
        'gender',
        'class_id',
        'address',
        'phone',
        'parent_name',
        'parent_phone',
        'status',
        'school_year_id',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(\Modules\User\Models\User::class);
    }

    public function class()
    {
        return $this->belongsTo(\Modules\Academic\Models\SchoolClass::class, 'class_id');
    }
}
