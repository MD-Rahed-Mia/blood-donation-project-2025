<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterRequest;
use App\Models\User;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){

        $attr = $request->validated();

        $data = User::create([
            'name' => $request->first_name,
            'email' => $request->email,
            'password' => $request->password
        ]);

        return response()->json([
            'success' => true,
            'message' => 'User Created Successfully',
            'data' => $data
        ]);

        //$token = $data->createToken('auth_token')->plainTextToken;

        // return response()->json([
        //     'access_token' => $token,
        //     'token_type' => 'Bearer'
        // ]);
        
       }
    
}
