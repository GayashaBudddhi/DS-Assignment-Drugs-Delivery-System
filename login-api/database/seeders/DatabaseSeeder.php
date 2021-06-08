<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Product::factory(50) -> create(); 
        DB::table('users')->insert([
           'first_name' => 'admin',
             'last_name' => 'admin',
            'full_name' => 'admin',
            'email' =>'admin@gmail.com',
            'password' => '1234',
            'aType' => 'admin'
        ]);
    }
}
