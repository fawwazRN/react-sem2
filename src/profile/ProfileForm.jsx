export default function ProfileForm({ profile, setProfile }) {
  function handleChangeName(event) {
    setProfile({ ...profile, name: event.target.value });
  }

  function handleChangeAddress(event) {
    setProfile({ ...profile, address: event.target.value });
  }

  return (
    <>
      <h2>Profile Form</h2>
      <input type="text" value={profile.name} onChange={handleChangeName} />
      <input
        type="text"
        value={profile.address}
        onChange={handleChangeAddress}
      />
    </>
  );
}
