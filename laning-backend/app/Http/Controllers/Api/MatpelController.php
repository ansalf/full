<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Matpel;
use Illuminate\Http\Request;

class MatpelController extends Controller
{
    function matpel()
    {
        return Matpel::all();
    }
}
