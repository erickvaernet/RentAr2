<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class service_payment extends Model
{
    use HasFactory;

    
    protected $fillable =[
        'date',
        'period',
        'value',
        'debt'
    ];
}
