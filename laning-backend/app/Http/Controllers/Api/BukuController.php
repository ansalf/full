<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Buku;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    function buku()
    {
        return Buku::all();
    }

    function addBuku(Request $req)
    {
        $buku = new Buku;
        $buku->Judul = $req->input('Judul');
        $buku->Kode = $req->input('Kode');
        $buku->save();
        return $req->input();
    }

    function getBuku($id)
    {
        return Buku::find($id);
    }

    function updateBuku($id, Request $req)
    {
        $buku = Buku::find($id);
        $buku->Judul = $req->input('Judul');
        $buku->Kode = $req->input('Kode');

        $buku->save();
        return $req->input();
    }


}
