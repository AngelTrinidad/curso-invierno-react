import React, { createContext, useEffect, useState } from "react";
import { JWT_KEYS } from "../utils/constants";

// Crear el context para utilizar dentro de los componentes
export const AuthContext = createContext({});

// Crear el provider que es necesario para utilizar el contexto
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem(JWT_KEYS.accessToken) || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(JWT_KEYS.user)) || null
  );

  const setAuth = (accessToken) => {
    setIsLogged(true);
    localStorage.setItem(JWT_KEYS.accessToken, accessToken);
  };

  const removeAuth = () => {
    setIsLogged(false);
    setUser(null);
    localStorage.removeItem(JWT_KEYS.accessToken);
    localStorage.removeItem(JWT_KEYS.user);
  };

  const saveUser = (newValue) => {
    setUser(newValue);
    localStorage.setItem(JWT_KEYS.user, JSON.stringify(newValue));
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, user, setAuth, removeAuth, saveUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
