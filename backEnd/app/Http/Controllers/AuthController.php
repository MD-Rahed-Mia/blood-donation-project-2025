<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        
        $attr = $request->validated();

        return response()->json([
            'message' => 'success'
        ], 201);

        
    }
    
}
