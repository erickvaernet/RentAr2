<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantTable extends Migration
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
            $table->integer('dni');      
            $table->date("entry_date");
            $table->date("departure_date");
            $table->foreignId("property_id")->constrained("property");
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
