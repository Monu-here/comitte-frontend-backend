<?php

use App\Http\Controllers\comitteController;
use App\Http\Controllers\imageController;
use App\Http\Controllers\personController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('list',[personController::class,'list']);
Route::post('add',[personController::class,'add']);
Route::post('delete',[personController::class,'delete']);

Route::get('comitte/list',[comitteController::class,'list']);
Route::post('comitte/add',[comitteController::class,'add']);
Route::post('comitte/edit',[comitteController::class,'edit']);
Route::post('comitte/delete',[comitteController::class,'delete']);

Route::get('image/list',[imageController::class,'image']);
Route::post('image/add',[imageController::class,'imagestore']);
Route::post('image/delete',[imageController::class,'imageDelete']);

