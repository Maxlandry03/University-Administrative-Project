<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/health', fn () => response()->json(['status' => 'ok']));
Route::post('/login', [AuthController::class, 'login']);


// Protected routes
Route::middleware('auth:sanctum')->group(function () {
     
    Route::get('/files/{id}', [FileController::class, 'show']);

    Route::get('/users', [UserController::class, 'index']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/files', [FileController::class, 'index']);
    Route::post('/files', [FileController::class, 'store']);

    Route::put('/files/{fileId}/status', [FileController::class, 'updateStatus']);
    Route::post('/files/{id}/forward', [FileController::class, 'forward']);

    Route::post('/users', [UserController::class, 'store']);
    Route::put('/users/{email}', [UserController::class, 'updateRole']);
    Route::delete('/users/{email}', [UserController::class, 'destroy']);

    Route::get('/search', [FileController::class, 'search']);
});
