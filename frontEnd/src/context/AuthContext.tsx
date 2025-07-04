import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import instance from "../config/axios";
import { Navigate, useNavigate } from "react-router";

interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await instance.post("/auth/login", {
        username,
        password,
      });

      const userInfo = await getCurrentUser(data.token || data.accessToken);

      if (userInfo) {
        localStorage.setItem("accessToken", data.accessToken);

        setUser(userInfo);
        if (userInfo && userInfo.role === "admin") {
          console.log("user info : ", userInfo);
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("failed to login", error);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentUser = async (accessToken: string) => {
    try {
      const { data } = await instance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      console.log("no access token found: ", error);
      return null;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("accessToken");
      setUser(null);
    } catch (error) {
      console.log("error ", error);
    }
  };

  //   for restore user season.

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setLoading(true);
    instance
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => {
        console.log("no access token found: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
