import { createContext } from "react";
import type { User, LoginDTO } from "../types/api";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (credentials: LoginDTO) => Promise<void>;
  logout: () => void;
}

// @ts-expect-error Inizializzo con 'undefined' per hook useAuth
export const AuthContext = createContext<AuthContextType>(undefined);
