import React from "react";
import useAuth from "../context/useAuth";
import UserCard from "../components/home/UserCard";
import Header from "../components/shared/Header";

function Home() {
  return (
    <div className="default-background">
      <Header />
      <div className="d-flex flex-wrap align-items-center justify-content-around p-5 gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default Home;
