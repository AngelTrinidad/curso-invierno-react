import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const HomePage = () => {
  const { isLogged, user } = useContext(AuthContext);

  console.log({ user, isLogged });

  return (
    <div className="container p-4">
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
