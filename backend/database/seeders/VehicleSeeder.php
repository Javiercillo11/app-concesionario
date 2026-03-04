<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Vehicle;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Vehicle::create([
            'brand' => 'Toyota',
            'model' => 'Corolla',
            'year' => 2023,
            'price' => 20000.00,
            'description' => 'Toyota Corolla en excelente estado, bajo consumo.',
            'image' => null,
        ]);

        Vehicle::create([
            'brand' => 'BMW',
            'model' => 'X5',
            'year' => 2022,
            'price' => 55000.00,
            'description' => 'BMW X5 automático, full equipamiento.',
            'image' => null,
        ]);
    }
}