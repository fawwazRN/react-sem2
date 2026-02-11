import { useContext, useState } from "react";
import { SiswaDispatchContext } from "./SiswaContext";

export default function Siswa({ noUrut, siswa }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(SiswaDispatchContext);

  function handleChangeText(e) {
    dispatch({
      type: "CHANGE_SISWA",
      ...siswa,
      [e.target.name]: e.target.value,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_SISWA",
      id: siswa.id,
    });
  }

  return (
    <>
      <td>{noUrut}</td>
      <td>
        {isEditing ? (
          <input name="nama" value={siswa.nama} onChange={handleChangeText} />
        ) : (
          siswa.nama
        )}
      </td>
      <td>
        {isEditing ? (
          <input name="usia" value={siswa.usia} onChange={handleChangeText} />
        ) : (
          siswa.usia
        )}
      </td>
      <td>
        {isEditing ? (
          <input name="kelas" value={siswa.kelas} onChange={handleChangeText} />
        ) : (
          siswa.kelas
        )}
      </td>
      <td>
        <div>
          {isEditing ? (
            <button className="btn-save" onClick={() => setIsEditing(false)}>
              Simpan
            </button>
          ) : (
            <button className="btn-edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
          <button className="btn-delete" onClick={handleDelete}>
            Hapus
          </button>
        </div>
      </td>
    </>
  );
}
