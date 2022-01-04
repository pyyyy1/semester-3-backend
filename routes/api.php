<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route Patient Controller => method api resource
Route::apiResource('patients', PatientController::class);

// Route untuk menampilkan data berdasarkan status
Route::get('/patients/status/dead', [PatientController::class, 'dead']);
Route::get('/patients/status/positive', [PatientController::class, 'positive']);
Route::get('/patients/status/recovered', [PatientController::class, 'recovered']);