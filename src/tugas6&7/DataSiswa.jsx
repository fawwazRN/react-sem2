import { useContext } from "react";
import Siswa from "./Siswa";
import { SiswaContext } from "./SiswaContext";

export default function DataSiswa() {
  const siswas = useContext(SiswaContext);
  return (
    <table className="tabel">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Usia</th>
          <th>Kelas</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {siswas.map((siswa, index) => (
          <tr key={siswa.id}>
            <Siswa noUrut={index + 1} siswa={siswa} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
