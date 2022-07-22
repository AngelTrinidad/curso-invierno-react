import React, { createContext, useState } from "react";
import { JWT_KEYS } from "../utils/constants";

// Crear el context para utilizar dentro de los componentes
export const AuthContext = createContext({});

// Crear el provider que es necesario para utilizar el contexto
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const setAuth = (accessToken) => {
    setIsLogged(true);
    localStorage.setItem(JWT_KEYS.accessToken, accessToken);
  };

  const removeAuth = () => {
    setIsLogged(false);
    localStorage.removeItem(JWT_KEYS.accessToken);
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, user, setAuth, removeAuth, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
