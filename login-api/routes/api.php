<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\productController;

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


//for user and admin login
Route::post("user-signup", [UserController::class, 'userSignUp']);
Route::post("user-login", [UserController::class, 'userLogin']);
Route::get("user/{email}", [UserController::class, 'userDetail']);
Route::delete("user/{id}", [UserController::class, 'deleteuser']);

//for cart
// //admin crud function for items
//Route::resource('products', 'ProductController');
Route::post("additems", [ProductController::class, 'store']);
Route::get("products", [ProductController::class, 'index']);
Route::get("products/{id}/show", [ProductController::class, 'show']);
Route::put("products/{id}/edit", [ProductController::class, 'update']);
Route::delete("products/{id}", [ProductController::class, 'destroy']);


//search nav
Route::get("frontend", [ProductController::class, 'frontend']);
Route::get("backend", [ProductController::class, 'backend']);

//cart

Route::get("cartview/{id}", [ProductController::class, 'show']);

//payment api will be made using wso2
