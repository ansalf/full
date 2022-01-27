<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SiswaController;
use App\Http\Controllers\Api\MatpelController;
use App\Http\Controllers\Api\GuruController;
use App\Http\Controllers\Api\BukuController;
use App\Http\Controllers\UserController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// view
Route::get('v1/view', [SiswaController::class, 'view']);
Route::get('v1/matpel', [MatpelController::class, 'Matpel']);
Route::get('v1/guru', [GuruController::class, 'Guru']);
Route::get('v1/buku', [BukuController::class, 'Buku']);

// add data
Route::post('v1/tambahbuku', [BukuController::class, 'addBuku']);
Route::post('v1/tambahsiswa', [SiswaController::class, 'addSiswa']);

// edit data
Route::get('v1/getbuku/{id}', [BukuController::class, 'getBuku']);
Route::put('v1/updatebuku/{id}', [BukuController::class, 'updateBuku']);

// register
Route::post('v1/register', [UserController::class, 'register']);
