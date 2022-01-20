import React from "react";
import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

function UpdateBuku(props) {
  const [Judul, setJudul] = useState("");
  const [Kode, setKode] = useState("");

  console.warm("props", props.match.params.id);
  const [data, setData] = useState([]);

  useEffect(async () => {
    let result = await fetch(
      "http://127.0.0.1:8000/api/v1/getbuku/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
    setJudul(result.Judul);
    setKode(result.Kode);
  }, []);

  async function updateBuku(id) {
    const formData = new formData();
    formData.append("Judul", Judul);
    formData.append("Kode", Kode);

    let result = await fetch(
      "http://127.0.0.1:8000/api/v1/updatebuku/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );

    alert("berhasil");
  }

  return (
    <div>
      <h1>UPDATE</h1>

      <div className="com-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          defaultValue={data.Judul}
          onChange={(e) => setJudul(e.target.value)}
        ></input>

        <input
          type="text"
          className="form-control"
          defaultValue={data.Kode}
          onChange={(e) => setKode(e.target.value)}
        ></input>

        <br />
        <button className="btn btn-primary" onClick={()=> updateBuku(data.id)}>
          update here!
        </button>
      </div>
    </div>
  );
}

export default UpdateBuku;
