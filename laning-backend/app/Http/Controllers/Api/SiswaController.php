<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Siswa;

class SiswaController extends Controller
{
    function view()
    {
        return Siswa::all();
    }

    function addSiswa(Request $req) {
        $siswa = new Siswa;
        $siswa->NIS = $req->input('NIS');
        $siswa->Nama = $req->input('Nama');
        $siswa->save();
        return $req->input();
    }
}
