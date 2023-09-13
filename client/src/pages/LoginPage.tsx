import "./LoginRegisterPage.scss";
import "../common.scss";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function login(ev: any) {
    ev.preventDefault();
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      alert("Registration successful!");
    } else {
      alert("Registration failed.");
    }
  }

  return (
    <form className="form" onSubmit={login}>
      <input
        className="background-secondary color-primary"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        className="background-secondary color-primary"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button className="background-accent-purple color-primary">Login</button>
    </form>
  );
};

export default LoginPage;
