<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class personModel extends Model
{
    use HasFactory;
    function commite(){
       return $this->belongsTo(commiteModel::class,'c_name');
    }
}
