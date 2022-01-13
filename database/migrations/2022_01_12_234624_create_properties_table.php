<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string("apartment",30);
            $table->string("description",1000)->Nullable();
            $table->tinyInteger("rooms");
            $table->tinyInteger("bedrooms");
            $table->tinyInteger("bathrooms");
            $table->boolean("garage");
            $table->boolean("pool");
            $table->boolean("pets");
            $table->boolean("expenses");
            $table->integer("m2")->Nullable();
            $table->boolean("published");            
            $table->decimal('price', $precision = 10, $scale = 2);
            $table->foreignId("property_type_id")->constrained("property_types");
            $table->foreignId("group_id")->constrained("groups")->Nullable();
            $table->foreignId("address_id")->constrained("addresses");
            $table->foreignId("real_estate_id")->constrained("real_estate");
            $table->foreignId("people_group_id")->constrained("people_groups")->Nullable();
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
        Schema::dropIfExists('properties');
    }
}
