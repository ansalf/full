import React from "react";
import { useState } from "react";

function AddBuku() {
  const [Judul, setJudul] = useState("");
  const [Kode, setKode] = useState("");

  async function addBuku() {
    console.warn(Judul, Kode);
    const formData = new FormData();
    formData.append("Judul", Judul);
    formData.append("Kode", Kode);

    let result = await fetch("http://127.0.0.1:8000/api/v1/tambahbuku", {
      method: "POST",
      body: formData,
    });

    alert("Buku added!");
  }
  return (
    <div>
      <h1> Add Buku</h1>

      <div className="com-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Judul"
          onChange={(e) => setJudul(e.target.value)}
        ></input>

        <input
          type="text"
          className="form-control"
          placeholder="Kode"
          onChange={(e) => setKode(e.target.value)}
        ></input>

        <br/>
        <button className="btn btn-primary" onClick={addBuku}>
            add here!
        </button>
      </div>
    </div>
  );
}

export default AddBuku;
