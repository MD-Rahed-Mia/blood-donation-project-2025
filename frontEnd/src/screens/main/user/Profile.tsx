import React from "react";
import UserProfileCard from "../../../components/profile/UserProfileCard";
import ProfileInformation from "../../../components/profile/ProfileInformation";
import Header from "../../../components/shared/Header";

function Profile() {
  return (
    <div className="h-screen">
      <Header />
      <div className="row">
        <div className="col">
          <UserProfileCard />
        </div>
        <div className="col">
          <ProfileInformation />
        </div>
      </div>
    </div>
  );
}

export default Profile;
