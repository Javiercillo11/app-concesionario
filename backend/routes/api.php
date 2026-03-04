<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VehicleController;
use App\Http\Controllers\Api\AuthController;

Route::post('login', [AuthController::class, 'login']);

// Rutas públicas (cliente puede ver)
Route::get('vehicles', [VehicleController::class, 'index']);
Route::get('vehicles/{vehicle}', [VehicleController::class, 'show']);

// Rutas protegidas (solo autenticados)
Route::middleware('auth:sanctum')->group(function () {

    // Solo admin puede modificar
    Route::middleware('isAdmin')->group(function () {
        Route::post('vehicles', [VehicleController::class, 'store']);
        Route::put('vehicles/{vehicle}', [VehicleController::class, 'update']);
        Route::delete('vehicles/{vehicle}', [VehicleController::class, 'destroy']);
    });
});