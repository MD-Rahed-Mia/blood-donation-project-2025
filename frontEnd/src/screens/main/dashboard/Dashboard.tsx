import React from "react";
import useAuth from "../../../context/useAuth";
import Sidebar from "../../../components/dashboard/Sidebar";
import Layout from "./Layout";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
}

export default Dashboard;
