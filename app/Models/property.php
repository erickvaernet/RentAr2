<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class property extends Model
{
    use HasFactory;
    
    public function address(){
        return $this->hasOne(Address::class, 'address_id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable =[
        'apartment',
        'description',
        'rooms',
        'bedrooms',
        'bathrooms',
        'garage',
        'pool',
        'pets',
        'expenses',
        'm2',
        'published',
        'prices',
    ];
}
