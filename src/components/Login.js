import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:8000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "content-type": "application/json" },
    });

    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("please enter details");
    }
  };
  return (
    <div className="login">
      <input
        type="text"
        className="inputBox"
        placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />

      <button className="appButton" onClick={handleLogin} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
