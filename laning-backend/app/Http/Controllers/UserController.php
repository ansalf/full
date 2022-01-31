<?php

namespace App\Http\Controllers;

use App\Models\LoginTokens;
use App\Models\User;
use App\Rules\Uppercase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "first_name" => ["required", 'min:2', 'max:20', new Uppercase],
            "last_name" => ["required", 'min:2', 'max:20', new Uppercase],
            "username" => "required|unique:users",
            "password" => ["required", 'max:12', Password::min(5)]
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "message" => "Invalid field"
            ]);
        }

        $user = new User;
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->username = $request->username;
        $user->password = bcrypt($request->password);
        $user->save();

        ## jika gagal ###

        // return response()->json([
        //     "status" => false,
        //     "data" => "Username/Password salah"
        // ]);

        ### jika sukses ####

        $token = bcrypt(Str::random(8));
        $user_id = User::where("username", $request->username)->value("id");

        $login_token = new LoginTokens;
        $login_token->user_id = $user_id;
        $login_token->token = $token;
        $login_token->save();


        return response()->json([
            "token" => $token,
            "role" => "user"
        ]);
    }

    function login(Request $req)
    {
        $user = User::where('username', $req->username)->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return response()->json([
                "status" => false,
                "message" => "Invalid Login"
            ]);
        }

        $token = bcrypt(Str::random(8));

        LoginTokens::where('user_id', $user->id)->delete();

        $login_token = new LoginTokens;
        $login_token->user_id = $user->id;
        $login_token->token = $token;
        $login_token->save();


        return response()->json([
            "token" => $token,
            "role" => "user"
        ]);
    }

    function Logout(Request $reg)
    {
        ### Cek Token ###
        // $login_token = LoginTokens::where('token', $reg->token)->first();
        // if (!$login_token) {
        //     return response()->json([
        //         "status" => false,
        //         "message" => "unauthorized user"
        //     ]);
        // }

        ### Hapus token ###
        LoginTokens::where('user_id', $reg->user_id)->delete();

        ### Sukses Logout ###
        return response()->json([
            "message" => " logout success"
        ]);
    }
}
