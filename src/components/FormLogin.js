import React, { useState } from "react";

const FormLogin = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    // Limpiamos el valor de error antes de la validacion
    setTextError("");

    // Validacion de los campos
    if (!email || !password) {
      setTextError("Complete todos los campos!");
      return;
    }

    // El formulario esta correcto, realizar el submit
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <form>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="login_email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
        <label className="form-label" htmlFor="login_email">
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="login_password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
        <label className="form-label" htmlFor="login_password">
          Password
        </label>
      </div>

      {!!textError && <p className="text-danger text-center">{textError}</p>}

      <button
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={handleClick}
      >
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
