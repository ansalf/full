import React from "react";
import { useState } from "react";

function AddSiswa() {
  const [NIS, setNIS] = useState("");
  const [Nama, setNama] = useState("");

  async function addSiswa() {
    console.warn(NIS, Nama);
    const formData = new FormData();
    formData.append("NIS", NIS);
    formData.append("Nama", Nama);

    let result = await fetch("http://127.0.0.1:8000/api/v1/tambahsiswa", {
      method: "POST",
      body: formData,
    });

    alert("siswa added!");
  }
  return (
    <div>
      <h1>Add Siswa</h1>
      <div className="com-sm-6 offset-sm-3">
        <br />

        <input
          type="text"
          className="form-control"
          placeholder="NIS"
          onChange={(e) => setNIS(e.target.value)}
        ></input>

        <input
          type="text"
          className="form-control"
          placeholder="Nama"
          onChange={(e) => setNama(e.target.value)}
        ></input>

        <button className="btn btn-primary" onClick={addSiswa}>
            add here!
        </button>
      </div>
    </div>
  );
}

export default AddSiswa;
