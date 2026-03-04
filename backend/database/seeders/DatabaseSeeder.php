<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Admin
        User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('123456'),
            'role' => 'admin',
        ]);

        // Cliente
        User::create([
            'name' => 'Cliente',
            'email' => 'cliente@test.com',
            'password' => Hash::make('123456'),
            'role' => 'client',
        ]);
        $this->call([
            VehicleSeeder::class,
        ]);
    }
}
