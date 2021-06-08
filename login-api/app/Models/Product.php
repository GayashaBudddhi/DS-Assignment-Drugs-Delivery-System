<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable =[
        'pro_name',
        'pro_code',
        'cat_id',
        'pro_info',
        'pro_price'
    ];
}
