<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = [];
        $departments = ['Computer Science', 'Software Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'];
        $levels = ['HND1', 'HND2', 'BSc2', 'BSc3'];
        $firstNames = ['John', 'Jane', 'Peter', 'Mary', 'Chris', 'Pat', 'Alex', 'Sam', 'Taylor', 'Jordan'];
        $lastNames = ['Smith', 'Doe', 'Jones', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];

        for ($i = 0; $i < 10; $i++) {
            $name = $firstNames[array_rand($firstNames)] . ' ' . $lastNames[array_rand($lastNames)];
            $students[] = [
                'name' => $name,
                'email' => str_replace(' ', '.', strtolower($name)) . '@univ.edu',
                'student_id' => 'IUC2026' . str_pad(45 + $i, 4, '0', STR_PAD_LEFT),
                'department' => $departments[array_rand($departments)],
                'level' => $levels[array_rand($levels)],
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('students')->insert($students);
    }
}