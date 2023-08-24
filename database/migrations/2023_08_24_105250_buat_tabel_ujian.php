<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BuatTabelUjian extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ujian', function (Blueprint $table) {
            $table->id();
            $table->string('nama_uian',100);
            $table->string('nama_mapel',100);
            $table->integer('jumlah_soal');
            $table->integer('durasi');
            $table->text('deskripsi');
            $table->enum('acak_soal',['Y','N']);
            $table->enum('acak_jawaban',['Y','N']);
            $table->enum('tampilan_hasil',['Y','N']);
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
        Schema::dropIfExists('ujian');
    }
}
