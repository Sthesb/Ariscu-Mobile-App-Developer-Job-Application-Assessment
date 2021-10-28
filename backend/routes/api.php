<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodosController;
use App\Http\Controllers\UsersController;

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

// Route::resource('/todos', TodosController::class);

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);
Route::get('/todos', [TodosController::class, 'index']);
Route::get('/todos/{id}', [TodosController::class, 'show']);
Route::get('/todos/search/{todo}', [TodosController::class, 'search']);
Route::post('/todos', [TodosController::class, 'store']);
Route::put('/todos/{id}', [TodosController::class, 'update']);
Route::delete('/todos/{id}', [TodosController::class, 'destroy']);
Route::post('/logout', [UsersController::class, 'logout']);

// protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Route::get('/todos/search/{todo}', [TodosController::class, 'search']);

    // Route::get('/todos', [TodosController::class, 'index']);
    // Route::get('/todos/search/{todo}', [TodosController::class, 'search']);
    // Route::post('/todos', [TodosController::class, 'store']);
    // Route::put('/todos/{id}', [TodosController::class, 'update']);
    // Route::delete('/todos/{id}', [TodosController::class, 'destroy']);
    // Route::post('/logout', [UsersController::class, 'logout']);
});
