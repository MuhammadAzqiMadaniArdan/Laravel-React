<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
 
class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i = 0; $i < 20; $i++) {
        DB::table('news')->insert([
            'title' => fake()->title(),
            'description' => fake()->paragraph(2, true),//dijadikan 2 paragraf dan digabungkan 
            'category' => fake()->sentence(),
            'author' => fake()->email(),
        ]);
    }
}
}
