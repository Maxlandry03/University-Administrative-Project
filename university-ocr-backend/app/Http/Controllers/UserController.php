<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
   public function index(Request $request)
{
    $user = $request->user();

    if (!$user) {
        return response()->json([
            'message' => 'User not authenticated'
        ], 401);
    }

    if ($user->role !== 'Super Administrator') {
        return response()->json([
            'message' => 'Forbidden'
        ], 403);
    }

    return User::where('id', '!=', $user->id)->get();
}
    /**
     * Store a newly created user in storage.
     */
    public function store(Request $request)
    {
        // Ensure only Super Administrators can create users
        if ($request->user()->role !== 'Super Administrator') {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        try {
            $validatedData = $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
                'password' => ['required', 'string', 'confirmed', Password::min(8)],
                'role' => ['required', Rule::in(['Super Administrator', 'Department Administrator'])],
                'department' => ['nullable', 'required_if:role,Department Administrator', 'string'],
            ]);

            $userData = [
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'role' => $validatedData['role'],
            ];
            

            if ($validatedData['role'] === 'Department Administrator') {
                $userData['department'] = $validatedData['department'];
            }

            $user = User::create($userData);

            return response()->json([
                'message' => 'User created successfully.',
                'user' => $user
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => 'Validation failed', 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            // Log the error for debugging purposes.
            \Log::error('User creation failed: '.$e->getMessage());
            return response()->json(['message' => 'An unexpected error occurred.'], 500);
        }
    }

    public function updateRole(Request $request, $email)
    {
        // Find the user by email
        $userToUpdate = User::where('email', $email)->firstOrFail();

        // Ensure only Super Administrators can update roles
        if ($request->user()->role !== 'Super Administrator') {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $request->validate([
            'role' => ['required', Rule::in(['Super Administrator', 'Department Administrator'])],
        ]);

        $userToUpdate->role = $request->role;
        $userToUpdate->save();

        return response()->json($userToUpdate);
    }

    public function destroy(Request $request, $email)
    {
        // Find the user by email
        $userToDelete = User::where('email', $email)->firstOrFail();

        if ($request->user()->role !== 'Super Administrator') {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $userToDelete->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
