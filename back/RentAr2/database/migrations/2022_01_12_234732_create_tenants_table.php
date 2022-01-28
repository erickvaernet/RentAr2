<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();            
            $table->string('name');
            $table->string('last_name');
            $table->integer('dni')->Nullable();      
            $table->date("entry_date");
            $table->date("end_of_contract");
            $table->date("departure_date")->Nullable();
            $table->foreignId("property_id")->constrained("properties");
            $table->foreignId("people_group_id")->constrained("people_groups");
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
        Schema::dropIfExists('tenants');
    }
}
