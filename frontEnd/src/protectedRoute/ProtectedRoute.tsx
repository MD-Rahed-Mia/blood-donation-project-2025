import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../context/useAuth";
import Loader from "../components/shared/Loader";

function ProtectedRoute({ allowRole, children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (!user) return <Navigate to="/login" replace />;

  if (!allowRole.includes(user.role)) {
    return <div>Unauthorized...</div>;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
