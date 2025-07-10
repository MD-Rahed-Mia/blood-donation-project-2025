<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

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

      /*  login API

       @return @Illuminate\Http\Response 
       */

    public function login(LoginRequest $request){
        $attr = $request->validated();
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if(Auth::attempt($data)){
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'success' => true,
                'message' => 'User logged in Successfully',
                'data' => $user,
                'token' => $token,
                'token_type' => 'Bearer'
            ]);
        }
        else{
            return response()->json([
                'success' => false,
                'message' => 'unathorized',
                'data' => []
            ]);
        }
    }
    
}
