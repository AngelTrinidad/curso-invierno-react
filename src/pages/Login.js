import React, { useContext } from "react";
import FormLogin from "../components/FormLogin";
import { AuthContext } from "../contexts/AuthContext";
import { helpHttp } from "../utils/httpHelper";

const LoginPage = () => {
  const { setAuth, saveUser } = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    // Llamada al Endpoint de login del servidor
    const response = await helpHttp().post(
      "https://curso-react-backend-una.herokuapp.com/v1/auth/login",
      {
        body: {
          email,
          password,
        },
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // Caso exitoso: almancenar la info resultante en el AuthContext
    setAuth(response.tokens.access.token);
    saveUser(response.user);
  };

  return (
    <div className="container p-4">
      <h1>Login Page</h1>
      <FormLogin onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
