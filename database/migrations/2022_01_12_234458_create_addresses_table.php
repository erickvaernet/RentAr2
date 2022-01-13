<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use phpDocumentor\Reflection\Types\Nullable;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->decimal('latitude', $precision = 8, $scale = 6)->nullable();
            $table->decimal('logitude', $precision = 9, $scale = 6)->nullable();
            $table->string("street",80)->Nullable();
            $table->integer("number")->Nullable();
            $table->string("neighborhood",80)->Nullable();
            $table->string("block",80)->Nullable();            
            $table->foreignId("city_id")->constrained("cities")->Nullable();           
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
        Schema::dropIfExists('addresses');
    }
}
