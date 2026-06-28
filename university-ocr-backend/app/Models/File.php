<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'title',
        'description',
        'student_id',
        'destination_department',
        'file_path',
        'status',
        'content',
        'rejection_reason',
        
    ];
}