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
        Schema::create('comitte_models', function (Blueprint $table) {
            $table->id();
            $table->string('c_name');
            $table->string('country');
            $table->string('state');
            $table->string('district');
            $table->string('city');
            $table->text('des');
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
        Schema::dropIfExists('comitte_models');
    }
};
