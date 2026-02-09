import { useImmerReducer } from "use-immer";
import FormSiswa from "./formSiswa";
import DataSiswa from "./DataSiswa";
import "./siswa.css";

const initialDataSiswa = [];
let nextId = 1;
function dataSiswaReducer(dataSiswa, action) {
  if (action.type === "ADD_SISWA") {
    dataSiswa.push({
      id: nextId++,
      nama: action.nama,
      usia: action.usia,
      kelas: action.kelas,
    });
  } else if (action.type === "CHANGE_SISWA") {
    const index = dataSiswa.findIndex((siswa) => siswa.id === action.id);
    dataSiswa[index].nama = action.nama;
    dataSiswa[index].usia = action.usia;
    dataSiswa[index].kelas = action.kelas;
  } else if (action.type === "DELETE_SISWA") {
    const index = dataSiswa.findIndex((siswa) => siswa.id === action.id);
    dataSiswa.splice(index, 1);
  }
}

export default function SiswaApp() {
  const [dataSiswa, dispatch] = useImmerReducer(
    dataSiswaReducer,
    initialDataSiswa,
  );

  function handleAddSiswa(data) {
    dispatch({
      type: "ADD_SISWA",
      ...data,
    });
  }
  function handleChangeSiswa(siswa) {
    dispatch({
      type: "CHANGE_SISWA",
      id: siswa.id,
      nama: siswa.nama,
      usia: siswa.usia,
      kelas: siswa.kelas,
    });
  }
  function handleDeleteSiswa(id) {
    dispatch({
      type: "DELETE_SISWA",
      id: id,
    });
  }

  return (
    <div className="container">
      <h1>data siswa</h1>
      <FormSiswa onAddSiswa={handleAddSiswa} />
      <DataSiswa
        dataSiswa={dataSiswa}
        onChange={handleChangeSiswa}
        onDelete={handleDeleteSiswa}
      />
    </div>
  );
}
