import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import * as api from "../services/api";
import type { User, LoginDTO } from "../types/api";
import { AuthContext } from "./AuthContext";
import type { AuthContextType } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserFromToken = async () => {
      if (token) {
        try {
          const userData = await api.getMe();
          setUser(userData);
        } catch (error) {
          console.error("AuthContext useEffect: api.getMe() FALLITO.", error);
          setToken(null);
          setUser(null);
          localStorage.removeItem("authToken");
        }
      }
      setIsLoading(false);
    };
    loadUserFromToken();
  }, [token]);

  // Login
  const login = async (credentials: LoginDTO) => {
    try {
      const response = await api.login(credentials);

      localStorage.setItem("authToken", response.accessToken);

      setToken(response.accessToken);
    } catch (error) {
      console.error("AuthContext login: Fallimento login nel contesto:", error);
      throw error;
    }
  };

  // Logout
  const logout = () => {
    console.log("AuthContext logout: Eseguo logout.");
    setUser(null);
    setToken(null);
    localStorage.removeItem("authToken");
  };

  const contextValue: AuthContextType = {
    user,
    token,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
