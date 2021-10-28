<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;


class UsersController extends Controller
{
    // register user and give token
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])

        ]);

        // $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $user
            // 'token' => $token
        ];
        return response($response, 201);
    }


    // logout user and delete token
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }

    // login user and give token
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        // check user by email
        $user = User::where('email', $fields['email'])->first();

        // check if user exits
        if (!$user || !Hash::check($fields['password'], $user['password'])) {
            return response(['message' => 'Email or password is incorrect!'], 404);
        }


        $token = $user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response()->json($response, 200);
    }
}
