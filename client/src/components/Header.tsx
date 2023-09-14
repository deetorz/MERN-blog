import { Link } from "react-router-dom";
import "./Header.scss";
import "../common.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    // fetch logout url from backend, include credentials, use post method
  }

  return (
    <header className="header">
      <Link className="header-link color-primary" to={"/"}>
        Derek Noel Torres
      </Link>
      <span>
        {username && (
          <>
            <Link className="header-link color-accent-green" to={"/post"}>
              New Post
            </Link>
            <a onClick={logout} className="header-link color-accent-green">
              Log Out
            </a>
          </>
        )}
        {!username && (
          <>
            <Link className="header-link color-accent-green" to={"/login"}>
              Login
            </Link>
            <Link className="header-link color-accent-green" to={"/register"}>
              Register
            </Link>
          </>
        )}
      </span>
    </header>
  );
};

export default Header;
