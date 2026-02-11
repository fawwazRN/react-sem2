import { useImmerReducer } from "use-immer";
import DataSiswa from "./DataSiswa";
import "./siswa.css";
import FormSiswa from "./FormSiswa";
import { SiswaContext, SiswaDispatchContext } from "./SiswaContext";

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
  const [siswa, dispatch] = useImmerReducer(dataSiswaReducer, initialDataSiswa);
  return (
    <div className="container">
      <SiswaContext.Provider value={siswa}>
        <SiswaDispatchContext.Provider value={dispatch}>
          <h1>
            Siswa app <i>tapi pakai context</i>
          </h1>
          <FormSiswa />
          <DataSiswa />
        </SiswaDispatchContext.Provider>
      </SiswaContext.Provider>
    </div>
  );
}
