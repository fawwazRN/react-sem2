import { useImmer } from "use-immer";

export default function FormSiswa({ onAddSiswa }) {
  const [dataSiswa, setDataSiswa] = useImmer({
    nama: "",
    usia: "",
    kelas: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDataSiswa((draft) => {
      draft[name] = value;
    });
  }

  function handleClick(e) {
    e.preventDefault();
    onAddSiswa(dataSiswa);
    console.log(dataSiswa);
    setDataSiswa((draft) => {
      draft.nama = "";
      draft.usia = "";
      draft.kelas = "";
    });
  }
  return (
    <div>
      <h1>formulir pendaftaran siswa</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="nama"
          placeholder="masukkan nama..."
          value={dataSiswa.nama}
          onChange={handleChange}
        />
        <input
          type="number"
          name="usia"
          placeholder="masukkan usia..."
          value={dataSiswa.usia}
          onChange={handleChange}
        />
        <input
          type="number"
          name="kelas"
          placeholder="masukkan kelas..."
          value={dataSiswa.kelas}
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
