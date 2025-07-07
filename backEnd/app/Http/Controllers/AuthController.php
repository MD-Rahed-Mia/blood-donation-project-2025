<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        // $request->validate([
        //     'first_name'=>'required|string|max:255',
        //     'last_name' => 'required|string|max:255',
        //     'email'=>'required|string|email|max:255|unique:users',
        //     'password'=>'required|string|min:8|confirmed'
        // ]);
       

        $attr = $request->validated();

        return response()->json([
            'message' => 'success'
        ], 201);

        
    }
    
}
