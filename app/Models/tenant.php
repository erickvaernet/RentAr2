<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tenant extends Model
{
    use HasFactory;

    
    protected $fillable =[
        'name',
        'last_name',
        'dni',
        'entry_date',
        'date_of_contract',
        'departure_date'
    ];
}
