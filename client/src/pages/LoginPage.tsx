import "./LoginRegisterPage.scss";
import "../common.scss";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo }: any = useContext(UserContext);
  async function login(ev: any) {
    ev.preventDefault();
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (res.ok) {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
        console.log(userInfo);

        setRedirect(true);
      });
    } else {
      alert("Username/password incorrect");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
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
