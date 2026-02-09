import { useState } from "react";

export default function Siswa({ noUrut, siswa, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeText(e) {
    onChange({
      ...siswa,
      [e.target.name]: e.target.value,
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
          <button className="btn-delete" onClick={() => onDelete(siswa.id)}>
            Hapus
          </button>
        </div>
      </td>
    </>
  );
}
