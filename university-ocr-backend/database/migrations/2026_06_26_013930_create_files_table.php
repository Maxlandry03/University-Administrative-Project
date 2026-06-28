<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up(): void
{
    Schema::create('files', function (Blueprint $table) {
        $table->id();

        $table->string('student_id');
        $table->foreign('student_id')
              ->references('student_id')
              ->on('students')
              ->onDelete('cascade');

        $table->string('title');
        $table->text('description')->nullable();
        $table->string('file_path');
        $table->string('destination_department');

        $table->enum('status', [
            'Pending',
            'Received',
            'In_review',
            'Approved',
            'Rejected',
            'Forwarded'
        ])->default('Pending');

        $table->text('remarks')->nullable();

        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
