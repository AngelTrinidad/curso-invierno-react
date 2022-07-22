import React from "react";
import FormLogin from "../components/FormLogin";

const LoginPage = () => {
  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="container p-4">
      <h1>Login Page</h1>
      <FormLogin onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
