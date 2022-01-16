<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class building_repair extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'date',
        'neighborhood',
        'value',
    ];
}
