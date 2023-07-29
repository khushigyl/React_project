import React, { useState } from "react";
import "./login.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(
      `Account created successfully!\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button id="child_button" type="button" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
