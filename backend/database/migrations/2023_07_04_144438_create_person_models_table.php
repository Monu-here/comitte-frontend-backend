<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_models', function (Blueprint $table) {
            $table->id();
            $table->string('c_name');
            $table->string('name');
            $table->string('address');
            $table->string('age');
            $table->string('citzenship');
            $table->string('number');
            $table->string('dob');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('person_models');
    }
};
