import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

function Matpel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/v1/matpel");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Table>
        <thead>
          <th>ID</th>
          <th>Matpel</th>
          <th>Kode</th>
        </thead>
        {data.map((item) => (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.Matpel}</td>
              <td>{item.Kode}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Matpel;
