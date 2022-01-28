<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuildingRepairsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('building_repairs', function (Blueprint $table) {
            $table->id();
            $table->string("name",80);
            $table->string("description",3000);
            $table->date("date");
            $table->decimal("value",8,2);
            $table->foreignId("property_id")->constrained("properties");
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
        Schema::dropIfExists('building_repairs');
    }
}
