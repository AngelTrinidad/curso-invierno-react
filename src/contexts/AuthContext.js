import React, { createContext, useEffect, useState } from "react";
import { JWT_KEYS } from "../utils/constants";

// Crear el context para utilizar dentro de los componentes
export const AuthContext = createContext({});

// Crear el provider que es necesario para utilizar el contexto
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem(JWT_KEYS.accessToken);
    const userFromLS = localStorage.getItem(JWT_KEYS.user);

    setIsLogged(!!accessToken);
    setUser(!!userFromLS ? JSON.parse(userFromLS) : null);
  }, []);

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
