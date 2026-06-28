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
    $request->validate([
        'email' => 'required|email',
        'password' => 'nullable',
        'student_id' => 'nullable',
        'role' => 'required'
    ]);

    $studentId = null; // ← ADD THIS

    // ======================
    // STUDENT LOGIN
    // ======================
    if ($request->role === 'Student') {

        $student = Student::where('email', $request->email)
            ->where('student_id', $request->student_id)
            ->first();

        if (!$student) {
            return response()->json([
                'message' => 'Invalid student credentials'
            ], 401);
        }

        $studentId = $student->student_id; // ← ADD THIS

        // 🔥 CREATE USER IF NOT EXISTS
        $user = User::firstOrCreate(
            ['email' => $student->email],
            [
                'name' => $student->name,
                'role' => 'student',
                'password' => bcrypt('123456')
            ]
        );
    }
    // ======================
    // STAFF/ADMIN LOGIN
    // ======================
    else {

        if (!Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();
    }

    // ======================
    // CREATE TOKEN
    // ======================
    $user->tokens()->delete();
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'access_token' => $token,
        'user' => $user,
        'student_id' => $studentId,
    ]);
}

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request...
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'You have been successfully logged out.'
        ]);
    }
}