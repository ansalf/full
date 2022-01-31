<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\LoginTokens;

class token2
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        $login_token = LoginTokens::where('token', $request->token)->first();
        if (!$login_token) {
            return response()->json([
                "status" => false,
                "message" => "unauthorized user"
            ]);
        }

        $request->user_id = $login_token->user_id;

        return $next($request);
    }
}
