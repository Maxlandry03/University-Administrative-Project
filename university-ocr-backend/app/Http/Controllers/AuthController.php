<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \App\Http\Requests\LoginRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
public function login(Request $request)
{
    \Log::info($request->all());

    $user = User::where('email',$request->email)->first();

    if(!$user){
        return response()->json([
            "message"=>"User not found"
        ],404);
    }


    if(!Hash::check($request->password,$user->password)){
        return response()->json([
            "message"=>"Wrong password"
        ],401);
    }


    return response()->json([
        "message"=>"success",
        "user"=>$user
    ]);
}
    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request...
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'You have been successfully logged out.'
        ]);
    }
}
