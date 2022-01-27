import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { alert } from "react-bootstrap";

function UpdateBuku(props) {
  const [Judul, setJudul] = useState("");
  const [Kode, setKode] = useState("");

  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(async () => {
    let result = await fetch("http://127.0.0.1:8000/api/v1/getbuku/" + id);
    result = await result.json();
    setData(result);
    setJudul(result.Judul);
    setKode(result.Kode);
  }, []);

  async function updateBuku(id) {
    const formData = new FormData();
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
        <form>
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
          <button
            className="btn btn-primary"
            onClick={() => updateBuku(data.id)}
          >
            update here!
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBuku;
