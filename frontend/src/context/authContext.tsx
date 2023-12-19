import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface RootObject {
  token: string;
  user: User;
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  rol_id: number;
}

interface AuthContextProps {
  login: (user: RootObject) => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: RootObject;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const defaultValue: AuthContextProps = {
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  user: {
    user: {
      id: 0,
      nombre: "",
      email: "",
      rol_id: 0,
    },
    token: "",
  },
};

const AUTH_APP = "AUTH_APP";
export const AuthContext = createContext<AuthContextProps>(defaultValue);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const InitialUser: User = {
    id: 0,
    nombre: "",
    email: "",
    rol_id: 0,
  };

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    (localStorage.getItem(AUTH_APP) as string | null) === "true" ?? false
  );

  const [user, setUser] = useState<RootObject>({
    user: InitialUser,
    token: "",
  });

  const login = useCallback((user: RootObject) => {
    localStorage.setItem(AUTH_APP, user.token);
    setIsAuthenticated(true);
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo<AuthContextProps>(
    () => ({
      login,
      logout,
      user,
      isAuthenticated,
    }),
    [user, login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
