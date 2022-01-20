import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Buku() {
    const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/v1/buku");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Table>
        <thead>
          <th>ID</th>
          <th>Judul</th>
          <th>Kode</th>
        </thead>
        {data.map((item) => (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.Judul}</td>
              <td>{item.Kode}</td>
              <td>
                  <Link to={"updatebuku/"+item.id}>
                      <span>Update</span>
                  </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Buku;
