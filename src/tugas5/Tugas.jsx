import { useState } from "react";
import "../index.css";

export default function Tugas() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  return (
    <div>
      <form action="">
        <h1>formulir masuk nama</h1>
        <input
          type="text"
          placeholder="masukkan nama"
          value={inputValue}
          required={true}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setData([...data, inputValue]);
            setInputValue("");
          }}>
          Tambah nama
        </button>
      </form>
      <h1>data nama di formulir</h1>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{datas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
