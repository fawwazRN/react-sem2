import Siswa from "./Siswa";

export default function DataSiswa({ dataSiswa, onChange, onDelete }) {
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
        {dataSiswa.map((siswa, index) => (
          <tr key={siswa.id}>
            <Siswa
              noUrut={index + 1}
              siswa={siswa}
              onChange={onChange}
              onDelete={onDelete}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
