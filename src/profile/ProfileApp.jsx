import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    address: "jakarta",
  });
  return (
    <>
      <ProfileContext.Provider value={profile}>
        <h1>Profile App</h1>
        <ProfileForm profile={profile} setProfile={setProfile} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
