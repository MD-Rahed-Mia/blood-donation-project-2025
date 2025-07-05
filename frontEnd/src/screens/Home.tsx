import React from "react";
import useAuth from "../context/useAuth";

function Home() {
  const { logout } = useAuth();

  return (
    <div>
      Home
      <button onClick={() => logout()}>log out</button>
    </div>
  );
}

export default Home;
