import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

function Guru() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/v1/guru");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Table>
        <thead>
          <th>ID</th>
          <th>Nama</th>
          <th>Matpel</th>
        </thead>
        {data.map((item) => (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.Nama}</td>
              <td>{item.Matpel}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Guru;
