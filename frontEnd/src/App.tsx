import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import ResetPassword from "./screens/auth/ResetPassword";
import ForgetPassword from "./screens/auth/ForgetPassword";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import Dashboard from "./screens/main/dashboard/Dashboard";
import NotFound from "./screens/404";
import Profile from "./screens/main/user/Profile";

function App() {
  return (
    <>
      <Routes>
        {/* Protected Route */}

        <Route
          path="/"
          element={
            <ProtectedRoute allowRole={["user", "admin"]}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowRole={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowRole={["user"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
